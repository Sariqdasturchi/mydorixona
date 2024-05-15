import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../../imgs/logo.png';
import '../../../alomat.css';
import '../../../../home/home.css';
import '../../elementStyle/elements.css'


const Sinekod = () => {
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
                    <h3 className="alomatText">Sinekod</h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakodinamikasi</h4>
                            <p>Butamirat sitrati, Sinekod preparatining ta’sir etuvchi moddasi bo‘lib, na kimyoviy na farmakologik tomonidan opiya alkaloidlariga kirmaydigan yo‘talga qarshi vosita hisoblanadi.</p>
                        </div>
                        <div>
                            <h4>Foydalanish uchun ko’rsatmalar:</h4>
                            <p>
                                Kelib chiqishi turli bo‘lgan quruq yo‘talni simptomatik davolash uchun qo‘llaniladi
                            </p>
                        </div>
                        <div>
                            <h4>Qo’llanilishi mumkin bo;lmagan holat:</h4>
                            <p>
                                Preparatning komponentlariga yuqori sezuvchanlik, fruktozani o‘zlashtiraolmaslik (preparat sorbitol saqlaydi, metabolizm vaqtida fruktoza hosil qiluvchi shirin qiluvchi modda). Balg‘am ko‘chiruvchi vositalarni bir vaqtda qabul qilish nomuvofiq hisoblanadi
                            </p>
                        </div>
                        <div>
                            <h4>Kategoriyasi </h4>
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
export default Sinekod