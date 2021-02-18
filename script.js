let firstName = document.getElementById("fName");
let lastName = document.getElementById("lName");
let mob = document.getElementById("mob");
let alert1 = document.getElementById("alert1");

let generate = document.getElementById("generate");
generate.addEventListener('click',function validate(){
    let fName = firstName.value;
    let x= fName.replaceAll(/[^a-zA-Z]/g,"");
    if(firstName.value.includes("G")){
        
        alert(x);
    }
    else{
        alert("First Name Must includes G")
    }  
    
})

// function showWarning1(){
//     if(lastName.value.search(/[^a-zA-Z]/g)){
//         lastName.value.setAttribute('style', 'display :none');
//     }
// }


function showWarning(){
    let mobVal = mob.value;
    if(mobVal.search(/^[0-9]+$/)){
        alert1.style.display = "block";
    }
    if(mobVal.length > 10) {
        alert1.innerText = "***Invalid Number***";
        alert1.setAttribute(
            "style", "position: relative; left: 65px; font-weight: 600;");
        alert1.style.display = "block";
        
    }
}