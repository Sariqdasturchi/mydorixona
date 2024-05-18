import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import '../elements/elementStyle/elements.css'


const Karditon = () => {
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
                    <h3 className="alomatText">Karditon </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi</h4>
                            <p>To‘qimalar metabolizmi va energiya bilan ta’minlanishini yaxshilovchi preparat.</p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                16 yoshgacha bo‘lgan bolalar va o‘smirlarda tana vazni tanqisligi va o‘sishini sekinlashishi;
                                kardiomiopatiya, miokardit, yurak ishemik kasalligi (stenokardiya, postinfarkt holatlar);
                                bosh miyada qon aylanishini buzilishi, nevrasteniya, travmatik ensefalopatiya, miopatiyalar;
                            </p>
                        </div>
                        <div>
                            <h4>
                                Nojo’ya ta’siri    </h4>
                            <p>
                                Ovqat hazm qilish tizimi tomonidan: biroz dispeptik buzilishlar - epigastriyada og‘riq, meteorizm, diareya, qabziyat.
                                Allergik reaksiyalar. Uremiyadan aziyat chekuvchi pasiyentlarda mushak kuchsizligi aniqlangan.
                            </p>
                        </div>
                        <div>
                            <h4>Ishlab chiqaruvchi</h4>
                            <p>
                                GM Pharmaceuticals Ltd.
                                Gruziya, Tbilisi sh., Ponichala 65
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
export default Karditon