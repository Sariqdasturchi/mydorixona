import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../imgs/logo.png';
import '../../alomat.css';
import '../../../home/home.css';
import '../elementStyle/elements.css'


const Diozalin = () => {
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
                    <h3 className="alomatText">Diazolin  </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi:</h4>
                            <p>Tizimli qo‘llash uchun gistaminga qarshi vositalar.</p>
                        </div>
                        <div>
                            <h4>Farmakologik xususiyatlari</h4>
                            <p>
                                Mebgidrolin antigistamin preparatlariga kiradi, gistamin N1-reseptorlarining blokatoridir.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                Mavsumiy va allergik rinitni, pollinozni, eshakemini, ovqat va dori allergiyasini, hashoratlar chaqqanidan keyingi teri reaksiyalarini, terining qichishishi bilan kechuvchi (ekzema, neyrodermit) dermatozlarni oldini olish va davolash.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llash mumkin bo‘lmagan holatlar</h4>
                            <p>
                            Preparat komponentlariga o‘ta yuqori sezuvchanlik. Me‘da va o‘n ikki barmoq ichak yara kasalligining zo‘rayishi bosqichi, me‘da-ichak yo‘llarining yallig‘lanishi kasalliklari, pilorostenoz.
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
export default Diozalin