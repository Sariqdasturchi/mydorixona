import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import logo from '../imgs/logo.png';
import '../home/home.css'
import '../days/days.css'
import { Link } from "react-router-dom";

const DoriSave = () => {
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
                <div className="profileCont">
                    <h1 className="">Saqalash </h1>
                </div>
                <div className="budilnik">
                    <div>
                        <label>Dori nomi</label>
                        <input className="" />
                    </div>
                    <div>
                        <button>Saqlash</button>
                    </div>
                </div>
                <div className="footerMenu">
                    <nav className="footer_menu">
                        <ul className="list">
                        <li className="list_tag"><Link className="menu_tag" to="/day" ><FaCalendarDays /></Link></li>
                            <li className="list_tag"><Link className="menu_tag" to="/add" ><FaHeartCirclePlus /></Link></li>
                            <li className="list_tag"><Link className="menu_tag" to="/home" ><FaHouse /></Link></li>
                            <li className="list_tag"><Link className="menu_tag" to="/save" ><FaFileLines /></Link></li>
                            <li className="list_tag"><Link className="menu_tag" to="/profil" ><FaUser /></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
export default DoriSave