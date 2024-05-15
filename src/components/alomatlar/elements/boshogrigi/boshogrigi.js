import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../imgs/logo.png';
import '../../alomat.css';
import '../../../home/home.css';
import '../elementStyle/elements.css'


const BoshOgrigi = () => {
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
                    <h3 className="alomatText">Trimol</h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi:</h4>
                            <p>Analgetik-antipiretiklar</p>
                        </div>
                        <div>
                            <h4>Farmakologik xususiyatlari</h4>
                            <p>
                                Parasetamol isitmani tushiruvchi va og‘riqni qoldiruvchi ta’sir ko‘rsatadi. Propifenazon – pirazolin hosilasi, og‘riqni qoldiruvchi, isitmani tushiruvchi va yallig‘lanishga qarshi ta’sir ko‘rsatadi.
                                Kofein markaziy nerv tizimiga, asosan bosh miya qobig‘iga, nafas va qon tomirlarni harakatlantiruvchi markazlarga rag‘batlantiruvchi ta’sir ko‘rsatadi.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                Trimol Forte turli genezli kuchsiz va o‘rtacha jadallikdagi og‘riq sindromi (bosh og‘rig‘i , migren, tish og‘rig‘i, nevralgiya, mialgiya, artralgiya, dismenoreya va boshqalar), isitma sindromida (O‘RK, gripp) va boshqa infeksion-yallig‘lanish kasalliklarida yuqori tana haroratini pasaytirish uchun qo‘llanadi.
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
export default BoshOgrigi