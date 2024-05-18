import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import '../elements/elementStyle/elements.css'


const NovoPassit = () => {
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
                    <h3 className="alomatText">NovoPassit </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi</h4>
                            <p>Gipnotik va sedativlar</p>
                        </div>
                        <div>
                            <h4>Qo‘llanilishi</h4>
                            <p>
                                Engil nevresteniya, ayniqsa, tashvish, qo'rquv, xafagarchilik, bezovtalik, asabiylashish, kontsentratsiyaning pasayishi yoki charchoq bilan birga bo'lsa; engil uyqusizlik, charchash yoki nevrotik xotira buzilishi.
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llash mumkin bo‘lmagan holatlar   </h4>
                            <p>
                                faol moddalarga yoki epilepsiya, depressiya va markaziy asab tizimining depressiyasi bilan bog'liq boshqa holatlar;
                                siklosporin yoki takrolimusdan birgalikda foydalanish; OIVga chalingan bemorlarda 12 yoshgacha bo'lgan bolalarda qo'llash
                            </p>
                        </div>
                        <div>
                            <h4>Ishlab chiqaruvchi:  </h4>
                            <p>
                                Teva Chex  Industries s.r.o. Adres:Ostravsko 305/29, Komarov, 747 70 Opava, Chexiya.
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
export default NovoPassit