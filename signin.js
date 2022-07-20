let signupData=JSON.parse(localStorage.getItem("userData"));

document.querySelector("form").addEventListener("submit",loginfunc);

function loginfunc(){
    event.preventDefault();
    console.log("done")
    let useremail=document.querySelector("#email").value;
    let userpass=document.querySelector("#pass").value;
    signupData.forEach(function(ele,index){
        if(useremail===ele.emailID && userpass===ele.password){
            alert("succesfully logged in");
            window.location.href="file:///C:/Users/datta/OneDrive/Desktop/WEB%2020%20101/Project-Code/index.html";
        }else{
            alert("Please Enter Valid Credentials");
            
        }
    })
}