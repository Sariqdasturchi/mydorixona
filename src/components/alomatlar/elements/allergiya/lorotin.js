import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../imgs/logo.png';
import '../../alomat.css';
import '../../../home/home.css';
import '../elementStyle/elements.css'


const Lorotin = () => {
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
                    <h3 className="alomatText">Loratadin </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi:</h4>
                            <p>analgetik-antipiretik</p>
                        </div>
                        <div>
                            <h4>Farmakologik xususiyatlari</h4>
                            <p>
                            30 minutdan keyin allergiya belgilarini bartaraf qiladi va 24 soat davomida ta‘sir qiladi. O‘rganib qolishni chaqirmaydi. Preparat alkogolning samarasini kuchaytirmaydi, u qo‘llanganida markaziy nerv tizimiga nisbatan tinchlantiruvchi va boshqa samaralari yo‘q.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                            Eshakemi, Kvinke shishi, zardob kasalligi, allergik rinit, kon‘yunktivit, dermatit, bronxial astmaning infeksion-allergik shakli, medikamentoz allergiya. Hashoratlar chaqqanidagi allergik reaksiyalarni bartaraf qiladi.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llash mumkin bo‘lmagan holatlar</h4>
                            <p>
                            Preparatning komponentlariga bo‘lgan yuqori sezuvchanlik, emizish davri. 2 yoshgacha bo‘lgan bolalarda Loratadinning tabletka shaklini qo‘llamagan yaxshiroq.
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
export default Lorotin