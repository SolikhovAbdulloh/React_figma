import "./header.css";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import { CiMenuBurger } from "react-icons/ci";
function Header() {
  return (
    <div className="contiener">
      <div className="q1">
        <a className="aa">{<CiMenuBurger />}Каталог товаров</a>
        <a>О компании</a>
        <a>Отзывы</a>
        <a>Наши работы</a>
        <a>Доставка</a>
        <a>Контакты</a>
      </div>
      <div className="Show_case">
        <div>
          <h1>
            Беседки под ключ <br /> за 7 дней
          </h1>
          <div className="nation">
            <p>Выгода до 24%</p>
            <p>Сборка за 1 день</p>
          </div>
        </div>
      </div>

      <div className="p_case">
        <div className="case">
          <img src={icon1} />
          <h1>
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </h1>
        </div>

        <div className="case">
          <img src={icon2} />
          <h1>
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </h1>
        </div>

        <div className="case">
          <img src={icon3} />
          <h1>
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </h1>
        </div>

        <div className="case">
          <img src={icon1} />
          <h1>
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </h1>
        </div>

        <div className="case">
          <img src={icon2} />
          <h1>
            Изготовливаем конструкции <br /> по вашему дизайн-проекту
          </h1>
        </div>
      </div>
      <h1 className="a2">Категории</h1>
    </div>
  );
}

export default Header;
