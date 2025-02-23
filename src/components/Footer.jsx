import facebook from "../assets/img/footer-facebook.png"
import twitter from "../assets/img/footer-twitter.png"
import youtube from "../assets/img/footer-youtube.png"
import pinterest from "../assets/img/footer-pinterest.png"
import periscope from "../assets/img/footer-periscope.png"
import dc_logo from "../assets/img/dc-logo-bg.png"

const Footer = () => {
    return (
        <footer >
            <section className="container">
                <ul>
                    <li className="lista-header"><h2>DC COMICS</h2></li>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">News</a></li>
                    <li className="lista-header"><h2>SHOP</h2></li>
                    <li><a href="#">Shop DC</a></li>
                    <li><a href="#">Shop DC Collectibles</a></li>
                </ul>
                <ul>
                    <li className="lista-header"><h2>DC</h2></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">Privacy Policy(new)</a></li>
                    <li><a href="#">Ad Choices</a></li>
                    <li><a href="#">Advertising</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Talent Workshops</a></li>
                    <li><a href="#">CPSC Certificates</a></li>
                    <li><a href="#">Ratings</a></li>
                    <li><a href="#">Shop Help</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>
                <ul>
                    <li className="lista-header"><h2>Sites</h2></li>
                    <li><a href="#">DC</a></li>
                    <li><a href="#">MAD Magazine</a></li>
                    <li><a href="#">DC KIds</a></li>
                    <li><a href="#">DC Universe</a></li>
                    <li><a href="#">DC Power Visa</a></li>

                </ul>
                <img src={dc_logo} alt="" />

            </section>
            <div className="bg-black">
                <div className="container footer-icone">
                    <ul>
                        <li><a className="button" href="#">SIGN UP NOW!</a></li>
                    </ul>
                    <ul className="social-logos">
                        <li className="list-header-footer"><a href="#"></a><h2>FOLLOW US</h2></li>
                        <li><a href="#"><img src={facebook} alt="" /></a></li>
                        <li><a href="#"><img src={twitter} alt="" /></a></li>
                        <li><a href="#"><img src={youtube} alt="" /></a></li>
                        <li><a href="#"><img src={pinterest} alt="" /></a></li>
                        <li><a href="#"><img src={periscope} alt="" /></a></li>
                    </ul>
                    
                </div>


            </div>

        </footer>
    )
}

export default Footer






// import facebook from "../assets/img/footer-facebook.png"
// import periscope from "../assets/img/footer-periscope.png"
// import pinterest from "../assets/img/footer-pinterest.png"
// import twitter from "../assets/img/footer-twitter.png"
// import youtube from "../assets/img/footer-youtube.png"










// const Footer = () => {

//     return (
//         <footer>
//             <div
//                 className="text-white py-5">
//                 <div className="container">
//                     <div className="row justify-content-start">
//                         <div className="col-2">
//                             <h5 className="fw-bold">DC COMICS</h5>
//                             <ul className="list-unstyled">
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Characters
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Comics
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Movies
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         TV
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Games
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Videos
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         News
//                                     </a>
//                                 </li>
//                             </ul>
//                             <h5 className="fw-bold">SHOP</h5>
//                             <ul className="list-unstyled">
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Shop DC
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Shop DC Collectibles
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className="col-2">
//                             <h5 className="fw-bold">DC</h5>
//                             <ul className="list-unstyled">
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Terms Of Use
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Privacy Policy (New)
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Ad Choices
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Advertising
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Jobs
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Subscriptions
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Talent Workshops
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         CPSC Certificates
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Ratings
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Shop Help
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         Contact Us
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>

//                         <div className="col-2">
//                             <h5 className="fw-bold">SITES</h5>
//                             <ul className="list-unstyled">
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         DC
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         MAD Magazine
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         DC Kids
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         DC Universe
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-decoration-none">
//                                         DC Power Visa
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div
//                 style={{
//                     backgroundColor: `#303030 `,
//                 }}
//             >
//                 <div className="container py-4">
//                     <div className="row d-flex justify-content-between align-items-center">
//                         <div className="col-auto">
//                             <button
//                                 type="button"
//                                 class="btn btn-outline-primary text-white"
//                             >
//                                 SIGN-UP NOW!
//                             </button>
//                         </div>
//                         <div className="col-auto d-flex align-items-center gap-2">
//                             <h5 className="mb-0 d-flex align-items-center text-primary fs-">
//                                 FOLLOW US
//                             </h5>
//                             <img src={facebook} alt="" />
//                             <img src={periscope} alt="" />
//                             <img src={pinterest} alt="" />
//                             <img src={youtube} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>

//     )
// }



// export default Footer


