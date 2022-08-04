function calculate(){
    let english = +document.querySelector("#english").value;
    let urdu = +document.querySelector("#urdu").value;
    let maths = +document.querySelector("#maths").value;
    let computer = +document.querySelector("#computer").value;
    let accounting = +document.querySelector("#accounting").value;
    let marketing = +document.querySelector("#marketing").value;
    let islamiyat = +document.querySelector("#islamiyat").value;
    let java = +document.querySelector("#java").value;
    let it = +document.querySelector("#it").value;
    let ai = +document.querySelector("#ai").value;

    result = english + maths + urdu + computer + accounting + marketing + islamiyat + java + it + ai * 100/ 10;
    document.querySelector("#result").innerHTML = `You have Got ${result}% Marks`;
}