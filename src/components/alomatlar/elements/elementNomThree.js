import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import './elementStyle/elements.css'


const ElementNomThree = () => {
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
                    <h3 className="alomatText">Magniy B6</h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakalogik guruhi:</h4>
                            <p>vitamin-mineralli majmua.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>Quyidagi simptomlarning ma’lum sonini majmuasi magniyning tanqisligidan dalolat berishi 
                                mumkin: – Asabiylik, ta’sirchanlik, kuchsiz xavotirlik, o‘tkinchi toliqish, uyquni biroz
                                 buzilishi, – Me’da-ichak spazmlari, yurakni tez-tez urishi (sog‘lom yurakda) shaklidagi bezovtalik ko‘rinishlari, </p>
                        </div>
                        <div>
                            <h4>Nojo’ya ta’sirlar:</h4>
                            <p>
                                Quyida ta’riflangan simptomlar paydo bo‘lgan xolda, iltimos, darxol O‘zingizning 
                                davolovchi shifokoringizga murojaat qiling! – diareya – abdominal og‘riqlar – teri reaktsiyalari – allergik reaktsiyalar.</p>
                        </div>
                        <div>
                            <h4>Saqlash sharoiti:</h4>
                            <p>Quruq, yorug‘likdan himoyalangan joyda, 25oS dan yuqori bo‘lmagan haroratda.undefined</p>
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
export default ElementNomThree