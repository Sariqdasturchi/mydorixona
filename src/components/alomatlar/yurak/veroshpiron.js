import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import '../elements/elementStyle/elements.css'


const Veroshpiron = () => {
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
                    <h3 className="alomatText">Veroshpiron </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi</h4>
                            <p>Kaliyni tejovchi diuretiklar. Aldosteron antagonistlari.</p>
                        </div>
                        <div>
                            <h4>Qo’llash usuli</h4>
                            <p>
                                Veroshpironning sutkalik dozasi ovqatdan so‘ng bir yoki ikki marta qabul qilishga bo‘lib buyuriladi. Sutkalik dozani yoki sutkalik dozaning birinchi qismini ertalab qabul qilish tavsiya qilinadi
                            </p>
                        </div>
                        <div>
                            <h4>Qo’llanilishi   </h4>
                            <p>
                                Boshqa davolash usulini qo‘llash mumkin bo‘lmagan hollarda gipokaliyemiyani davolash uchun; Yurak glikozidlarini qabul qilayotgan pasiyentlarda gipokaliyemiyani oldini olish uchun qachonki boshqa davolash usullarini qo‘llash maqsadga muvofiq bo‘lmasa yoki mos kelmaganda qo‘llanadi
                            </p>
                        </div>
                        <div>
                            <h4>Ishlab chiqaruvchi   </h4>
                            <p>
                                “Gedeon Rixter” OAJ.
                                1103 Budapesht, Demrei ko‘ch., 19-21 Vengriya
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
export default Veroshpiron