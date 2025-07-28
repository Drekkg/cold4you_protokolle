// Main form logic for all Protokolle forms
const currentDate = new Date().toISOString().slice(0, 10);
document.getElementById("dateCurrent").value = currentDate;

var canvas = document.getElementById("signature-pad");
var signaturePad = new SignaturePad(canvas, {
  backgroundColor: "rgb(250,250,250)",
});

document.getElementById("clear").addEventListener("click", function () {
  signaturePad.clear();
});

function clearButton() {
  document.getElementById(print).class = "printClear";
}

const form = document.getElementById("form");
const kunde = document.getElementById("kunde");
const anlage = document.getElementById("standort");
const techniker = document.getElementById("techniker");
const dateCurrent = document.getElementById("dateCurrent");

const kundeValue_storage = localStorage.getItem("kunde");
const standortValue_storage = localStorage.getItem("standort");
const technikerValue_storage = localStorage.getItem("techniker");

document.getElementById("kunde").value = kundeValue_storage;
document.getElementById("standort").value = standortValue_storage;
document.getElementById("techniker").value = technikerValue_storage;

// function myFunction() {
//   var title = document.getElementById("anlage").value;
//   var standort = document.getElementById("standort").value.split("\n")[0];
//   var datum = document.getElementById("dateCurrent").value;
//   var kunde = document.getElementById("kunde").value;

//   document.getElementById("title_change").innerHTML =
//     "Wartung_Kaltwasser" + "_" + kunde + "_" + standort + "_" + title + "_" + datum;
// }

function saveAlert() {
  console.log("saveAlert");

  const kundeValue = kunde.value;
  const standortValue = standort.value;
  const technikerValue = techniker.value;
  const date1Value = dateCurrent.value;

  localStorage.setItem("kunde", kundeValue);
  localStorage.setItem("standort", standortValue);
  localStorage.setItem("techniker", technikerValue);
  localStorage.setItem("dateCurrent", date1Value);

  if (confirm("PDF speichern?")) {
    if (signaturePad.isEmpty()) {
      alert("Bitte unterschreiben");
    } else {
      savePDF();
    }
  } else {
    alert("PDF nicht gespeichert");
  }
}

function savePDF() {
  var element = document.getElementById("el-to-print");
  document.getElementById("print").style.opacity = "0";
  document.getElementById("clear").style.opacity = "0";
  html2pdf().set(opt).from(element).save(document.getElementById("title_change").innerHTML);
}


// var opt = {
//   // pagebreak:    { mode: 'avoid-all', before: '#page2' },
//   margin: 0.4,
//   filename: myFunction(),
//   image: { type: "jpeg", quality: 1 },
//   html2canvas: { scale: 1, dpi: 300 },
//   jsPDF: { unit: "in", format: "a1", orientation: "portrait" },
// };

// Call saveFormData function when form is submitted
document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  saveAlert();
  saveFormData();
};
