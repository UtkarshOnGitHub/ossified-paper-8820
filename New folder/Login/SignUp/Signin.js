
    let signObj= JSON.parse(localStorage.getItem("SignupKey")) ||[];

    if (signObj!==null){
        // alert("Put Credential carefully!")
    }
    
    document.querySelector("#login").addEventListener("submit", loginOperation);
    let count=0;
    function loginOperation(){
        event.preventDefault();
        console.log(login.email.value)
        let logObj={
            emailCheck:login.email.value,
            pwdCheck:login.pwd.value,
        }
        if(signObj==null) {
            window.location.href="create.html";
            alert("Please Creat Account!");
        }
        else if (log(signObj,login.email.value,login.pwd.value)!=false){
            localStorage.setItem("loginKey", JSON.stringify(arr_1));
            window.location.href="../../index.html";
            alert("Login Successful!");
        }
        else {
            count++;
            alert("Invalid Credential");
            if (count>3){
                alert("Please Create Account");
                window.location.href="create.html";
            }
        }
    }
    let arr_1
    function log(arr,username,pswd) {
        arr_1 = arr.filter(function(el){
            return(el.emailID==username && el.password == pswd)
        })

        if(arr_1.length == 0){
            return false
        }
        else{
            return arr_1
        }
    }