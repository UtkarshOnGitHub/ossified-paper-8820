document.getElementById("search-btn").addEventListener("click" , show)

let Sbox = document.getElementById("hidden")
Sbox.style.display = "none"
function show(){
    if(Sbox.style.display === "none"){
        Sbox.style.display = "block";
    }else{
        Sbox.style.display = "none"

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


let arr =[
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/1000000/30000/21600/21544/76d26ba3.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/70000/64100/64052/eab3771a_b.jpg",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/9290000/9281000/9280941/7af9b88f_b.jpg",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/1000000/200000/197400/197382/50ddc787.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/6000000/5810000/5806800/5806712/b5f320b9.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total"
    }
]
append(arr)

function append(data){
    arr.forEach((e)=>{
        let mainbox = x("div");
        mainbox.id = "show"
        let div1 = x("div");
        let div2 =x("div")
        let div3 = x("div")
        let div4 = x("div")
        let sdiv = x("div")
        let hdiv =x("div")
        hdiv.setAttribute("class" , "heart")
        hdiv.innerHTML = `<i class="fa-solid fa-heart"></i>`
        let img = x("img");
        img.src = e.image
        div1.append(img)
        let name =x("h3")
        name.innerText =e.name;
        let desc = x("p")
        desc.innerText =e.des;
        let l1 = x("p")
        l1.innerText = e.l1
        let l2 = x("p")
        l2.innerText = e.l2
        let rating = x("p")
        rating.innerText = e.rating
        let rate = x("h4")
        rate.innerHTML = ` <span style ="font-size:14px;"><strike>300</strike></span> $${e.rate}`
        let date = x("p")
        date.innerText = e.date
        let total = x("p")
        total.innerText = e.total
        let btn = x("button")
        btn.innerText = "43% Off"
        div3.append(l1,date,l2,rating)
        div4.append(btn,rate,total)
        sdiv.append(div3,div4)
        div2.append(name,desc,sdiv)

        mainbox.append(div1,div2,hdiv)
        document.getElementById("append").append(mainbox)
    })
}

function x(id){
    return document.createElement(id)
}

function nextpage(){
    window.location.href = "https://www.travelocity.com/Hotel-Search?adults=2&cleaningAndSafetyPractices=ENHANCED_CLEANING&destination=Cancun%2C%20Quintana%20Roo%2C%20Mexico&directFlights=false&endDate=2022-08-23&guestRating=&hotelName=&localDateFormat=M%2Fd%2Fyyyy&neighborhood=179995&paandi=true&partialStay=false&paymentType=FREE_CANCELLATION&price=0&price=300&pwaOverlay=map&regionId=179995&selected=21544&semdtl=&sort=RECOMMENDED&startDate=2022-08-19&theme=&useRewards=true&userIntent="
}