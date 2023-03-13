// API : Application Programming Interface
// ㄴ Open API : 다양한 기업에서 공익의 목적 또는 다른 이유로 무료로 인터페이스를 이용할 수 있게 제공
// ㄴ Private API : 유료

// Open API
// ㄴ 공공 데이터 포탈
// ㄴ 카카오 개발자 센터
// ㄴ 네이버 개발자 센터
// ㄴ ...

// ajax
// fetch() 로도 구현 가능(일부 브라우저 또는 하위 버전의 스크립트에서 호환 X)
// 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
let page = 1;
let size = 5;
let copy;

const query = document.querySelector(".query");
const container = document.querySelector(".container");
const moreBtn = document.querySelector(".moreBtn");

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("submit", e => {
    e.preventDefault();
    if (query !== "") {
        copy = query.value;
        page = 1;
        searchRequest(query.value, page, size);
        query.value = "";
        size = 5;
    }
});

moreBtn.addEventListener("click", e => {
    if (copy !== undefined) {
        size += 5;
        searchRequest(copy, page, size);
    }
});

function searchRequest(query, page, size) {
    $.ajax({
        "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=${size}&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK 222055154269685e2d3f4387e2a126ae"
        },
    })
        .done((response) => {
            console.log(response);
            // container 안에
            // <div class="result-card">
            //     <img class="book-img" src="/book.png">
            //     <h4 class="book-title">title</h4>
            //     <p class="book-description">도서상세정보</p>
            //     <span class="price">1000원</span>
            //     <p class="book-info">
            //          <span class="author">저자</span>|<span class="publisher">출판사</span>
            //     </p>
            // </div>
            // 새로 생성 및 구성 완료한 result-card 요소를 추가
            $(".container").empty();
            for (let i = 0; i < response.documents.length; i++) {
                const status = response.documents[i].status;
                if (status == "정상판매" && response.documents[i].thumbnail != "") {
                    const imgA = response.documents[i].url;
                    const title = response.documents[i].title;
                    const company = response.documents[i].publisher;
                    const money = response.documents[i].price;
                    const name = response.documents[i].authors;
                    const saleMoney = response.documents[i].sale_price;
                    const descriptionTxt = response.documents[i].contents;

                    const div = document.createElement("div");
                    const img = document.createElement("img");
                    const a = document.createElement("a");
                    const h4 = document.createElement("h4");
                    const description = document.createElement("p");
                    const info = document.createElement("p");
                    const priceLine = document.createElement("p");
                    const price = document.createElement("span");
                    const sale = document.createElement("span");
                    const author = document.createElement("span");
                    const line = document.createElement("span");
                    const publisher = document.createElement("span");

                    div.setAttribute("class", "result-card");
                    img.setAttribute("class", "book-img");
                    img.setAttribute("src", `${response.documents[i].thumbnail}`);
                    h4.setAttribute("class", "book-title");
                    description.setAttribute("class", "book-description");
                    info.setAttribute("class", "book-info");
                    priceLine.setAttribute("class", "priceLine");
                    price.setAttribute("class", "price");
                    sale.setAttribute("class", "sale");
                    author.setAttribute("class", "author");
                    publisher.setAttribute("class", "publisher");
                    a.setAttribute("href", `${imgA}`);
                    a.setAttribute("target", "blank")
                    line.setAttribute("class", "line")

                    description.innerText = `${descriptionTxt}`;
                    h4.innerText = `${title}`;
                    price.innerText = `${money}원`;
                    sale.innerText = `  ${saleMoney}원`;
                    publisher.innerText = ` ${company}`;
                    author.innerText = `${name} |`;
                    line.innerText = " → ";

                    if (saleMoney == -1) {
                        sale.setAttribute("style", "display : none");
                        price.setAttribute("style", "color : black; text-decoration : none");
                        line.setAttribute("style", "display : none");
                    }

                    div.append(a);
                    a.append(img);
                    div.append(h4);
                    div.append(description);
                    div.append(priceLine);
                    priceLine.append(price);
                    priceLine.append(line);
                    priceLine.append(sale);
                    div.append(info);
                    info.append(author);
                    info.append(publisher);
                    container.append(div);

                }
            }
        });
}