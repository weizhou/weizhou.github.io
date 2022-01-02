
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

function chooseNavType(navType) {
    p5ImageState.navType = navType;
    document.getElementById("document-content-sidebar").update(navType);
    switch (navType) {
        case "Filter":
            document.getElementById("p5img-demo").update(navType, p5ImageState.filterName, p5ImageState.filterSetting);
            break;
        case "Blender":
            document.getElementById("p5img-demo").update(navType, p5ImageState.blenderName, p5ImageState.blenderSetting);
            break;
    }
}

function chooseFilter(filterName) {

    let service = new P5ImgService();
    let expandedfilters = service.getExpandedFilters();
    let filterSetting = expandedfilters[filterName];
    p5ImageState.navType = "Filter";
    p5ImageState.filterName = filterName;
    p5ImageState.filterSetting = JSON.stringify(filterSetting);
    document.getElementById(p5ImageState.filterName).focus();
    document.getElementById("p5img-demo").update();
}

function chooseBlender(blenderName) {
    let service = new P5ImgService();
    let expandedBlenders = service.getExpandedBlenders();
    let blenderSetting = expandedBlenders[blenderName];
    p5ImageState.navType = "Blender";
    p5ImageState.blenderName = blenderName;
    p5ImageState.blenderSetting = JSON.stringify(blenderSetting);
    document.getElementById(p5ImageState.blenderName).focus();
    document.getElementById("p5img-demo").update();
}

