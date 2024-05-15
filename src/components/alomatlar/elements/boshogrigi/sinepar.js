import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../imgs/logo.png';
import '../../alomat.css';
import '../../../home/home.css';
import '../elementStyle/elements.css'


const SineparA = () => {
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
                    <h3 className="alomatText">Sinepar</h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi:</h4>
                            <p>analgetik-antipiretik</p>
                        </div>
                        <div>
                            <h4>Farmakologik xususiyatlari</h4>
                            <p>
                                Sinepar® tabletkalari – og‘riqni qoldiruvchi, isitmani tushiruvchi va yallig‘lanishga qarshi ta’sir ko‘rsatadi.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                Og‘riq qoldiruvchi, yallig‘lanishga qarshi va og‘riqdan halos etadi. Osteoartrit, surunkali artrit, osteoxondroz,og‘riq va yallig‘lanishni kamaytirish uchun; ortopedik, stomatologik va boshqa kichik xirurgik operatsiyalarida, tish og‘rig‘i, dismenoreya  tanadagi og‘riqlar; bosh og‘rig‘ida, isitmani pasaytirish uchun qo‘llanadi.
                            </p>
                        </div>
                        <div>
                            <h4>Nojo‘ya ta’sirlari</h4>
                            <p>
                                Markaziy nerv tizimi tomonidan: bosh aylanishi, toliqish. Kam hollarda – his qilish yoki ko‘rishni buzilishi (jismlarni noaniq ko‘rish, diplopiya), quloqlarni shang‘illashi, ta’sirchanlik, tirishishlar, uyquni buzilishi, depressiya, xavotirlik hissi;
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
export default SineparA