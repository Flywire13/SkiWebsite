function homeButton () {
    Array.from(document.getElementsByClassName("homepage")).forEach(i => i.style.display = 'grid');
    Array.from(document.getElementsByClassName("gallerypage")).forEach(i => i.style.display = 'none');
    Array.from(document.getElementsByClassName("recommendations")).forEach(i => i.style.display = 'none');
    document.getElementById("skiform").style.display = 'none'


}

function galleryButton () {
    Array.from(document.getElementsByClassName("gallerypage")).forEach(i => i.style.display = 'grid');
    Array.from(document.getElementsByClassName("homepage")).forEach(i => i.style.display = 'none');
    Array.from(document.getElementsByClassName("recommendations")).forEach(i => i.style.display = 'none');
    document.getElementById("skiform").style.display = 'none'


}

function recommendedButton(){
    Array.from(document.getElementsByClassName("gallerypage")).forEach(i => i.style.display = 'none');
    Array.from(document.getElementsByClassName("homepage")).forEach(i => i.style.display = 'none');
    Array.from(document.getElementsByClassName("recommendations")).forEach(i => i.style.display = 'grid');
    document.getElementById("results").style.display = 'none';
    document.getElementById("skiform").style.display = 'inline-block'

}   



function cancelbutton() {
    document.getElementById("skiform").style.display = 'none';
}

function closeResults(){
    document.getElementById("results").style.display = 'none';
    document.getElementById("skiform").style.display = 'inline-block'

}

function submitbutton() {
    let height = document.getElementById("height").value;
    let skill = document.getElementById("skill").value;
    let style = document.getElementById("skistyle").value;
    let ski = getSki(height, skill, style);
    document.getElementById("results").innerHTML = 
    `<h1 id="resultTitle">Your reccomended ski is:</h1>
    <br>
    <p id="resultSki"><b>${ski}</b></p>
    <button type="button" onclick="closeResults()" id="resultsbutton">close</button>`;
    document.getElementById("results").style.display = 'block';
    document.getElementById("skiform").style.display = 'none';

}

function toggleTheme(){
    if (document.getElementById("toggle")){
        var child = document.getElementById("toggle")
        if (child.hasAttribute("href")){
            child.removeAttribute("href")
        }
        else{
            child.setAttribute("href", "./css/theme.css")
        }
    }
    else{
        var head = document.head;
        var link = document.createElement("link");
        link.type = "text/css"
        link.rel ="stylesheet"
        link.id = "toggle"
        link.href = "./css/theme.css"
        head.appendChild(link)
        
    }

}

function getSki(height, skill, style) {
    var height = parseInt(height);
    var skill= parseInt(skill);
    var style =  parseInt(style);
    let heightDict = {
        1 : "130-139",
        2 : "140-149",
        3 : "150-159",
        4 : "160-169",
        5 : "160-169",
        6 : "170-179",
        7 : "180-189",
        8 : "190-199"
    }
    var ski;
    switch(true){
        case(skill == 1):
            ski = `Rent until more experienced`;
            break;
        case(skill == 2 && style == 1):
            ski = `Noridca Enforcer: ${heightDict[height]}cm`
            break;
        case(skill==2 && style==2):
            ski = `Armada ARV: ${heightDict[height]}cm`
            break;
        case(skill==2 && style==3):
            ski = `K2 244: ${heightDict[height]}cm`
            break;
        case(skill==2 && style==4):
            ski = `Rosignol Black Ops: ${heightDict[height]}cm`
            break;
        case(skill==3 && style==1):
            ski = `Volkl M6 Mantra: ${heightDict[height]}cm`
            break;
        case(skill==3 && style==2):
            ski = `Armada Bdog: ${heightDict[height]}cm`
            break;
        case(skill==3 && style==3):
            ski = `Rossignol Hero Athlete Mogul: ${heightDict[height]}cm`
            break;
        case(skill==3 && style==4):
            ski = `Rossignol Black Ops Sender: ${heightDict[height]}cm`
            break;
        case(skill==4 && style==1):
            ski = `Rossignol Hero Athlete Mogul: ${heightDict[height]}cm`
            break;
        case(skill==4 && style==2):
            ski = `Armada Bdog: ${heightDict[height]}cm`
            break;
        case(skill==4 && style==3):
            ski = `Rossignol Hero Athlete Mogul: ${heightDict[height]}cm`
            break;
        case(skill==4 && style==4):
            ski = `Rossignol Black Ops Sender: ${heightDict[height]}cm`
            break;
        default:
            ski = "Invalid"
    }
    return ski
}


