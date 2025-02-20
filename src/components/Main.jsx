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

                <img src={digitalComics} alt="" />
                <p>DIGITAL COMICS</p>
                <img src={dcMerchandise} alt="" />
                <p>DC MERCANDISE</p>
                <img src={subscriptions} alt="" />
                <p>SUBSCRIPTION</p>
                <img src={shopLocator} alt="" />
                <p>COMICS SHOP LOCATION</p>
                <img src={dcPowerVisa} alt="" />
                <p>DC POWER VISA</p>

            </section>

        </main>
    )

}

export default Main



