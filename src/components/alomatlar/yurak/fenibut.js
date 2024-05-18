import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../imgs/logo.png';
import '../alomat.css';
import '../../home/home.css';
import '../elements/elementStyle/elements.css'


const Fenibut = () => {
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
                    <h3 className="alomatText">Fenibut </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakoterapevtik guruhi</h4>
                            <p>(γ-amino-β-fenilmoy kislota) — anksiolitik va nootrop vosita, γ-aminomoy neyromediatorining β-fenil unumi.</p>
                        </div>
                        <div>
                            <h4>Ko’rsatmalar</h4>
                            <p>
                                Aqliy va hissiy faollikning pasayishi; Depressiya, surunkali stress; Tashvishli buzilishlar;
                                Astenik holatlar, qo’rquv;
                            </p>
                        </div>
                        <div>
                            <h4>Qo‘llash mumkin bo‘lmagan holatlar   </h4>
                            <p>
                                Preparat ko’p qarshi ko’rsatmalarga ega emas. Yo’riqnomada ko’rsatilishicha, uni 8 yoshgacha bo’lgan bolalarga tayinlash tavsiya etilmaydi.
                            </p>
                        </div>
                        <div>
                            <h4></h4> <br/>
                            <p>
                                Preparat odatda boshqa guruhlardagi dori-darmonlar bilan yaxshi kombinatsiyalanadi. Boshqa trankvilizatorlar, neyroleptiklar, narkotik analgetiklar, uyqu dorilar, antiepileptik va antikonvulsantlar, antidepressantlar bilan birgalikda qo’llanilganida, kumulyativ effekt yuzaga keladi va mazkur preparatlarning ta’siri kuchayadi.
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
export default Fenibut