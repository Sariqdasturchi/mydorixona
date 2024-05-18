import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import '../elements/elementStyle/elements.css'


const Korvalol = () => {
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
                    <h3 className="alomatText">Korvalol </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi</h4>
                            <p>Uxlatuvchi va sedativ vositalar.</p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                – kuchli ta’sirchanlik bilan kechuvchi nevrozlar – uyqusizlik – gipertoniya kasalligi va vegetotomir distoniyasini majmuaviy davolashda; – koronar tomirlarning yaqqol namoyon bo‘lmagan spazmi, taxikardiya; -ichak spazmlari (spazmolitik preparat sifatida).
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llash mumkin bo‘lmagan holatlar   </h4>
                            <p>
                                Preparatning komponentlariga, bromga yuqori sezuvchanlik, og‘ir yurak yetishmovchiligi, buyraklar va jigar faoliyatini yaqqol buzilishlari, homiladorlik va emizish.
                            </p>
                        </div>
                        <div>
                            <h4>Nojo’ya tasirlar:  </h4>
                            <p>
                                Ayrim hollarda uyquchanlik, yengil bosh aylanishi kuzatilishi mumkin, ular dozani kamaytirish bilan bartaraf etiladi.
                                Uzoq muddat qo‘llanganda preparatga qaramlik va bromizm paydo bo‘lishi mumkin.undefined
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
export default Korvalol