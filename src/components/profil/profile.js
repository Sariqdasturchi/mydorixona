import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../imgs/logo.png';
import './profile.css'
import '../home/home.css'
import { Link } from "react-router-dom";

const Profile = () => {
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
                    <h1 className="">Profil <br/> sozlanmalari </h1>
                </div>
                <div className="profileSetting">
                    <div>
                        <button className="">
                            <Link to='/shaxsiy-malumot'>Shaxsiy malumotlar</Link>
                        </button>
                        <button className="">
                            <Link to='/eslatma'>Eslatma!</Link>
                        </button>
                        <button className="">
                            <Link to='/ilova-tili'>Ilova tili</Link>
                        </button>
                        <button className="">
                            <Link to='/'>Chiqish</Link>
                        </button>
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

export default Profile