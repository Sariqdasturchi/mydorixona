import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../imgs/logo.png';
import '../../alomat.css';
import '../../../home/home.css';
import '../elementStyle/elements.css'


const AllerG = () => {
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
                    <h3 className="alomatText">Aller-G </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi:</h4>
                            <p>Allergiyaga qarshi vosita.</p>
                        </div>
                        <div>
                            <h4>Farmakologik xususiyatlari</h4>
                            <p>
                                Mavsumiy va surunkali allergik rinit;allergik kon’yunktivit;.qichishish bilan kechadigan dermatozlar;eshakemi (shu jumladan surunkali idiopatik eshakemi) va Kvinke shishi.undefined
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                O‘ta yuqori sezuvchanlik, homiladorlik, laktatsiya davri
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llash mumkin bo‘lmagan holatlar</h4>
                            <p>
                                Ovqat hazm qilish tizimi tomonidan: og‘izni qurishi, kam hollarda – dispeptik buzilishlar; Markaziy nerv tizimi tomonidan: yaqqol bo‘lmagan va tez o‘tib ketadigan  uyquchanlik, bosh og‘rig‘i, bosh aylanishi, alohida hollarda – qo‘zg‘alish; Allergik reaktsiyalar: juda kam hollarda – teri ko‘rinishlari, angionevrotik shish.
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
export default AllerG