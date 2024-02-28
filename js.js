var btn_phase = 0;


function penis() {
    console.log("sus");
    // alert("sus");

    var btn = document.getElementById("a"); 

    switch (btn_phase) {
        case 0:
            btn.textContent = "pemnis";
            break;
        case 1:
            btn.textContent = "uajiiiiii";
            break;
        case 2:
            btn.textContent = "big chungus";
            break;
        case 3:
            btn.textContent = "sus";
            break;
        default:
            break;
    }

    btn_phase += 1;

    var audio = document.getElementById("far");
    audio.play();
}



const minPage = 1;
const maxPage = 3;

var currentPage = 1;

function showPage(number) {
    for (let index = minPage; index <= maxPage; index++) {

        let pageElementsId = `page${index}`; 
        let pageDiv = document.getElementById (pageElementsId);
        if (number == index) {
            pageDiv.classList.add("visible");
            pageDiv.classList.remove("hidden");
        }
        else {
            pageDiv.classList.add("hidden");
            pageDiv.classList.remove("visible");
        }
    }
    currentPage = number;
}


function boop() {
    // alert("sus");

    var audio = document.getElementById("pip");
    audio.play();

    if (currentPage == 1) {
        currentPage = 4;
    }
    
    showPage(currentPage - 1);

}

function boopie() {
    alert("HOG RIDEEEEEER");

    var audio = document.getElementById("hog");
    audio.play();

    if (currentPage == 3) {
        currentPage = 0;
    }

    showPage(currentPage + 1);
}


// 1000ml mlíka, 500g mouky, 4 vejce = 16 pala
function calc() {
    var audio = document.getElementById("sus");
    audio.play();

    let vejc = document.getElementById("inp_egz").value;
    let muka = document.getElementById("inp_muka").value;
    let mlik = document.getElementById("inp_mlik").value;
    
    let vejcportion = vejc / 4;
    let mukaportion = muka / 1000;
    let mlikportion = mlik / 500;

    let portions = Math.min(vejcportion, mukaportion, mlikportion);

    let result = `Je možno uvařiti ${Math.floor(portions*16)} kus/ů tohoto potěšení.\n`

    result += `do těsta dáme: ${Math.floor(portions * 4)} vajec\n` 
    result += `do těsta dáme: ${Math.floor(portions * 500)} mouky\n`
    result += `do těsta dáme: ${Math.floor(portions * 1000)} mlika\n`
    console.log(`Vejce:${vejcportion}, mouka:${mukaportion}, mliko:${mlikportion}`);
    console.log(`Vysledny pocet porci:${portions}`);

    document.getElementById("tarea_output").value = result;
}