import React from "react";
import "./Admins.css";

import Krestov from "../../assets/Krestov.jpg";
import Kostya from "../../assets/Костя.jpg";
import A from "../../assets/A.jpg";
import WsoW from "../../assets/wsoW.jpg";
import Anna from "../../assets/Anna.jpg";
import Sword from "../../assets/sword.jpg";
import Moder from "../../assets/moder.jpg";
import Laziness from "../../assets/laziness.jpg";
import Dilshod from "../../assets/Dilshod.jpg";
import Mrkt from "../../assets/mrkt.jpg";
import Flateek from "../../assets/flateek.jpg";
import Stiv from "../../assets/Stiv.jpg";

const admins = [
  { id: 1, name: "Krestov @GiftsRo", role: "модератор", projects: "Бог терпел и нам велел", img: Krestov },
  { id: 2, name: "Костя", role: "модератор", projects: "-", img: Kostya },
  { id: 3, name: "А❤️", role: "модератор", projects: "-", img: A },
  { id: 4, name: "wsoW | @GiftsRo", role: "модератор", projects: "-", img: WsoW },
  { id: 5, name: "🐆Anna🐆 @GiftsRo", role: "модераторг", projects: "-", img: Anna },
  { id: 6, name: "Sword @GiftsRo", role: "модератор", projects: "Я бобри", img: Sword },
  { id: 7, name: "双黑🐍", role: "модератор", projects: "Отхуяюрю всех", img: Moder },
  { id: 8, name: "laziness", role: "модератор", projects: "-", img: Laziness },
  { id: 9, name: "Dilshod", role: "модератор", projects: "Я не плыву по течению. Я и есть течение", img: Dilshod },
  { id: 10, name: "QXQ(мркт гений) | @GiftsRo", role: "модератор", projects: "-", img: Mrkt },
  { id: 11, name: "flateek", role: "модератор", projects: "Не важно где ты , важно с кем ты", img: Flateek },
  { id: 12, name: "Стив Мэдден", role: "модератор", projects: "-", img: Stiv },
];
const Admins = () => {
  return (
    <section className="admins">
      <h2>Наши замечательные админы</h2>
      <div className="admins-grid">
        {admins.map(admin => (
          <div className="admin-card" key={admin.id}>
            <img src={admin.img} alt="" className="admin-img" />
            <h3>{admin.name}</h3>
            <p className="role">{admin.role}</p>
            <p className="projects">Цитата: {admin.projects}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Admins;
