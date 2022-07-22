let flight = ()=>{
    return `            
    <div id="SearchInput">
    <input id="search-btn" style ="width:370px;" placeholder ="Leaving From"> 
    <div id="hidden">
        <input type="text" placeholder="Where Are You Going ?">
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>New York</span>
        </div>
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>USA</span>
        </div>
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>Malasiya</span>
        </div>
    </div>
    <div id="shown">  
        <input type="checkbox" class="check">
        <label for="">Add A Flight</label>
        <input type="checkbox" class="check">
        <label for="">Add A Car</label>
    </div>
</div>
<div id="SearchInput">
    <input id="search-btn" style ="width:370px; margin-left:8px;" placeholder ="Going To"><span style="margin-left:10px ;"></span>
    <div id="hidden">
        <input type="text" placeholder="Where Are You Going ?">
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>New York</span>
        </div>
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>USA</span>
        </div>
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>Malasiya</span>
        </div>
    </div>
</div>
<div id="date">
    <button class="date-btn"> <i class="fa-solid fa-calendar-day"></i> <span style="margin-left:10px ;" >Check-In</span></button>
    <button class="date-btn"><i class="fa-solid fa-calendar-day"></i><span style="margin-left:10px ;" >Check-Out</span></button>
</div>
`
}
let cars = ()=>{
    return `            
    <div id="SearchInput">
    <input id="search-btn" style ="width:500px;"  placeholder ="PickUp"> 
    <div id="hidden">
        <input type="text" placeholder="Where Are You Going ?">
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>New York</span>
        </div>
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>USA</span>
        </div>
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>Malasiya</span>
        </div>
    </div>
    <div id="shown">  
        <input type="checkbox" class="check">
        <label for="">Add A Flight</label>
        <input type="checkbox" class="check">
        <label for="">Add A Car</label>
    </div>
</div>
<div id="SearchInput">
    <input id="search-btn" style ="margin-left:20px; width:500px;"  placeholder ="Same As Pickup"><span style="margin-left:10px ;"></span>
    <div id="hidden">
        <input type="text" placeholder="Where Are You Going ?">
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>New York</span>
        </div>
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>USA</span>
        </div>
        <div>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>Malasiya</span>
        </div>
    </div>
</div>
`
}




export {flight,cars};
