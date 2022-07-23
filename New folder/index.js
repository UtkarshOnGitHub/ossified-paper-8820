import {navbar,footer} from "./components/navbar.js";
document.getElementById("Navbar").innerHTML = navbar()

document.getElementById("footer").innerHTML = footer()


let run =()=>{
    console.log("k")
    window.location.href ="../overdeals1/overdeals.html"
}


document.getElementById("bt").addEventListener("click" , run)

let data = JSON.parse(localStorage.getItem("loginKey")) || []

if(data.length==1){
    document.getElementById("mysign").innerText = data[0].name
}
