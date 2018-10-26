var WinJS = this.WinJS;
var first = document.getElementById("first");
var firstOutput = document.querySelector(".firstO")
var secondOutput = document.querySelector(".secondO");
var thirdOutput = document.querySelector(".thirdO");
var fourthOutput = document.querySelector(".fourthO");
var fifthOutput = document.querySelector(".fifthO");
var sixthOutput = document.querySelector(".sixthO");
var bindSource = WinJS.Binding.as({ first: "120" });

function onFirstChanged(newValue, oldValue) {
    var number = parseInt(newValue, 10);
    sixthOutput.textContent = number;
    firstOutput.textContent = number;
    secondOutput.textContent = number+1;
    thirdOutput.textContent = number+2;
    fourthOutput.textContent = number+1;
    fifthOutput.textContent = number+2;
}

function bindToDataSource() {
    bindSource.bind("first", onFirstChanged.bind(this));
}

function bindToInputChanges() {
    WinJS.Utilities.query("#first").listen("change", function () {
            bindSource.first = this.value;
        })
        // Set the initial value to match binding source
        .forEach(function (e) {
            e.value = bindSource.first;
        });
  
}
bindToDataSource();
bindToInputChanges();
var html = " ";
function generar() {
    var nombres = parseInt(document.getElementById("numeros").value, 10);
    for (i = 0; i < nombres; i++) { 
        var dades = new Array;
        dades[0] = lastNombre;
        dades[1] = lastNombre+1;
        dades[2] = lastNombre+2;
        var ticket = document.querySelector("#generate").innerHTML;
        html = html + ticket;
        console.log(html);
        var lastNombre = parseInt(first.value, 10);
        lastNombre = lastNombre + 3;
        first.value = lastNombre;
        firstOutput.textContent = lastNombre;
        sixthOutput.textContent = lastNombre;
        secondOutput.textContent = lastNombre+1;
        thirdOutput.textContent = lastNombre+2;
        fourthOutput.textContent = lastNombre+1;
        fifthOutput.textContent = lastNombre+2;
        console.log(i);
        }
    var css = document.querySelector("#css").innerHTML;
    var printWindow = window.open('', '', 'height=500,width=800');
    printWindow.document.write('<html><head><title>Per imprimir - COOP Manolo Hugué</title>');
    printWindow.document.write('<style>' + css + "</style>");
    printWindow.document.write('</head><body><div class="print">');
    printWindow.document.write(html);
    printWindow.document.write('</div></body></html>');

};