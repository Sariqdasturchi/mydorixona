import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../../imgs/logo.png';
import '../../../alomat.css';
import '../../../../home/home.css';
import '../../elementStyle/elements.css'


const Salbutamol = () => {
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
                    <h3 className="alomatText">Salbutamol </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakodinamikasi</h4>
                            <p>Kodelak Neo preparatining faol moddasi butamirat markaziy ta’sirga ega yo‘talga qarshi vosita hisoblanadi. Opiyning alkaloidlariga kimyoviy jihatdan ham, farmakologik jihatdan ham mansub emas. Qaramlik yoki ko‘nikib qolishni shakllantirmaydi.
                                Yo‘tal markaziga bevosita ta’sir ega bo‘lib, yo‘talni susaytiradi. Bronxodilatatsiya qiluvchi samaraga ega (bronxlarni kengaytiradi). Spirometriya (nafas yo‘llarining qarshiligini kamaytiradi) va qonni oksigenatsiyasi (qonni kislorod bilan to‘yintiradi) ko‘rsatkichlarini yaxshilab, nafas olishni yengillashishiga yordam beradi.</p>
                        </div>
                        <div>
                            <h4>Tarkibi</h4>
                            <p>
                                Bir tabletka quyidagilarni saqlaydi:
                                faol modda: butamirat sitrati – 50,00 mg; yordamchi moddalar: laktoza monogidrati (sut qandi) – 241,00 mg, gipromelloza (metosel-K4M) – 85,00 mg, talk – 4,00 mg, magniy stearati – 4,00 mg, kolloid kremniy dioksidi (aerosil) – 6,00 mg, quyimolekulyar povidon (quyimolekulyar polivinilpirrolidon) – 5,00 mg
                            </p>
                        </div>
                        <div>
                            <h4>Kategoriyasi   </h4>
                            <p>
                                Shamollash va gripp
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
export default Salbutamol