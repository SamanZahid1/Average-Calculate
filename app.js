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

    
    //percentage 
    result = (english + maths + urdu + computer + accounting + marketing + islamiyat + java + it + ai) * 100/ 1000;
    document.querySelector("#result").innerHTML = `Your Percentage ${result}%`;

   //Obtained Marks
    obtained = english + maths + urdu + computer + accounting + marketing + islamiyat + java + it + ai;
    document.querySelector("#obtained").innerHTML = `Total Obtained ${obtained} Marks Out of <strong>1000</strong>`;
   
   
   //Grade 
     document.querySelector("#result").value;
    if( result >= 80){
       document.querySelector("#grade").innerHTML= "<span style='color:green;'>Congratulations!</span> A1 Grade";
    }
    else if (result >= 70 && result < 80){
        document.querySelector("#grade").innerHTML= "<span style='color:blue;'>Congratulations!</span> A Grade";
    }
    else if (result >= 60 && result < 70){
        document.querySelector("#grade").innerHTML= "<span style='color:purple;'>Congratulations!</span> B Grade";
    } 
    else if (result >= 50 && result < 60){
        document.querySelector("#grade").innerHTML= "<span style='color:yellow;'>Congratulations!</span> C Grade";
    }
    else {
        document.querySelector("#grade").innerHTML= "<span style='color:red;'></span> Fail";
    }
    
} 
