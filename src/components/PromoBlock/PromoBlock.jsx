import React from "react";
import "./PromoBlock.css";
import { FiPlay } from "react-icons/fi";
import durov from "../../assets/durov.jpg";

const PromoBlock = () => {
  return (
    <section className="promo">
      <div className="promo-text">
        <h1>
          О НАС <br />
          <span>GiftsRo</span>
        </h1>
        <p>
          GiftsRo — Лучший Канал Ежедневных Раздач! Ищете уголок позитива и
          щедрости в сети? Откройте для себя GiftsRo — Здесь каждый
          день — это шанс на ценный приз благодаря регулярным и честным
          раздачам! GiftsRo — это больше, чем просто канал. Это сообщество,
          созданное с душой. Его владелец известен своей исключительной добротой
          и стремлением радовать подписчиков. Атмосферу тепла поддерживает и Чат
          Общения, где каждому рады и царит атмосфера дружелюбия. Это оазис
          позитива, где можно найти друзей и стать частью активного сообщества.
          GiftsRo доказывает: щедрость и человеческое тепло — главные тренды.
          Если вы хотите, чтобы фортуна чаще улыбалась, вам пора присоединиться!
        </p>
        <button className="btn-buy">присоединиться</button>
      </div>

      <div className="promo-product">
        <div className="circle">
          <img src={durov} alt="GiftsRo" />
        </div>
        <div className="price">@GiftsRo</div>

        <div className="play-video">
          <div className="play-icon">
            <FiPlay />
          </div>
          <span>Подписаться</span>
        </div>
      </div>
    </section>
  );
};

export default PromoBlock;
