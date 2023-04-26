import style from "./Header.module.css";
import logo from "../img/logo.jpg";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


function Header() {
    return (
        <div>
            <header>
                <img src={logo} alt="Logo" title="LogoPhytoterapica" className={style.logo} />

                <div className={style.container}>
                    <input className={style.headerInput} type="text" autoComplete="off" name="search" id="searchBox" placeholder="O que você procura?" />

                    <div className={style.discount}>
                        <p className={style.headerP}> - 20% na sua 1° compra</p>
                        
                    </div>

                    <h2 className={style.headerH2}><FaUser /></h2>
                    <h2 className={style.headerH2}><FaShoppingCart /></h2>
                </div>
            </header>
        </div>
    )
}

export default Header;