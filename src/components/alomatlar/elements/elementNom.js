import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import './elementStyle/elements.css'
import { Link } from "react-router-dom";

const ElementNom = () => {
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
                    <h3 className="alomatText">Kalsiy D3</h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakodinamikasi</h4>
                            <p>D3 vitamini ichakda kalsiyni so‘rilishini oshiradi.
                                Kalsiy va D vitaminini qabul qilish suyaklarda kalsiyning tanqisligi
                                oqibatida yuz bergan va suyaklarning rezorbsiyasini oshishiga olib keluvchi
                                paratireoid gormon (PTG) darajasini ko‘payishiga to‘sqinlik qiladi.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>Kalsiy va/yoki D3 vitamining tanqisligini oldini olish va davolashda qo‘llanadi.
                                Kalsiy va D vitaminining tanqisligi xavfi bo‘lgan pasiyentlarda osteoporozni davolashda 
                                yordamchi vositalar sifatida kalsiy va D vitaminini qo‘shishda qo‘llanadi.</p>
                        </div>
                        <div>
                            <h4>Saqlash sharoiti</h4>
                            <p>Flakon zich yopilgan holda, quruq joyda, 30°S dan yuqori bo‘lmagan haroratda saqlansin.</p>
                        </div>
                        <div>
                            <h4>Ishlab chiqarilish joyi:</h4>
                            <p>- O'zbekiston, AQSh, O'zbekiston, Hindiston</p>
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
export default ElementNom