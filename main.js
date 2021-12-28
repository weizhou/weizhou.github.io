
//main action buttons
var homeBtn = document.getElementById("homeBtn");
var downloadsBtn = document.getElementById("downloadsBtn");
var documentBtn = document.getElementById("documentBtn");
var learnMoreBtn = document.getElementById("learnmoreBtn");

var homeContent = document.getElementById("homeContent");
var downloadsContent = document.getElementById("downloadsContent");
var documentContent = document.getElementById("documentContent");

homeBtn.addEventListener("click", homeClicked);
downloadsBtn.addEventListener("click", downloadsClicked);
documentBtn.addEventListener("click", documentClicked);
learnMoreBtn.addEventListener("click", documentClicked);

function homeClicked() {
    homeContent.style.display = "block";
    downloadsContent.style.display = "none";
    documentContent.style.display = "none";
}

function downloadsClicked() {
    homeContent.style.display = "none";
    downloadsContent.style.display = "block";
    documentContent.style.display = "none";
}

function documentClicked() {
    homeContent.style.display = "none";
    downloadsContent.style.display = "none";
    documentContent.style.display = "grid";
}