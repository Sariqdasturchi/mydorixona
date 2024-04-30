import './login.css';

const Login = () => {
    return (
        <main>
            <section class="section_home">
                <div class="container">
                    <div class="mobile_cont">
                        <div class="navBar"></div>
                        <div class="homeBar">
                            <div class="homeBar_logo">
                                <div class="homeBar_img"></div>
                                <div class="homeBar_text">
                                    <h1>Mening  Dorixonam</h1>
                                </div>
                            </div>
                            <div class="homeBar_btns">
                                <a class="login" href={`/home`} >Kirish</a>
                                <select name="leng" id="leng">
                                    <option value="Uz">O'zbekcha</option>
                                    <option value="Ru">Русский</option>
                                    <option value="Eng">Inglizcha</option>
                                </select>
                            </div>
                        </div>
                        <div class="footerBar"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login;