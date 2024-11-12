import "./footer.css";
import logo from "./img/logo.png";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

let Footer = () => {
  return (
    <div className="conti">
      <div className="contiener">
        <div className="logotip_menu">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <div className="ff1f">
            <p>Наш адрес: Москва</p>
            <p>ул. Новокосимская д.7</p>
          </div>
          <span>
            <p>8 (800) 800-00-00</p>
            <p>8 (455) 700-00-00</p>
          </span>
          <button>Заказать звонок</button>
        </div>

        <div className="footer_menu">
          <div className="menu_footer">
            <p>Для покупателей:</p>
            <a href="#"> Доставка</a>
            <a href="#"> Гарантия </a>
            <a href="#"> Политика конфиденциальности</a>
            <a href="#"> Отзывы</a>
            <a href="#">Наши работы</a>
          </div>

          <div className="menu_footer">
            <p>О компании:</p>
            <a href="#"> О Нас</a>
            <a href="#">Доставка и оплата</a>
            <a href="#">Наши работы</a>
            <a href="#"> Отзывы</a>
            <a href="#">Наши работы</a>
          </div>

          <div className="menu_footer">
            <p>Категории:</p>
            <a href="#"> Доставка</a>
            <a href="#"> Площадки</a>
            <a href="#"> Политика конфиденциальности</a>
            <a href="#"> Отзывы</a>
            <a href="#">Беседки</a>
            <a href="#">Бани</a>
          </div>

          <div className="boow">
            <p>
              Для регионов(звонок бесплатный) <br />{" "}
              <span className="num">8 (800) 800-00-00</span>
            </p>
            <p>Email: youremail@mailbox.ru</p>
            <p>Мы в соц.сетях:</p>
            <span className="brow">
              <FaTelegram />
              <FaInstagramSquare />
              <FaYoutube />
            </span>
          </div>

          <div className="boow">
            <p>
              Для регионов(звонок бесплатный) <br />{" "}
              <span className="num">8 (450) 700-00-00</span>
            </p>
            <p>Email: youremail@mailbox.ru</p>
            <p>Мы в соц.сетях:</p>
            <p>ООО "Фаза Групп" <br />ИНН: 7751140879 <br /> ОГРН: 1187746273461</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
