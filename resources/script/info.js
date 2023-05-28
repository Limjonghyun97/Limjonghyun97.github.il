const projectInfo = document.querySelector(".projectInfo");
const projectInfoText = document.querySelector(".projectInfoText");
const img = document.createElement("img");
const h4 = document.createElement("h4");
const a = document.createElement("a");
const p = document.createElement("p");

function Omok() {
    projectInfo.setAttribute("style", "display:flex");
    projectInfoText.append(a);
    a.href = "/omok"
    a.setAttribute("target", "_blank")
    img.src = "/resources/images/omok.png"
    h4.innerText = "오목"
    p.innerText = "js로 구현한 오목게임입니다."
    a.append(img);
    a.append(h4);
    a.append(p);
}

function RPG_Game() {
    projectInfo.setAttribute("style", "display:flex");
    projectInfoText.append(a);
    a.href = "https://github.com/Limjonghyun97/rpg-game"
    a.setAttribute("target", "_blank")
    img.src = "/resources/images/rpgGame.jpeg"
    h4.innerText = "RPG GAME"
    p.innerText = "JAVA 콘솔에서 실행되는 RPG Game을 구현한 개인 프로젝트입니다."
    a.append(img);
    a.append(h4);
    a.append(p);
}

function ATM() {
    projectInfo.setAttribute("style", "display:flex");
    projectInfoText.append(a);
    a.href = "https://github.com/Limjonghyun97/atm"
    a.setAttribute("target", "_blank")
    img.src = "/resources/images/atm.jpeg"
    h4.innerText = "ATM"
    p.innerText = "JAVA 콘솔에서 실행되는 ATM을 구현한 개인 프로젝트입니다."
    a.append(img);
    a.append(h4);
    a.append(p);
}

function To_Do_List() {
    projectInfo.setAttribute("style", "display:flex");
    projectInfoText.append(a);
    a.href = "/todo"
    a.setAttribute("target", "_blank")
    img.src = "/resources/images/todo.png"
    h4.innerText = "To Do List"
    p.innerText = "JS로 구현한 To Do List의 기능을 구현한 개인 프로젝트입니다."
    a.append(img);
    a.append(h4);
    a.append(p);
}

function Book_Search() {
    projectInfo.setAttribute("style", "display:flex");
    projectInfoText.append(a);
    a.href = "/booksearch"
    a.setAttribute("target", "_blank")
    img.src = "/resources/images/booksearch.jpg"
    h4.innerText = "Book Search"
    p.innerText = "JS와 카카오 검색 API를 사용하여 구현한 Book Search의 기능을 구현한 개인 프로젝트입니다."
    a.append(img);
    a.append(h4);
    a.append(p);
}

function intranet() {
    projectInfo.setAttribute("style", "display:flex");
    projectInfoText.append(a);
    a.href = "http://www.intranet-service.store/"
    a.setAttribute("target", "_blank")
    img.src = "/resources/images/intranet.png"
    h4.innerText = "학생정보시스템"
    p.innerText = "JAVA, JS, MYSQL, JSP, 카카오 주소 API, MVC 1패턴을 사용한 팀프로젝트로 4명의 팀원들과 함께 진행했고 대학교에서 사용하는 학생정보시스템을 클론한 프로젝트입니다."
    a.append(img);
    a.append(h4);
    a.append(p);
}

function icando() {
    projectInfo.setAttribute("style", "display:flex");
    projectInfoText.append(a);
    a.href = "http://icando.store/"
    a.setAttribute("target", "_blank")
    img.src = "/resources/images/icando.png"
    h4.innerText = "이거해줘 내가할게"
    p.innerText = "JAVA, SPRING, SPRING BOOT, JS, MYSQL, 카카오페이 API, Firebase API, MVC 2패턴을 사용한 팀프로젝트로 3명의 팀원들과 함께 진행했고 사용자와 전문가들을 연결해주는 심부름 서비스를 제공하는 프로젝트를 만들었습니다."
    a.append(img);
    a.append(h4);
    a.append(p);
}

function closeInfo() {
    event.stopPropagtion;
    projectInfo.setAttribute("style", "display:none");
}