let navbar =()=>{
    return ` <div class="col-lg-6">
    <div id="navbar-newdiv">
        <div>
            <ul id="fist_nav">
                <li>
                    <a href = "../../index.html"><img src="https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2" alt=""></a>
                </li>
            </ul>
        </div>
        <div id="Navlinks">
            <ul>
            <div class="dropdown">
                <li style="font-size:14px;">
                    <div>More travel</div>
                    <div>
                        <svg class="s-icon" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path></svg></svg>
                    </div>
                </li>
                <div class="drop-content">
                    <a href="../overdeals1/stays.html">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box2-fill" viewBox="0 0 16 16">
                        <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z"/>
                    </svg>  -->
                    <svg class="s-icon" aria-hidden=" true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M21.59 11.59h-2.36V8.66c0-.23-.2-.41-.43-.41h-5.82a.42.42 0 00-.43.41v2.93H10.2a.42.42 0 00-.43.41v8.34c0 .23.21.41.43.41h11.4c.21 0 .41-.2.41-.41V12c0-.23-.2-.41-.41-.41zm-7.36-1.68h3.32v1.68h-3.32V9.91zm3.79 9.06l-1.2-1.17 2.37-2.36 1.17 1.17-2.34 2.36zM10.89 4.91V3.66a.4.4 0 00-.41-.41H4.64a.4.4 0 00-.41.41v2.93H2.4A.4.4 0 002 7v13.34c0 .2.18.41.41.41h5.7V10.34c0-.23.18-.43.41-.43h2.37v-5zM9.23 6.59H5.89V4.91h3.34v1.68z"></path></svg></svg>
                    <p>Packages</p>  </a>
                    <a href="../overdeals1/stays.html">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                        </svg> -->
                        <svg class="s-icon" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><svg><path d="M21.61 21.41l-.47-1.1a.49.49 0 00-.16-.2.4.4 0 00-.23-.06h-.84V7.4a.4.4 0 00-.12-.28.38.38 0 00-.29-.13h-3.75V2.41a.4.4 0 00-.12-.28.38.38 0 00-.29-.13H4.5a.38.38 0 00-.3.13.4.4 0 00-.11.28v17.64h-.84a.4.4 0 00-.23.07.49.49 0 00-.16.18l-.47 1.11a.44.44 0 00-.03.2c0 .08.03.14.07.2a.38.38 0 00.33.2h18.48a.38.38 0 00.33-.2.36.36 0 00.07-.2c0-.06 0-.13-.03-.2zM9.09 17h-2.5v-2.5h2.5V17zm0-5h-2.5V9.5h2.5V12zm0-5h-2.5V4.5h2.5V7zm4.16 12.77h-2.5V14.5h2.5v5.27zm0-7.77h-2.5V9.5h2.5V12zm0-5h-2.5V4.5h2.5V7zm4.16 10h-2.5v-2.5h2.5V17zm0-5h-2.5V9.5h2.5V12z"></path></svg></svg>
                        <p>Stays</p>
                    </a>
                    <a href="../overdeals1/stays.html">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front" viewBox="0 0 16 16">
                            <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"/>
                            <path fill-rule="evenodd" d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"/>
                        </svg> -->
                        <svg class="s-icon" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <svg>
                                <path d="M21.86 11.16L20.2 9.62l-1.66-5.53a.39.39 0 00-.14-.21.4.4 0 00-.25-.08H5.85a.4.4 0 00-.25.08.4.4 0 00-.14.2l-1.8 5.54-1.54 1.54a.38.38 0 00-.1.14.44.44 0 00-.02.16v4.94l.03.15c.02.06.05.1.09.14l.72.7v2.37c0 .11.04.22.12.3.08.08.17.13.29.13h3.34c.12 0 .21-.05.3-.13a.43.43 0 00.11-.3v-2.37h10v2.37c0 .11.04.22.12.3.08.08.17.13.29.13h3.34c.12 0 .21-.05.3-.13a.43.43 0 00.11-.3v-2.37l.72-.7a.38.38 0 00.1-.14l.02-.15v-4.92a.39.39 0 00-.04-.18.52.52 0 00-.1-.14zM6.8 5.46h10.4l1.25 4.16H5.54l1.25-4.16zm-.9 9.16a1.6 1.6 0 01-1.18-.49 1.6 1.6 0 01-.48-1.17c0-.46.16-.85.48-1.17a1.6 1.6 0 011.18-.49c.45 0 .84.16 1.17.49.32.32.49.71.49 1.17 0 .46-.17.85-.5 1.17a1.6 1.6 0 01-1.16.49zm12.22 0a1.6 1.6 0 01-1.17-.49 1.6 1.6 0 01-.49-1.17c0-.46.17-.85.5-1.17a1.6 1.6 0 011.16-.49c.46 0 .85.16 1.18.49.32.32.48.71.48 1.17 0 .46-.16.85-.48 1.17a1.6 1.6 0 01-1.18.49z"></path>
                            </svg>
                        </svg>
                        <p>Cars</p>
                    </a>
    
                    <a href="../overdeals1/stays.html">
                        <!-- <span class="material-symbols-outlined">
                            flight
                        </span> -->
                        <svg class="s-icon" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <svg>
                                <path d="M3.64 14.26l2.86.95 4.02-4.02-8-4.59 1.16-1.16c.1-.1.26-.14.41-.1l9.3 2.98c1.58-1.58 3.15-3.2 4.77-4.75.31-.33.7-.58 1.16-.73.45-.16.87-.27 1.25-.34.55-.05.98.4.93.93-.07.38-.18.8-.34 1.25-.15.46-.4.85-.73 1.16l-4.75 4.78 2.97 9.29c.05.15 0 .29-.1.41l-1.17 1.16-4.57-8.02L8.8 17.5l.95 2.84L8.6 21.5l-2.48-3.62L2.5 15.4l1.14-1.14z"></path>
                            </svg>
                        </svg>
                        <p>Flight</p>
                    </a>
    
                    <a href="../overdeals1/stays.html">
                        <!-- <span class="material-symbols-outlined">
                            directions_boat
                        </span> -->
                        <svg class="s-icon"  aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <svg>
                                <path d="M20.34 10.96v1.68c0 .13-.06.24-.14.32-2.21 1.99-3.51 4.72-4.58 7.45-.24.62-.4 1.05-.48 1.3a.4.4 0 01-.39.29h-5.5a.4.4 0 01-.4-.3c-.07-.24-.23-.67-.47-1.3-1.06-2.7-2.4-5.47-4.58-7.44a.44.44 0 01-.14-.32v-1.68c0-.18.11-.33.3-.4l6.5-2.17c.23-.05.54.08.54.35L12 16l1-7.26c0-.28.3-.4.54-.35l6.5 2.16c.19.08.3.23.3.41zM5.83 8.2L12 6.12l6.17 2.07-1.72-3.14h1.66l-.47-1.37a.4.4 0 00-.39-.3h-4.14v-.97c0-.23-.2-.41-.4-.41H11.3c-.21 0-.41.18-.41.41v.98H6.75a.4.4 0 00-.4.29L5.9 5.05h1.66L5.83 8.19z"></path>
                            </svg>
                        </svg>
                        <p>Cruses</p>
                    </a>
    
                    <a href="../overdeals1/stays.html">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ticket-detailed-fill" viewBox="0 0 16 16">
                            <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Zm0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Z"/>
                        </svg> -->
                        <svg class="s-icon" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <svg>
                                <path d="M22 10.18V6H2v4.18c.9 0 1.66.75 1.66 1.66 0 .9-.76 1.66-1.66 1.66v4.18h20V13.5c-.9 0-1.66-.76-1.66-1.66 0-.9.76-1.66 1.66-1.66zm-4.16 4.57c0 .23-.2.43-.43.43H6.59a.43.43 0 01-.43-.43V8.93c0-.23.2-.43.43-.43h10.82c.23 0 .43.2.43.43v5.82zm-10-4.57h8.32v3.32H7.84v-3.32z"></path>
                            </svg>
                        </svg>
                        <p>Things to do</p>
                    </a>
    
                    <a href="">Trips for me</a>
    
                    <a href="">Discover</a>
    
                    <a href="">Travel Deals</a>
    
                    <a href="">Get Inspired</a>
    
                    <a href="">Groups & meetings</a>
                </div>
            </div>
                    
            </ul>
        </div>
    </div>
</div><!-- col -->
<div class="col-md-6">
    <div id="newLi_div">
        <ul id="rest_nav">
             <li id="bt">Our Deals</li>
             <li><a href="./New folder/listYourProperty.html"">List Your Property</a></li>
             <li>Support</li>
             <li ><a href="./New folder/trips/trips.html">Trips</a></li>
             <li><a href="./New folder/Login/SignUp/Signin.html" id="mysign">Sign In</a></li>
        </ul> 
     </div>
</div>`
}


let footer = ()=>{
    return `    <div id="first-footer">
    
    <div id="footer">
        <div class="footer-top"><img
                src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
                alt="">
        </div>
        <div class="footer-top">
            <div class="footer-tag">
                Company
            </div>
            <div class="footer_nav">
                <a href="https://www.expediagroup.com/">About</a> 
            </div>
            <div class="footer_nav">
                <a href="https://lifeatexpediagroup.com/">Jobs</a>
            </div>
            <div class="footer_nav">
                <a href="https://welcome.expediagroup.com/en/about-us/join-travelocity">List your property</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.expediagroup.com/partner-with-us/default.aspx">Partnerships</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/pressroom/">Newsroom</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Investor Relations</a>
            </div>
            <div class="footer_nav">
                <a href="https://roaminggnomestore.com/">Roaming Gnome Store</a>
            </div>
            <div class="footer_nav">
                <a href="https://advertising.expedia.com/getting-started/brands/travelocity/">Advertising</a>
            </div>

        </div>
        <div class="footer-top">
            <div class="footer-tag">
                Explore
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Hotel-Destinations">Hotels in United States</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Vacation-Rental-Destinations">Vacation Rentals in United States</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/United-States-Of-America.d201.Destination-Travel-Guides">Vacation Packages in United States</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Flight-Destinations">Domestic Flights</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Car-Rental-Destinations">car Rentals in United States</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/reviews/">Travelocity Reviews</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/lp/deals/coupons-promo-codes-exclusive-discounts">Travelocity Coupons</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/Accommodations">Unique Places to Stay</a>
            </div>
            <div class="footer_nav">
                <a href="https://www.travelocity.com/inspire/">Travel Blog</a>
            </div>
        </div>
        <div class="footer-top" >
            <div class="footer-tag">Policies</div>
            <div class="footer_nav"><a href="https://www.travelocity.com/lp/lg-privacy">Privacy Policy</a></div>
            <div class="footer_nav"><a href="https://www.travelocity.com/lp/lg-terms">Terms of Use</a></div>
            <div class="footer_nav"><a href="https://www.vrbo.com/legal/terms-and-conditions">Vrbo terms and conditions</a></div>
            <div class="footer_nav"><a href="https://www.travelocity.com/p/info-other/web-accessibility-policy">Accessibility</a></div>
            <div class="footer_nav"><a href="https://www.travelocity.com/dnsmpi">Do not sell my personal information</a></div>
        </div>
        <div class="footer-top">
            <div class="footer-tag">Help</div>
            <div class="footer_nav"><a href="https://www.travelocity.com/service/">Support</a></div>
            <div class="footer_nav"><a href="https://www.travelocity.com/service/#/articles/418/34/13190">Cancel your hotel or vacation rental booking</a></div>
            <div class="footer_nav"><a href="https://www.travelocity.com/service/#/myTrips/19432">Cancel your flight</a></div>
            <div class="footer_nav"><a href="https://www.travelocity.com/service/#/myTrips/19432">Refund timeline, policies & processes</a></div>
            <div class="footer_nav"><a href="https://www.travelocity.com/service/#/article/13185">Use a Travelocity coupon</a></div>
        </div>
    </div>
    <div id="hr">
        <hr>
    </div>
    
    <div id="copyright">
        
        <div class="copyright_new">
            © 2022 Travelscape LLC, an Expedia Group Company. All rights reserved.

        </div>
        <div class="copyright_new">
            Travelocity, the Stars Design, and The Roaming Gnome Design are trademarks or registered trademarks of Travelscape LLC. CST# 2056372-50.
        </div>
    </div>
        
</div>`
}
export {navbar,footer}