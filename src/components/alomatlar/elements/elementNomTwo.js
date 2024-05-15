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

const ElementNomTwo = () => {
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
                    <h3 className="alomatText">Yodamarin 200 </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Qo‘llash usuli</h4>
                            <p>Ovqatdan keyin yetarli miqdordagi suv bilan birga qabul qilinadi
                            </p>
                        </div>
                        <div>
                            <h4>Davolash davomiyligi</h4>
                            <p>Oldini olish maqsadlarda Yodomarin® 200 muntazam bir necha yil davomida, ko‘pincha esa butun hayoti davomida qabul qilinadi.
                                Yangi tug‘ilgan chaqaloqlardagi bo‘qoqni davolash uchun, odatda 2-4 hafta yetarli bo‘ladi. Bolalar, o‘smirlar va kattalardagi 
                                bo‘qoqni davolash uchun 6 dan 12 oygacha talab qilinadi</p>
                        </div>
                        <div>
                            <h4>Nojo’ya ta’sirlari</h4>
                            <p>Barcha dori vositalari kabi Yodomarin® 200 ham nojo‘ya ta’sirlar ko‘rsatishi mumkin, lekin ular har bir pasiyentlarda ham kuzatilmaydi</p>
                        </div>
                        <div>
                            <h4>Ishlab chiqarilish joyi:</h4>
                            <p>Berlin - Xemi AG, Berlin - Chemie AG (Menarini Group) Germaniya</p>
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
export default ElementNomTwo