document.getElementById("search-btn").addEventListener("click" , show)

let Sbox = document.getElementById("hidden")
Sbox.style.display = "none"
let Cbox = document.getElementById("shown")
function show(){
    if(Sbox.style.display === "none"){
        Sbox.style.display = "block";
        Cbox.style.display = "none";
    }else{
        Sbox.style.display = "none"
        Cbox.style.display = "block";
    }
}



document.getElementById("travel-btn").addEventListener("click" , show1)

let S1box = document.getElementById("travel-hidden")
S1box.style.display = "none"
function show1(){
    if(S1box.style.display === "none"){
        console.log("show")
        S1box.style.display = "block";
    }else{
        console.log("show2")
        S1box.style.display = "none"
    }
}

import {flight,cars} from "./append.js";
document.getElementById("flight").addEventListener("click" , call)
function call(){
    console.log("run")
    document.getElementById("input-fields").innerHTML = "";
    document.getElementById("S1").style.display = "block"
    document.getElementById("S1").innerText = "Round Trip"
    document.getElementById("S2").style.display = "block";
    document.getElementById("S2").innerText = "One Way"
    document.getElementById("S3").style.display = "block"
    document.getElementById("S3").innerText = "Multi-City"
    document.getElementById("input-fields").innerHTML = flight()
}

document.getElementById("stay").addEventListener("click" , call1)
function call1(){
    window.location.reload()
    
}

document.getElementById("cars").addEventListener("click" , call3)
function call3(){
    console.log("run")
    document.getElementById("input-fields").innerHTML = "";
    document.getElementById("S1").style.display = "block"
    document.getElementById("S1").innerText = "Rental Cars"
    document.getElementById("S2").style.display = "block"
    document.getElementById("S2").innerText = "Air Transportation"
    document.getElementById("S3").style.display = "none"
    document.getElementById("S3").innerText = ""
    document.getElementById("input-fields").innerHTML = cars()
}

document.getElementById("packages").addEventListener("click" , call4)
function call4(){
    console.log("run")
    document.getElementById("input-fields").innerHTML = "";
    document.getElementById("S1").style.display = "block"
    document.getElementById("S1").innerText = "Low Budget"
    document.getElementById("S2").style.display = "block"
    document.getElementById("S2").innerText = "Luxury Hotel"
    document.getElementById("S3").style.display = "none"
    document.getElementById("S3").innerText = ""
    document.getElementById("input-fields").innerHTML = flight()
}

document.getElementById("ttd").addEventListener("click" , call5)
function call5(){
    console.log("run")
    document.getElementById("input-fields").innerHTML = "";
    document.getElementById("S1").style.display = "block"
    document.getElementById("S1").innerText = "Low Budget"
    document.getElementById("S2").style.display = "block"
    document.getElementById("S2").innerText = "Luxury Hotel"
    document.getElementById("S3").style.display = "none"
    document.getElementById("S3").innerText = ""
    document.getElementById("input-fields").innerHTML = flight()
}

document.getElementById("cr").addEventListener("click" , call6)
function call6(){
    console.log("run")
    document.getElementById("input-fields").innerHTML = "";
    document.getElementById("S1").style.display = "block"
    document.getElementById("S1").innerText = "Low Budget"
    document.getElementById("S2").style.display = "block"
    document.getElementById("S2").innerText = "Luxury Hotel"
    document.getElementById("S3").style.display = "none"
    document.getElementById("S3").innerText = ""
    document.getElementById("input-fields").innerHTML = cars()
}
