
    let arr = JSON.parse(localStorage.getItem("SignupKey")) || []

    // let signObj= JSON.parse(localStorage.getItem("SignupKey"));
    
    document.querySelector("#signup").addEventListener("submit", signupOperations);
    
    if (JSON.parse(localStorage.getItem("SignupKey"))!==null){
        // alert("Please Creat Account!");
    }
    
    function signupOperations(){
        event.preventDefault();
         
        let signObj={
            emailID : signup.email.value,
            name : signup.name.value,
            last : signup.last.value,
            password : signup.pwd.value,
        }
        console.log(signObj);
        if(log(arr,signup.email.value)){    
            if (signObj.password.includes("@","$","#","*","!","%")){
                arr.push(signObj)
                localStorage.setItem("SignupKey", JSON.stringify(arr));
                
                window.location.href="signin.html";
        
                alert("SignedUp Successfully");
            }
            else {
                alert("please choose any of these speciel character. @,$,#,*,!,%");
            }
        }
        else{
            alert("Email Already Exist")
        }
    }
    
    function log(arr,username) {
    let arr_2 = arr.filter(function(el){
        return(el.emailID==username)
    })
    if(arr_2.length >= 1){
        return false
    }
    else{
        return true
    }
}