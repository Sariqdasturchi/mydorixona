import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import '../elements/elementStyle/elements.css'


const Anaprilin = () => {
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
                    <h3 className="alomatText">Anaprilin </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi</h4>
                            <p>Noselektiv b-adrenoblokatorlar</p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                Arterial gipertenziya; stenokardiya; essensial tremor; tireotoksikoz xavotirli buzilishlarni, majmuaviy davolashda, migrenni oldini olish uchun qo‘llanadi
                            </p>
                        </div>
                        <div>
                            <h4>Nojo’ya ta’sir   </h4>
                            <p>
                                Nerv tizimi tomonidan: kuchli toliqish, holsizlik, bosh aylanishi, bosh og‘rig‘i, uyquchanlik yoki uyqusizlik, tungi dahshatlar, depressiya, xotirani pasayishi, ongni chalkashishi, gallyusinatsiyalar, tremor, asabiylik, bezovtalik;
                                Yurak-qon tomir tizimi tomonidan: sinusli bradikardiya, atrioventrikulyar blokadalar, aritmiyalar, surunkali yurak yetishmovchiligini rivojlanishi (dekompensatsiya), arterial pasayishi, ortostatik gipotenziya, angiospazm (periferik qon aylanishini buzilishini kuchayishi, oyoqlarni sovuq qotishi, Reyno sindromi), ko‘krakda og‘riq
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
export default Anaprilin