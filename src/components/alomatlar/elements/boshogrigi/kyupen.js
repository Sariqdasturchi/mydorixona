import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../imgs/logo.png';
import '../../alomat.css';
import '../../../home/home.css';
import '../elementStyle/elements.css'


const KyupenA = () => {
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
                    <h3 className="alomatText">Kyupen</h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi:</h4>
                            <p>analgetik-antipiretik</p>
                        </div>
                        <div>
                            <h4>Farmakologik xususiyatlari</h4>
                            <p>
                                Ibuprofen va parasetamolni farmakologik ta’siri ularni ta’sir mexanizmi va joyi bo‘yicha farqlanadi. O‘zaro to‘ldiruvchi ta’sir mexanizmlari sinergik xisoblanadi.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                Isitma, turli sohalarda joylashgan og‘riqlar emlashdan keyingi isitma, tish og‘rig‘i, infeksion yallig‘lanish va suyak-mushaklardagi og‘riqlarni barcha turlari, shu jumladan sportdagi jaroxatlarni yengillashtirish uchun qo‘llanadi
                            </p>
                        </div>
                        <div>
                            <h4>Nojo‘ya ta’sirlari</h4>
                            <p>
                                Me’da va 12-barmoq ichak yara kasalligini zo‘rayish bosqichi yoki me’da-ichak yo‘llaridan qon ketishlar, pankreatit, teri toshmalari, ko‘ngil aynishi, qusish, epigastral soxada diskomfort, bosh aylanishi va boshqa allergik reaksiyalar kuzatilishi mumkin.
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
export default KyupenA