var dateOfBirth = document.getElementById("dborn");
var monthOfBirth = document.getElementById("mborn");
var yearOfBirth = document.getElementById("yrborn");
var gender = document.getElementsByName("gender");
var submitButton = document.getElementById("sub");
var text = document.getElementById("text");


function getDayOfWeek(DD, MM, YOB) {
    let CC=Math.trunc(YOB/100),
        YY=YOB%100;
        
    let day = Math.trunc( Math.trunc((CC/4) -2*CC-1) + Math.trunc((5*YY/4) ) + Math.trunc((26*(MM+1)/10)) + DD ) % 7;
    return day;
    
}

function clicke(e) {
    e.preventDefault();
    let names = {
        male:["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
        female:["Akosua","Adwoa", "Abenaa","Akua","Yaa","Afua", "Ama"]
    
    }
    let checked;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            checked = gender[i].value;

            break;
        }
    }
    let dob = dateOfBirth.value,
        mob = monthOfBirth.value,
        yob = yearOfBirth.value,
        day = getDayOfWeek(dob, mob, yob);
    let namesis=names[checked][day];
    text.innerHTML= "Your Akan name is "+ namesis;
    console.log(dob, mob, yob, checked, day, namesis);
}
submitButton.addEventListener("click", clicke);
// submitButton.onclick= click();