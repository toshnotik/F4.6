import {Link} from "react-router-dom";
import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <nav>
            <Link to='/'>Главная страница </Link>
            <Link to='/сategoryList'>Список категорий</Link>
        </nav>

    );
}

export default Footer;


