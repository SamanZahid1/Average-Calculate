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

    result = (english + maths + urdu + computer + accounting + marketing + islamiyat + java + it + ai) * 100/ 1000;
    document.querySelector("#result").innerHTML = `You have Got ${result}% Marks`;


     document.querySelector("#result").value;
    if( result >= 80){
       document.querySelector("#grade").innerHTML= "<h1 style='color:green;'>Congratulations!</h1> A1 Grade";
    }
    else if (result >= 70 && result < 80){
        document.querySelector("#grade").innerHTML= "<h1 style='color:blue;'>Congratulations!</h1> A Grade";
    }
    else if (result >= 60 && result < 70){
        document.querySelector("#grade").innerHTML= "<h1 style='color:pink;'>Congratulations!</h1> B Grade";
    } 
    else if (result >= 50 && result < 60){
        document.querySelector("#grade").innerHTML= "<h1 style='color:yellow;'>Congratulations!</h1> C Grade";
    }
    else {
        document.querySelector("#grade").innerHTML= "<h1 style='color:red;'></h1> Fail";
    }
    
} 
