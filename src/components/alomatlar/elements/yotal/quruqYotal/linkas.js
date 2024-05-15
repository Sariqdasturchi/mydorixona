import { FaCalendarDays } from "react-icons/fa6";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaFileLines } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import logo from '../../../../imgs/logo.png';
import '../../../alomat.css';
import '../../../../home/home.css';
import '../../elementStyle/elements.css'


const Linkas = () => {
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
                    <h3 className="alomatText">Linkas </h3>
                    <div className="blockCont">
                        <div>
                            <h4>Farmakologik guruhi:</h4>
                            <p>LOR a’zolari kasalliklarini davolash uchun vosita.undefined</p>
                        </div>
                        <div>
                            <h4>Tarkibi:</h4>
                            <p>
                                Har bir pastilka quyidagi ekstraktlarni saqlaydi: faol moddalar: 30.0 mg tomirli Adxatoda, 7.0 mg Yalang‘och chuchukmiya, 6.0 mg Uzun qalampir, 2.0 mg Xushbo‘y binafsha, 3.0 mg Dorivor issop, 3.0 mg Katta kalgan.
                                yordamchi moddalar: yalpiz ta’mli: mentol, qand, suyuq glyukoza, evkalipt moyi, yalpiz moyi, talk qattiq parafin, asalarining sariq mumi, lanolin, oq yumshoq parafin, suyuq parafin.
                            </p>
                        </div>
                        <div>
                            <h4>Qo’llanilishi</h4>
                            <p>
                                Yo‘tal va tomoqdagi og‘riq bilan birga kechuvchi nafas yo‘llarining kasalliklarida simptomatik davolash vositasi sifatida qo‘llanadi.
                            </p>
                        </div>
                        <div>
                            <h4>Maxsus ko’rsatmalar</h4>
                            <p>
                                Pastilkalar saxaroza saqlaydi, qandli diabeti bo‘lgan bemorlar, shuningdek gipokaloriyali parhezda buni hisobga olish kerak.
                                Preparat bolalar ololmaydigan joyda saqlansin va yaroqlilik muddati o‘tgach ishlatilmasin.undefined.
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
export default Linkas