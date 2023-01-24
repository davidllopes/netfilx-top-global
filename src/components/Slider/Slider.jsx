import { useState } from "react";
import "./Slider.css";

export default function Slider({ films }) {
    const [selected, setSelected] = useState(1);

    return (
        <div className="relative slider__section">
            <ul className="slider__container flex">
                {films
                    ? films.map((item, i) => {
                          return (
                              <button
                                  key={item.id}
                                  className={`slider__item flex-1 relative ${
                                      selected === i + 1 ? "selected" : ""
                                  }`}
                                  style={{ zIndex: films.length - i }}
                                  onClick={() => {
                                      setSelected(i + 1);
                                  }}
                              >
                                  <div className="relative wh-full">
                                      <div className="slider__item__info relative">
                                          <img
                                              src={`/assets/imgs/slider/${
                                                  i + 1
                                              }.png`}
                                              alt=""
                                              className="img-responsive"
                                          />
                                          <div className="slider__item__info__txt">
                                              <p>
                                                  Watched for{" "}
                                                  <strong>{item.hours}</strong>{" "}
                                                  hours this week
                                              </p>
                                              <p>
                                                  <a
                                                      href="#watch"
                                                      className="btn-link"
                                                  >
                                                      Watch now
                                                  </a>
                                              </p>
                                          </div>
                                      </div>
                                      <div className="slider__item__img ">
                                          <img
                                              src={`/assets/imgs/slider/${item.img}`}
                                              alt=""
                                              className="img-responsive"
                                          />
                                          <div className="slider__item__title">
                                              {item.title}
                                          </div>
                                      </div>
                                  </div>
                              </button>
                          );
                      })
                    : null}
            </ul>
        </div>
    );
}
