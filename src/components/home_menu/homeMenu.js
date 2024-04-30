import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import logo from '../imgs/logo.png';

const HomeMenu = () => {
    return (
        <section>
            <div className="homeCont">
                <div className="homeNavBar">
                    <h1>Mening <br /> Dorixonam</h1>
                </div>
                <div className="homeSearch">
                    <h4>Dori Izlash</h4>
                    <input placeholder="Dorini nomini kiriting" />

                </div>
                <div className="cardCorusel">
                    <div className="card"></div>
                </div>
                <div className="logo">
                    <img className="logo_img" src={logo} />
                </div>
                <div className="map_leng">
                    <div className="leng_cont"><TbWorld /></div>
                    <div className="map_cont"><FaMapMarkerAlt /></div>
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
export default HomeMenu