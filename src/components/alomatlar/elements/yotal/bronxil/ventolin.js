import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../../imgs/logo.png';
import '../../../alomat.css';
import '../../../../home/home.css';
import '../../elementStyle/elements.css'


const Ventolin = () => {
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
                    <h3 className="alomatText">Ventolin </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi</h4>
                            <p>Kapillyarlarning o‘tkazuvchanligini pasaytiruvchi preparatlar. Vena qon tomirlari tonusini mustahkamlovchi va angioprotektor vosita</p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                Oyoqlardagi funksional hamda organik tabiatli surunkali venoz yetishmovchili: oyoqlarda og‘irlik hissi, og‘riq, tirishishlar, trofik buzilishlarda;
                                o‘tkir gemorroyni simptomatik davolash uchun qo‘llanadi
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llash mumkin bo‘lmagan holatla   </h4>
                            <p>
                                Preparatning komponentlaridan birortasiga o‘ta yuqori sezuvchanlik;
                                18 yoshgacha bo‘lgan bolalarga qo‘llash mumkin emas
                            </p>
                        </div>
                        <div>
                            <h4>Ishlab chiqaruvchi</h4>
                            <p>
                                «Uorld Medisin Ilach San. ve Tidj. A.Sh.», Turkiya.
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
export default Ventolin