import digitalComics from "../assets/img/buy-comics-digital-comics.png"
import dcMerchandise from "../assets/img/buy-comics-merchandise.png"
import subscriptions from "../assets/img/buy-comics-subscriptions.png"
import shopLocator from "../assets/img/buy-comics-shop-locator.png"
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg"


const Main = () => {
    return (
        <main>
            <section className="containerBlack">
                <p> __Content Goes Here__ </p>
            </section>

            <section className="BluContainer">
                <ul className="icons">
                    <li><a href="#"> <img src={digitalComics} alt="digitalComics" /></a><p>digital comics</p></li>
                    <li><a href="#"> <img src={dcMerchandise} alt="dcMerchandise" /></a><p>dc merchandise</p></li>
                    <li><a href="#"> <img src={shopLocator} alt="shopLocator" /></a><p>subscriptions</p></li>
                    <li><a href="#"> <img src={subscriptions} alt="subscriptions" /></a><p>comic shop locator</p></li>
                    <li><a href="#"> <img src={dcPowerVisa} alt="dcPowerVisa" /></a><p>dc power visa</p></li>
                </ul>

            </section>

        </main>
    )

}

export default Main