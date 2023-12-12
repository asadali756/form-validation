let username = document.querySelector("#username");
username.addEventListener("keyup",function(){
    let u_times = document.querySelector(".u_times");
    let u_check = document.querySelector(".u_check");
    if(username.value.length==0||username.value.length<6){
        username.style.border ="1px solid red"
        u_times.style.display ="block"
        u_check.style.display ="none"
    

    }
    else{
        username.style.border ="1px solid green"
        u_check.style.display ="none"
        u_times.style.display ="block"
    
    }

    
})



let email= document.querySelector("#email");
user.addEventListener("keyup", function(){
let e_times = document.querySelector(".e_times");
let e_check = document.querySelector(".e_times");
if (email.value.length==0||email.value.length<6){
    email.style.border="1px solid red"
    e_times.style.display="block"
    e_times.style.display="none"

}
else{
    email.style.border="1px solid green"
    e_times.style.display="none"
    e_times.style.display="block"
}



})
let password = document.querySelector("#password");
user.addEventListener("keyup", function(){


let p_times = document.querySelector(".p_times");
let p_check = document.querySelector(".p_times");
if (password.value.length==0||password.value.length<6){
    password.style.border="1px solid red"
    p_times.style.display="block"
    p_times.style.display="none"

}
else{
    password.style.border="1px solid green"
    p_times.style.display="none"
    p_times.style.display="block"
}



})

function validate(){
    if(user.value.length==0||user.value.length<6){
        document.getElementById("error").innerHTML="please fill the required⚠"
        return "false";
    }
    else if(email.value.length==0||email.value.length<6){
        document.getElementById("error").innerHTML="please fill the required⚠"
        return "false";
    } 
    else if(password.value.length==0||password.value.length<6){
        document.getElementById("error").innerHTML="please fill the required⚠"
        return "false";
    }
    else{
        alert("you are logged in")
        return"false";
    }
}