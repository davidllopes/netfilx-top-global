import topImg from "../../assets/imgs/top10.png";
import arrow from "../../assets/imgs/down-arrow.png";
import { Slider } from "../../components/Slider/Slider";
import { Ranking } from "../../components/Ranking/Ranking";

// info from https://top10.netflix.com/data/all-weeks-global.tsv - week 2023-01-15
const films = [
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "1",
        show_title: "The Pale Blue Eye",
        season_title: "N/A",
        weekly_hours_viewed: 39860000,
        cumulative_weeks_in_top_10: "2",
    },
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "2",
        show_title: "The Hatchet Wielding Hitchhiker",
        season_title: "N/A",
        weekly_hours_viewed: 21270000,
        cumulative_weeks_in_top_10: "1",
    },
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "3",
        show_title: "Glass Onion: A Knives Out Mystery",
        season_title: "N/A",
        weekly_hours_viewed: 19480000,
        cumulative_weeks_in_top_10: "4",
    },
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "4",
        show_title: "Dog Gone",
        season_title: "N/A",
        weekly_hours_viewed: 18880000,
        cumulative_weeks_in_top_10: "1",
    },
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "5",
        show_title: "Sing",
        season_title: "N/A",
        weekly_hours_viewed: 10400000,
        cumulative_weeks_in_top_10: "6",
    },
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "6",
        show_title: "Roald Dahl's Matilda The Musical",
        season_title: "N/A",
        weekly_hours_viewed: 8310000,
        cumulative_weeks_in_top_10: "3",
    },
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "7",
        show_title: "Jumanji: The Next Level",
        season_title: "N/A",
        weekly_hours_viewed: 6360000,
        cumulative_weeks_in_top_10: "3",
    },
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "8",
        show_title: "Transformers: Dark of the Moon",
        season_title: "N/A",
        weekly_hours_viewed: 5630000,
        cumulative_weeks_in_top_10: "1",
    },
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "9",
        show_title: "Colombiana",
        season_title: "N/A",
        weekly_hours_viewed: 4860000,
        cumulative_weeks_in_top_10: "1",
    },
    {
        week: "2023-01-15",
        category: "Films (English)",
        weekly_rank: "10",
        show_title: "Daddy Day Care",
        season_title: "N/A",
        weekly_hours_viewed: 4850000,
        cumulative_weeks_in_top_10: "1",
    },
];

/**
 * Container Component for the Slider and Ranking table
 * Dropdown box is decorative only
 */
export default function TopFilms() {
    return (
        <div className="container">
            <div className="flex gap-1 top__select align-center">
                <img src={topImg} alt="" className="small-img" />
                <div className="dropdown flex align-center gap-1">
                    <div>Films (English)</div>
                    <img src={arrow} alt="" className="arrow-img" />
                </div>
            </div>
            <p className="info-txt">
                Some titles may not be available in all regions. Some
                territories are included in the countries list for convenience.
            </p>
            <Slider films={films} />
            <Ranking films={films} />
        </div>
    );
}
