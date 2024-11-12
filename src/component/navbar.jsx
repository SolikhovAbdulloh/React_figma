import "./navbar.css";
import logo from "./img/logo.png"
import { IoLocation } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Navbar() {
  return (
    <div className="contiener ">
      <div className="navbar_menu">
        <div className="b1">
          <div className="a1">
            <IoLocation />
            <p>Ваш город: Константинополь</p>
          </div>
          <div className="a1">
            <IoLocation />
            <p>Наш офис: Москва, ул. Новокосимская д.7</p>
          </div>
        </div>
        <div>
          <ul>
            <li className="li">
              <a href="#">Статьи</a>
              <a href="#">Оплата</a>
              <a href="#">Гарантия</a>
              <a href="#">Дилерам</a>
              <a href="#">Вакансии</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="menu_2">
        <div className="w1">
          <a href="#">Лучшие цены</a>
          <a href="#">Бесплатная доставка</a>
          <a href="#">Гарантия от 3х лет</a>
          <a href="#">Более 1 000 товаров</a>
        </div>
        <div className="menu_3">
          <a href="#">
            <FaClock />
            Ежедневно с 9:00 до 21:00
          </a>
          <a href="#">
            <MdEmail />
            youremail@mailbox.ru
          </a>
        </div>
      </div>

      <div className="logotip_menu">
        <a  href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="fff">
          <input placeholder="Поиск по каталогу..." />
          <button className="btn">Найти</button>
        </div>
        <span>
          <p>8 (800) 800-00-00</p>
          <p>8 (455) 700-00-00</p>
        </span>
        <button>Заказать звонок</button>
      </div>
    </div>
  );
}

export default Navbar;
