var text = document.getElementById("entTexto");

var btnD = document.getElementById("btnDesencriptar");
var btnE = document.getElementById("btnEncriptar");

var label = document.querySelector("label");

var pHistDes = document.getElementById("hDesenc");
var pHistEnc = document.getElementById("hEnc");

var btnHistDes = document.getElementById("btnHistDesen");
var btnHistEnc = document.getElementById("btnHistEncr");

var claves = ["ai", "a", "enter", "e", "imes", "i", "ober", "o", "ufat", "u"];
var histEnc = "", histDes = "";

function oprimirBtnEnc() {
    var textoEnc = "";
    var textoUsu = text.value;
    for (var i = 0; i < textoUsu.length; i++) {
        switch (textoUsu[i]) {
            case "a":
                textoEnc = textoEnc + "ai";
                break;
            case "e":
                textoEnc = textoEnc + "enter";
                break;
            case "i":
                textoEnc = textoEnc + "imes";
                break;
            case "o":
                textoEnc = textoEnc + "ober";
                break;
            case "u":
                textoEnc = textoEnc + "ufat";
                break;
            default:
                textoEnc = textoEnc + textoUsu[i];
                break;
        }
    }
    if (textoUsu == "") {
        alert("Ingrese texto");
    }
    else if (textoEnc.indexOf(textoUsu) !== -1) {
        label.textContent = "El texto no necesita Encriptarse";
    } else {
        label.textContent = textoEnc + " - Texto Encriptado";
        histEnc = histEnc + textoEnc + "\n";
        pHistEnc.value = histEnc;
    }
}
function oprimirBtnDesenc() {
    var textoDes = "";
    var textoUsu = text.value;
    var textoUsuAux = textoUsu;
    for (var j = 0; j < claves.length; j += 2) {
        if (j != 0) {
            textoUsu = textoDes;
            textoDes = "";
        }
        var clave = claves[j];
        var claveSig = claves[j + 1];
        textoUsu = textoUsu.split(clave);
        for (var i = 0; i < textoUsu.length; i++) {
            if (i == textoUsu.length - 1) {
                textoDes = textoDes + textoUsu[i];
            }
            else {
                textoUsu[i] = textoUsu[i] + (claveSig);
                textoDes = textoDes + textoUsu[i];
            }
        }
    }
    if (textoUsuAux == "") {
        alert("Ingrese texto");
    }
    else if (textoUsuAux.indexOf(textoDes) !== -1) {
        label.textContent = "El texto no necesita Desencriptarse";
    } else {
        label.textContent = textoDes + " - Texto Desencriptado";
        histDes = histDes + textoDes + "\n";
        pHistDes.value = histDes;
    }
}

function oprimirBtnHistDesenc() {
    pHistDes.select();
    document.execCommand('copy');
}

function oprimirBtnHistEnc() {
    pHistEnc.select();
    document.execCommand('copy');
}

btnD.onclick = oprimirBtnDesenc;
btnE.onclick = oprimirBtnEnc;
btnHistDes.onclick = oprimirBtnHistDesenc;
btnHistEnc.onclick = oprimirBtnHistEnc;
