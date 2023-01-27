import { ProgressBar } from "../ProgressBar/ProgressBar";
import arrowLeft from "../../assets/imgs/left-arrow.png";
import arrowRight from "../../assets/imgs/right-arrow.png";
import "./Ranking.css";

/**
 *  Ranking table section
 */
export const Ranking = ({ films }) => {
    return (
        <div className="container container--lg shaded-card">
            <div className="rank-week margin-y-sm">
                {/* Current week displayed - arrows not currently functional */}
                <img src={arrowLeft} alt="" className="arrow-img" />
                JANUARY 9 - JANUARY 15, 2023
                <img src={arrowRight} alt="" className="arrow-img" />
            </div>
            <table className="rank__table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Films (English)</th>
                        <th>WEEKS IN TOP 10</th>
                        <th>HOURS VIEWED</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Loops through films object and returns row with information */}
                    {films.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.weekly_rank}</td>
                                <td>{item.show_title}</td>
                                <td>
                                    {/* Displays week ticks */}
                                    <WeekCounter>
                                        {item.cumulative_weeks_in_top_10}
                                    </WeekCounter>
                                </td>
                                <td className="flex gap-1 align-center justify-right">
                                    {/* Formats million hours string */}
                                    {item.weekly_hours_viewed.toLocaleString(
                                        "en-GB"
                                    )}{" "}
                                    <ProgressBar
                                        progress={item.weekly_hours_viewed}
                                        total={films[0].weekly_hours_viewed}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* decorative link only */}
            <div className="margin-y-sm">
                <a href="#download" className="white-links">
                    Download shareable images
                </a>{" "}
                <div className="xs-img inline-block">
                    <svg viewBox="0 0 24 24" data-name="IconDownload">
                        <path
                            fillOpacity=".9"
                            fillRule="evenodd"
                            fill="#dedede"
                            d="M13 15V2h-2v13l-3.2-2.4-1.2 1.6 5.4 4.05 5.4-4.05-1.2-1.6L13 15zM2 20h20v2H2v-2z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

/**
 * Represents the week numbers in red ticks
 * ticks are generated from number (children prop)
 */
const WeekCounter = ({ children }) => {
    const items = [];
    for (let i = 0; i < children; i++) {
        items.push(<div key={i} className="red-tick"></div>);
    }
    return (
        <div className="flex gap-1" style={{ maxWidth: "60%", margin: "auto" }}>
            {children} <em>{items}</em>
        </div>
    );
};
