import "./category.css";

import kalavat from "./img/kalavat.png";
import house from "./img/House.png";
import kalavat1 from "./img/kalavat2.png"
import kalavat2 from "./img/kalavat3.png"
import kalavat3 from "./img/kalavat4.png";
import star from "./img/Star.png";


function Category(){
    return (
      <div className="contiener">
        <div className="cards">
          <div className="card1">
            <p>Беседки</p>
            <div className="q12">
              <p>Подкатегория 1</p>
              <p>Подкатегория 1</p>
              <p>Подкатегория 1</p>
            </div>
            <img src={kalavat} alt="logo" />
          </div>

          <div className="qwer">
            <div className="card1_1">
              <div className="qwe">
                <p className="p">Бани</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
              </div>
              <img src={kalavat1} />
            </div>

            <div className="card1_1">
              <div className="qwe">
                <p className="p">Бани</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
              </div>
              <img src={kalavat2} />
            </div>

            <div className="card1_1">
              <div className="qwe">
                <p className="p">Бани</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
              </div>
              <img src={star} />
            </div>
          </div>

          <div className="qweasd">
            <div className="card1_2">
              <div className="qwe">
                <p className="p">Бани</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
              </div>
              <img src={house} />
            </div>

            <div className="card1_2">
              <div className="qwe">
                <p className="p">Бани</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
                <p className="q">Подкатегория 1</p>
              </div>
              <img src={kalavat3} />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Category