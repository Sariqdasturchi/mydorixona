import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../imgs/logo.png';
import '../home/home.css'

const NomBoyicha = () => {
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
                    <h3 className="">Nomi bo'yicha</h3>
                    <div className="alomatBtn">
                        <div className="">
                            <button className="">
                                <a>Kalsiy</a>
                            </button>
                        </div>
                        <div className="">
                            <button className="">
                                <a>Yodomarin</a>
                            </button>
                        </div>
                        <div className="">
                            <button className="">
                                <a>Magniy B6</a>
                            </button>
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
export default NomBoyicha