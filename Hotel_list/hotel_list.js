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
        total :"$957 total",
        price: 200,
        star : 3,
        ranking: 3.8,
        offper: 43,
        value: 3
    },
    {
        name:"Opens Grand Oasis Cancun All Inclusive ",
        image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/70000/64100/64052/eab3771a_b.jpg",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"2/5 Good (127 Reviews)",
        rate: "400",
        date: "before,monday Jun 23",
        total :"$677 total",
        price: 400,
        star : 2,
        ranking: 2,
        offper: 50
    },
    {
        name:"Real Inn Cancun ",
        image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/9290000/9281000/9280941/7af9b88f_b.jpg",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3/5 Good (444 Reviews)",
        rate: "500",
        date: "before,friday Jan 01",
        total :"$788 total",
        price: 500,
        star : 2,
        ranking: 3,
        offper: 76
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/1000000/200000/197400/197382/50ddc787.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"4/5 Good (567 Reviews)",
        rate: "800",
        date: "before,friday Mar 13",
        total :"$757 total",
        price: 800,
        star : 4,
        ranking: 4,
        offper: 23,
        value: 3,
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/6000000/5810000/5806800/5806712/b5f320b9.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.2/5 Good (766 Reviews)",
        rate: "360",
        date: "before,friday Nov 1",
        total :"$567 total",
        price: 800,
        star : 3,
        ranking: 3.2,
        offper: 33
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"1.4/5 Good (27 Reviews)",
        rate: "1100",
        date: "before,friday Aug 13",
        total :"$1207 total",
        price: 1100,
        star : 1,
        ranking: 1.4,
        offper: 11,
        value: 3
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/34000000/33890000/33884200/33884103/5c3b2fe7.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"2.8/5 Good (3000 Reviews)",
        rate: "4700",
        date: "before,friday Aug 13",
        total :"$5000 total", 
        price: 4700,
        star : 2,
        ranking: 2.8,
        offper: 46,
        value:4
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/12000000/11480000/11470500/11470441/68d3a705.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"4.6/5 Good (1,027 Reviews)",
        rate: "700",
        date: "before,friday Aug 13",
        total :"$855 total",
        price: 700,
        star : 4,
        ranking: 4.6,
        offper: 33,
        value: 3
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/1000000/30000/21600/21544/76d26ba3.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.8/5 Good (1,027 Reviews)",
        rate: "200",
        date: "before,friday Aug 13",
        total :"$957 total",
        price: 200,
        star : 3,
        ranking: 3.8,
        offper: 43,
        value :3
    },
    {
        name:"Opens Grand Oasis Cancun All Inclusive ",
        image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/70000/64100/64052/eab3771a_b.jpg",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"2/5 Good (127 Reviews)",
        rate: "400",
        date: "before,monday Jun 23",
        total :"$677 total",
        price: 400,
        star : 2,
        ranking: 2,
        offper: 50
    },
    {
        name:"Real Inn Cancun ",
        image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/9290000/9281000/9280941/7af9b88f_b.jpg",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3/5 Good (444 Reviews)",
        rate: "500",
        date: "before,friday Jan 01",
        total :"$788 total",
        price: 500,
        star : 2,
        ranking: 3,
        offper: 76,
        value :2
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/1000000/200000/197400/197382/50ddc787.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"4/5 Good (567 Reviews)",
        rate: "800",
        date: "before,friday Mar 13",
        total :"$757 total",
        price: 800,
        star : 4,
        ranking: 4,
        offper: 23,
        value:4
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/6000000/5810000/5806800/5806712/b5f320b9.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.2/5 Good (766 Reviews)",
        rate: "360",
        date: "before,friday Nov 1",
        total :"$567 total",
        price: 800,
        star : 3,
        ranking: 3.2,
        offper: 33,
        value :3
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/2000000/1120000/1110100/1110099/6c373d9e.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"1.4/5 Good (27 Reviews)",
        rate: "1100",
        date: "before,friday Aug 13",
        total :"$1207 total",
        price: 1100,
        star : 1,
        ranking: 1.4,
        offper: 11,
        value :2
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/34000000/33890000/33884200/33884103/5c3b2fe7.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"2.8/5 Good (3000 Reviews)",
        rate: "4700",
        date: "before,friday Aug 13",
        total :"$5000 total", 
        price: 4700,
        star : 2,
        ranking: 2.8,
        offper: 46,
        value:4
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/12000000/11480000/11470500/11470441/68d3a705.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"4.6/5 Good (1,027 Reviews)",
        rate: "700",
        date: "before,friday Aug 13",
        total :"$855 total",
        price: 700,
        star : 4,
        ranking: 4.6,
        offper: 33,
        value :2
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/6000000/5810000/5806800/5806712/b5f320b9.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.2/5 Good (766 Reviews)",
        rate: "360",
        date: "before,friday Nov 1",
        total :"$567 total",
        price: 800,
        star : 3,
        ranking: 3.2,
        offper: 33,
        value :5
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/1000000/990000/986200/986131/ee377795.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.2/5 Good (766 Reviews)",
        rate: "360",
        date: "before,friday Nov 1",
        total :"$567 total",
        price: 300,
        star : 5,
        ranking: 5,
        offper: 33,
        value :5
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://images.trvl-media.com/hotels/1000000/530000/522500/522481/9ec1e08d.jpg?impolicy=resizecrop&rw=455&ra=fit",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.2/5 Good (766 Reviews)",
        rate: "360",
        date: "before,friday Nov 1",
        total :"$567 total",
        price: 200,
        star : 5,
        ranking: 5,
        offper: 33,
        value :5
    },
    {
        name:"Occidental Tucancún All Inclusive",
        image: "https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/10000000/9290000/9281000/9280941/7af9b88f_b.jpg",
        des : "Zona Hotelra",
        l1 : "Fully Refundable",
        l2:"Reserve Now Pay Later",
        rating:"3.2/5 Good (766 Reviews)",
        rate: "360",
        date: "before,friday Nov 1",
        total :"$567 total",
        price: 900,
        star : 5,
        ranking: 5,
        offper: 33,
        value :5
    },
]
append(arr)

function append(arr){
    document.getElementById("append").innerHTML = null
    arr.forEach((e)=>{
        let mainbox = x("div");
        mainbox.id = "show"
        mainbox.addEventListener("click" , ()=>{
            window.location.href ="../hotels/hotel.html"
        })
        let div1 = x("div");
        let div2 =x("div")
        let div3 = x("div")
        let div4 = x("div")
        let sdiv = x("div")
        let hdiv =x("div")
        hdiv.setAttribute("class" , "heart");
        hdiv.style.backgroundColor = "white";
        hdiv.addEventListener("click",function(){
            if(hdiv.style.backgroundColor== "white"){
                hdiv.style.backgroundColor = "#ff1744"
                console.log("He")
            }else{
                hdiv.style.backgroundColor = "white"
                console.log("H")
            }
                
        })
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
        btn.innerText = `${e.offper}% Off`
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




let checkboxes = document.querySelectorAll('input[type="checkbox"]');

for(let checkbox of checkboxes){
    checkbox.addEventListener("click",()=>{
        if(checkbox.checked==true){
            if(checkbox.value==1){

            }else if(checkbox.value==2){
                let filtered = arr.filter((e)=>{
                    return e.value == checkbox.value
                })
                console.log(filtered)
                append(filtered)
            }else if(checkbox.value==3){
                let filtered = arr.filter((e)=>{
                    return e.value == checkbox.value
                })
                console.log(filtered)
                append(filtered)  
            }else if(checkbox.value==4){
                let filtered = arr.filter((e)=>{
                    return e.value == checkbox.value
                })
                console.log(filtered)
                append(filtered)  
            }else if(checkbox.value==5){
                let filtered = arr.filter((e)=>{
                    return e.value == checkbox.value
                })
                console.log(filtered)
                append(filtered)  
            }
        }else{
            window.location.reload()
        }
    })
}

document.getElementById("1s").addEventListener("click" , ()=>{
    let filtered = arr.filter((e)=>{
        return e.ranking >= 2 && e.ranking < 3
    })
    append(filtered)
})
document.getElementById("2s").addEventListener("click" , ()=>{
    let filtered = arr.filter((e)=>{
        return e.ranking >= 3 && e.ranking < 4
    })
    append(filtered)
})
document.getElementById("3s").addEventListener("click" , ()=>{
    let filtered = arr.filter((e)=>{
        return e.ranking >= 4 && e.ranking < 5
    })
    append(filtered)
})
document.getElementById("4s").addEventListener("click" , ()=>{
    let filtered = arr.filter((e)=>{
        return e.ranking == 5
    })
    append(filtered)
})


let select = document.getElementById("select")
select.addEventListener("change" , ()=>{
    if(select.value=="hprice"){
        let sort = arr.sort((a,b)=>{
            return a.price - b.price
        })
        console.log(sort)
        append(sort)
    }else if(select.value=="lprice"){
        let sort = arr.sort((a,b)=>{
            return b.price - a.price
        })
        console.log(sort)
        append(sort)
    }else if(select.value=="REVIEW"){
        let sort = arr.sort((a,b)=>{
            return b.star - a.star
        })
        console.log(sort)
        append(sort) 
    }else if(select.value=="PRICE_RELEVANT"){
        let sort = arr.sort((a,b)=>{
            return b.offper - a.offper
        })
        console.log(sort)
        append(sort) 
    }

})


function check(){
    let value = document.getElementsByName("drone")
    if(value[1].checked==true){
        let filtered = arr.filter((e)=>{
            return e.ranking >= 4.5
        })
        console.log(filtered)
        append(filtered)
    }else if(value[2].checked ==true){
        let filtered = arr.filter((e)=>{
            return e.ranking >= 4 && e.ranking < 4.5
        })
        append(filtered)
    }else{
        let filtered = arr.filter((e)=>{
            return e.ranking >= 3 && e.ranking < 4
        })
        append(filtered)
    }
}


    
