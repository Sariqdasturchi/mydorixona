import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import '../elements/elementStyle/elements.css'


const Afabazol = () => {
    return (
        <section>
            <div className="homeCont">
                <div className='bacgroundImg'></div>
                <div className="homeNavBar">
                    <h1>Mening <br /> Dorixonam</h1>
                </div>
                <div className="logo">
                    <img className="logo_img" src={logo} />
                </div>
                <div className="alomat">
                    <h3 className="alomatText">Afabazol </h3>
                    <div className="blockCont">
                        <div>
                            <h4>
                                Farmakologik guruhi</h4>
                            <p>anksiolitik vosita (trankvilizator)</p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                Afobazol kattalarda xavotirlik holatlarida yoyilgan xavotirli buzilishlar, nevrosteniya, adaptatsiyani buzilishlari, turli somatik kasalliklari (bronxial astma, ta’sirlangan ichak sindromi, tizimli qizil yugurik) bo‘lgan bemorlarda, yurak ishemik kasalligi, gipertoniya kasalligi, aritmiyalar) bo‘lgan bemorlarda dermatologik, onkologik va boshqa kasalliklarda qo‘llaniladi.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llash mumkin bo‘lmagan holatlar   </h4>
                            <p>
                                Preparatni shaxsiy o‘zlashtiraolmaslik.
                                Galaktozani o‘zlashtiraolmaslik, laktoza tanqisligi yoki glyukoza–galaktozani kam so‘rilishi.
                                Homiladorlik, laktatsiya davri.
                                18 yoshgacha bo‘lgan bolalar.
                            </p>
                        </div>
                        <div>
                            <h4>Nojo’ya tasiri</h4>
                            <p>
                                Allergik reaktsiyalar bo‘lishi mumkin.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="footerMenu">
                    <nav className="footer_menu">
                        <ul className="list">
                            <li className="list_tag"><a className="menu_tag" href={`day`} ><FaCalendarDays /></a></li>
                            <li className="list_tag"><a className="menu_tag" href={`add`} ><FaHeartCirclePlus /></a></li>
                            <li className="list_tag"><a className="menu_tag" href={`home`} ><FaHouse /></a></li>
                            <li className="list_tag"><a className="menu_tag" href={`save`} ><FaFileLines /></a></li>
                            <li className="list_tag"><a className="menu_tag" href={`profil`} ><FaUser /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
export default Afabazol