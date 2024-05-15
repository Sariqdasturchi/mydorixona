import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../../imgs/logo.png';
import '../../../alomat.css';
import '../../../../home/home.css';
import '../../elementStyle/elements.css'


const Askoril = () => {
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
                    <h3 className="alomatText">Askoril</h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakodinamikasi</h4>
                            <p>Askoril ekspektorant – bronxlarni kengaytiruvchi, mukolitik va balg‘am ko‘chiruvchi ta’sirga ega majmuaviy preparatdir. Salbutamol, bromgeksin gidroxloridi, gvayfenezin va mentolni rasional majmuasi tufayli nafas tizimi tomonidan yaqqol funksional buzilishlarni samarali va tez kamaytiradi.</p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                – qiyin ajraladigan balg‘amni hosil bo‘lishi bilan birga kechadigan o‘tkir va surunkali bronx-o‘pka kasalliklari (bronxial astma, traxeobronxit, obstruktiv bronxit, pnevmoniya, o‘pka emfizemasi, ko‘kyo‘tal, pnevmokoniaz, o‘pka tuberkulyozi va boshqalar) (majmuaviy davolash tarkibida);
                                – o‘tkir respirator kasalliklarida (O‘RK) qo‘llanadi.
                            </p>
                        </div>
                        <div>
                            <h4>Ishlab chiqaruvchi</h4>
                            <p>
                                Glenmark Farmasyutikalz Ltd,
                                Hindiston, PLOT № Ye 37, 39, MIDS Area, Saptur, Nasik-422007, Maxarashtra
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
export default Askoril