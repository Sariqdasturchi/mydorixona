import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import '../elements/elementStyle/elements.css'


const Alotendin = () => {
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
                    <h3 className="alomatText">Alotendin </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi</h4>
                            <p>
                                Yurak-qon tomir tizimi, Yuqori qon bosimidan, Aritmiya, Taxikardiya, Beta blokerlar
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>Alotendin tabletkalarini, ovqat qabul qilishdan qat’iy nazar, chaynamasdan, oz miqdordagi suyuqlik bilan, ertalab qabul qilgan ma’qulroq.</p>
                        </div>
                        <div>
                            <h4>Nojo’ya ta’siri</h4>
                            <p>
                                Tez-tez uchraydigan nojo‘ya samaralari (10 pasiyentdan 1 nafaridan kamida uchraydi): bosh og‘rig‘i, bosh aylanishi, uyquchanlik (ayniqsa davolanishni boshida), yurakni urib ketishi, qizib ketishlar, qorinda og‘riqlar, to‘piqlarni shishi, shishlar, charchoqlik, oyoq-qo‘llarda uvishish va karaxtlanish xissi, me’da-ichak buzilishlari: ko‘ngil aynishi, qusish, diareya, qabziyat.
                            </p>
                        </div>
                        <div>
                            <h4>Ishlab chiqaruvchi </h4>
                            <p>
                                “Farmasevticheskiy zavod EGIS” YOAJ. 1106 Budapesht, Keresturi ko‘ch., 30-38, VENGRIYA.
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
export default Alotendin