import { useState } from "react";
import "./Slider.css";

/**
 * Slider component - custom built, based on Netflix's design - https://top10.netflix.com/
 *
 */

export const Slider = ({ films }) => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="relative slider__section">
            <ul className="slider__container flex">
                {
                    /*if "films" object exists, loop through and return a slider item*/
                    films
                        ? films.map((item, i) => {
                              return (
                                  <SliderItem
                                      i={i}
                                      item={item}
                                      total={films.length}
                                      selected={selected}
                                      setSelected={setSelected}
                                  />
                              );
                          })
                        : null
                }
            </ul>
        </div>
    );
};

/**
 *
 */
const SliderItem = ({ i, item, total, selected, setSelected }) => {
    // return button element
    // onClick set selected item using setSelected callback
    return (
        <button
            key={item.show_title}
            className={`slider__item flex-1 relative ${
                selected === i + 1 ? "selected" : ""
            }`}
            style={{ zIndex: total - i }}
            onClick={() => {
                setSelected(i + 1);
            }}
        >
            {/* rank # displayed on top right corner */}
            <div className="slider__item__corner-number">{i + 1}</div>
            <div className="relative wh-full">
                <div className="slider__item__info relative">
                    {/* large number displayed when open */}
                    <img
                        src={`/assets/imgs/slider/${i + 1}.png`}
                        alt=""
                        className="img-responsive"
                    />
                    {/* film stats - hours watched, etc. */}
                    <div className="slider__item__info__txt">
                        <p>
                            Watched for{" "}
                            <strong>
                                {
                                    // convert hours viewed to X.XX millions
                                    (
                                        item.weekly_hours_viewed / 1000000
                                    ).toFixed(2)
                                }{" "}
                                million
                            </strong>{" "}
                            hours this week
                        </p>
                        <p>
                            <a href="#watch" className="btn-link">
                                Watch now
                            </a>
                        </p>
                    </div>
                </div>
                {/* film poster image with title */}
                <div className="slider__item__img">
                    <img
                        src={`/assets/imgs/slider/${i + 1}.jpg`}
                        alt=""
                        className="img-responsive"
                    />
                    {/* display title text on hover */}
                    <div className="slider__item__title">{item.show_title}</div>
                </div>
            </div>
        </button>
    );
};
