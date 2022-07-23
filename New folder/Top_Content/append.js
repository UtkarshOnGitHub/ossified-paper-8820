let flight = ()=>{
    return `            
    <div id="input-fields">  
    <div class="col-md-12 col-lg-5">
        <div id="SearchInput">
            <button id="search-btn"> <i class="fa-solid fa-location-dot"></i> <span style="margin-left:10px ;">Going To</span> </button>
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
    </div>
    <div class="col-md-12 col-lg-4">
        <div id="date">
            <input  type="text" placeholder=" Check-In" class="date-btn" onfocus="(this.type='date')" onblur="(this.type='text')"> 
            <input  type="text" placeholder=" Check-In" class="date-btn" onfocus="(this.type='date')" onblur="(this.type='text')"> 
        </div>
    </div>
    <div class="col-md-12 col-lg-3">
        <div id="travel">
            <button id="travel-btn"><i class="fa-solid fa-user"></i><span  style="margin-left:10px ;">Check-In</span></button>
            <div id="travel-hidden">
                <div>Travelers</div>
                <div>Room 1</div>
                <div>Adults</div>
                <div>Children</div>
                <div>
                    <button>Done</button>
                </div>
            </div>
        </div>
    </div>
</div>
`
}
let cars = ()=>{
    return `            
    <div id="input-fields">  
    <div class="col-md-12 col-lg-5">
        <div id="SearchInput">
            <button id="search-btn"> <i class="fa-solid fa-location-dot"></i> <span style="margin-left:10px ;">Going To</span> </button>
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
    </div>
    <div class="col-md-12 col-lg-4">
        <div id="date">
            <input  type="text" placeholder=" Check-In" class="date-btn" onfocus="(this.type='date')" onblur="(this.type='text')"> 
            <input  type="text" placeholder=" Check-In" class="date-btn" onfocus="(this.type='date')" onblur="(this.type='text')"> 
        </div>
    </div>
    <div class="col-md-12 col-lg-3">
        <div id="travel">
            <button id="travel-btn"><i class="fa-solid fa-user"></i><span  style="margin-left:10px ;">Check-In</span></button>
            <div id="travel-hidden">
                <div>Travelers</div>
                <div>Room 1</div>
                <div>Adults</div>
                <div>Children</div>
                <div>
                    <button>Done</button>
                </div>
            </div>
        </div>
    </div>
</div>
`
}




export {flight,cars};
