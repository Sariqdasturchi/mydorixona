import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../../imgs/logo.png';
import '../../../alomat.css';
import '../../../../home/home.css';
import '../../elementStyle/elements.css'


const KoEks = () => {
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
                    <h3 className="alomatText">Ko-Eks</h3>
                    <div className="blockCont">
                        <div>
                            <h4>Chiqarish shakli</h4>
                            <p>Dori shakli: 100 ml N1 siropi (shishalarda). 100 ml PET shishada foydalanish bo'yicha ko'rsatmalar bilan birga individual karton qutiga qadoqlangan.</p>
                        </div>
                        <div>
                            <h4>Ko'rsatkichlar</h4>
                            <p>
                                –Co-Ex preparati bronxit va shamollash paytida nafas yo'llarida tiqilib qolishni bartaraf etish uchun samarali ekspektoran hisoblanadi.
                                U ekspektoran va mukolitik xususiyatlarga ega bo'lib, bronxial sekretsiyalarning viskozitesini kamaytiradi va ekspektoratsiyani rag'batlantiradi. Co-Ex shuningdek, bronxial shilliq qavatning tirnash xususiyati va bronxospazmni kamaytiradigan antitussiv va antispazmodik ta'sirga ega. Sil kasalligi tufayli ko'k yo'tal, astma va yo'talni yo'q qiladi.
                            </p>
                        </div>
                        <div>
                            <h4>Homiladorlik va laktatsiya davrida</h4>
                            <p>
                                Homiladorlik va laktatsiya davrida ushbu preparatning samaradorligi va xavfsizligini tasdiqlovchi ma'lumotlar etarli emas. Shifokor bilan maslahatlashish tavsiya etiladi.
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
export default KoEks