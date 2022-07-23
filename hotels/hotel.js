var map_parameters = { center: { lat: 47.490, lng: -117.585 }, zoom: 8 };
var map = new google.maps.Map(document.getElementById('map'), map_parameters);

//  Recommendations For Stays

var product2 = [
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/ef6e5197.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Standard Room, 1 King Bed (Happy Camper)",
        area: "250 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "4% off",
        price: " 234",
        strike: "244",
        total: "572 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/d1636414.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 1 King Bed (Trendy)",
        area: "275 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "4% off",
        price: "234",
        strike: "244",
        total: "572 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/b541fcf2.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 1 King Bed, Accessible (Marco Polo)",
        area: "270 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "4% off",
        price: "244",
        strike: "254",
        total: "595 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/db84c91d.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 1 King Bed (Marco Polo)",
        area: "275 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "4% off",
        price: "244",
        strike: "254",
        total: "595 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/1beccb82.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 2 Queen Beds (Trendy)",
        area: "250 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        parking: "Waived resort fee for 4",
        deposite: "Reserve now, pay deposit",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "4% off",
        price: "254",
        strike: "264",
        total: "617 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/53564c0a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Standard Room, 2 Queen Beds (Happy Camper)",
        area: "275 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        parking: "Waived resort fee for 4",
        deposite: "Reserve now, pay deposit",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "4% off",
        price: "254",
        strike: "264",
        total: "617 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/53564c0a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Standard Room, 2 Queen Beds (Marco Polo)",
        area: "250 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "4% off",
        price: "264",
        strike: "274",
        total: "640 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/b8bbb39b.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 1 King Bed (Snazzy)",
        area: "275 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        parking: "Waived resort fee for 4",
        deposite: "Reserve now, pay deposit",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "4% off",
        price: "264",
        strike: "274",
        total: "640 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/53564c0a.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 2 Queen Beds, Accessible (Marco Polo)",
        area: "250 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "4% off",
        price: "264",
        strike: "274",
        total: "640 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/b8bbb39b.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 1 King Bed, Accessible (Snazzy)",
        area: "250 sq ft",
        sleeps: "Sleeps 1",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        det: "More details",
        off: "4% off",
        price: "264",
        strike: "274",
        total: "640 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/848120ec.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 2 Queen Beds, Accessible (Snazzy)",
        area: "365 sq ft",
        sleeps: "Sleeps 4",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "3% off",
        price: "284",
        strike: "294",
        total: "685 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/b8bbb39b.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 2 Queen Beds (Snazzy)",
        area: "250 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        parking: "Waived resort fee for 4",
        deposite: "Reserve now, pay deposit",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "3% off",
        price: "284",
        strike: "294",
        total: "685 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/ff64f284.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Junior Suite, 1 King Bed (Trendy)",
        area: "250 sq ft",
        sleeps: "Sleeps 1",
        free: "Free WiFi",
        parking: "Waived resort fee for 4",
        deposite: "Reserve now, pay deposit",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "3% off",
        price: "284",
        strike: "294",
        total: "685 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/1beccb82.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Room, 2 Queen Beds (Trendy Fireside)",
        area: "250 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        refund: "Fully refundable Before Sat, Aug 20",
        parking: "Waived resort fee for 4",
        det: "More details",
        off: "3% off",
        price: "284",
        strike: "294",
        total: "685 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/bdfad6bb.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Junior Suite, 2 Queen Beds (Trendy)",
        area: "275 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "3% off",
        price: "284",
        strike: "294",
        total: "685 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/73af14ef.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Classic Suite, 1 King Bed",
        area: "250 sq ft",
        sleeps: "Sleeps 1",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "3% off",
        price: "572",
        strike: "582",
        total: "1,333 total"
    },
    {
        img: "https://images.trvl-media.com/hotels/1000000/30000/21400/21394/73af14ef.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
        name: "Classic Suite, 2 Queen Beds",
        area: "270 sq ft",
        sleeps: "Sleeps 2",
        free: "Free WiFi",
        deposite: "Reserve now, pay deposit",
        parking: "Waived resort fee for 4",
        refund: "Fully refundable Before Sat, Aug 20",
        det: "More details",
        off: "3% off",
        price: "592",
        strike: "602",
        total: "1,378 total"
    },
]

product2.forEach(function (el) {
    var box2 = document.createElement("div")
    var box1 = document.createElement("div")
    var btnbox = document.createElement("div")
    var btnbox2 = document.createElement("div")
    btnbox2.id = "mmm"
    btnbox.id = "nnn"
    box1.id = "hhh"
    // box2.style.marginTop = "-30px"
    // box2.style.border = "1px solid darkgray"
    var womenImg2 = document.createElement("img")
    womenImg2.setAttribute("src", el.img)
    womenImg2.style.borderTopRightRadius = "5px"
    womenImg2.style.borderTopLeftRadius = "5px"

    var name = document.createElement("h3")
    name.innerText = el.name
    name.style.marginLeft = "10px"

    name.style.textDecoration = "none"
    name.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    name.style.color = "#242C33";
    name.style.fontSize = "1rem;"
    name.style.fontWeight = "700;"
    name.style.lineHeight = ".725rem;"

    var d = document.createElement("p")
    d.innerText = el.area
    d.style.marginLeft = "10px"
    d.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    d.style.color = "#242C33";
    d.style.fontSize = "15px;"
    d.style.fontWeight = "700;"
    d.style.lineHeight = "1.75rem;"

    var c = document.createElement("p")
    c.innerText = el.sleeps
    c.style.marginLeft = "10px"
    c.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    c.style.color = "#242C33";
    c.style.fontSize = "15px;"
    c.style.fontWeight = "700;"
    c.style.lineHeight = "1.75rem;"

    var b = document.createElement("p")
    b.innerText = el.free
    b.style.marginLeft = "10px"
    b.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    b.style.color = "#242C33";
    b.style.fontSize = "15px;"
    b.style.fontWeight = "700;"
    b.style.lineHeight = "1.75rem;"

    var a = document.createElement("p")
    a.innerText = el.deposite
    a.style.marginLeft = "10px"
    a.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    a.style.color = "#242C33";
    a.style.fontSize = "15px;"
    a.style.fontWeight = "700;"
    a.style.lineHeight = "1.75rem;"

    var m = document.createElement("p")
    m.innerText = el.parking
    m.style.marginLeft = "10px"
    m.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    m.style.color = "#242C33";
    m.style.fontSize = "15px;"
    m.style.fontWeight = "700;"
    m.style.lineHeight = "1.75rem;"

    var n = document.createElement("p")
    n.innerText = el.refund
    n.style.marginLeft = "10px"
    n.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    n.style.color = "#242C33";
    n.style.fontSize = "15px;"
    n.style.fontWeight = "700;"
    n.style.lineHeight = "1.75rem;"

    var o = document.createElement("p")
    o.innerText = el.det
    o.addEventListener("click",()=>{
        window.location.href = "../New folder/trips_more_details/more_details.html"
    })
    o.style.marginLeft = "10px"
    o.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    o.style.color = "#0a438b;";
    o.style.fontSize = "20px;"
    o.style.fontWeight = "700;"
    o.style.lineHeight = "1.75rem;"
    o.style.cursor = "pointer"

    var om = document.createElement("p")
    om.innerText = el.off
    om.style.marginLeft = "10px"
    om.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    om.style.color = "rgb(16, 240, 16)"
    om.style.fontSize = "20px;"
    om.style.fontWeight = "700;"
    om.style.lineHeight = "1.75rem;"
    om.style.cursor = "pointer"

    var price2 = document.createElement("h2")
    price2.innerText = `$${el.price}`
    price2.style.marginLeft = "10px"
    price2.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    price2.style.color = "black;";

    var price3 = document.createElement("p")
    price3.innerText = `$${el.strike}`
    price3.style.marginLeft = "10px"
    // price3.style.marginTop = "-15px"
    price3.style.textDecoration = "line-through"
    price3.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    price3.style.color = "black;";

    var price4 = document.createElement("p")
    price4.innerText = `$${el.total}`
    price4.style.marginLeft = "10px"
    // price4.style.marginTop = "-15px"
    price4.style.fontFamily = "font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
    price4.style.color = "black;";

    var button = document.createElement("button")
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//     Launch demo modal
//   </button>
    button.innerText = "Reserve"
    // button.style.width = "auto"
    // button.style.height = "36px"
    // button.style.borderRadius = "8px"
    // button.style.color = "white"
    button.style.backgroundColor = "#0D5AB9"
    // button.style.border = "#0D5AB9"
    button.style.textAlign = "right"
    // button.style.padding = "10px"
    // button.style.fontSize = "14px"
    // button.style.cursor = "Pointer"
    button.style.marginLeft = "190px";

    button.setAttribute("type" , "button")
    button.setAttribute("class" , "btn btn-primary")
    button.setAttribute("data-bs-toggle" , "modal")

    button.setAttribute("data-bs-target" , "#exampleModal")

    button.addEventListener("click", function () {
        reserve(el)
    })
    
    btnbox.append(button)
    box1.append(womenImg2)
    btnbox2.append(name, d, c, b, a, m, n, o, om, price2, price3, price4,)
    box2.append(box1,btnbox2 ,btnbox)
    document.querySelector("#cont_ud").append(box2)
})
var data = JSON.parse(localStorage.getItem("Reserve")) || {}
function reserve(el) {
    localStorage.setItem("Reserve", JSON.stringify(el))
    document.getElementById("mp").innerText = `$${data.price}`
    document.getElementById("mp2").innerText = `$${data.price}`
    document.getElementById("tp").innerText = `$${data.total}`
    document.getElementById("tp2").innerText = `$${data.total}`
}


function ref(){
    window.location.reload()
}


document.getElementById("pn").addEventListener("click",()=>{
    window.location.href = "../payment.html"
})
