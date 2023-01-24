import topImg from "../../assets/imgs/top10.png";
import arrow from "../../assets/imgs/down-arrow.png";
import Slider from "../../components/Slider/Slider";

const films = [
    {
        id: "N0001",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "1.jpg",
    },
    {
        id: "N0002",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "2.jpg",
    },
    {
        id: "N0003",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "3.jpg",
    },
    {
        id: "N0004",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "4.jpg",
    },
    {
        id: "N0005",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "5.jpg",
    },
    {
        id: "N0006",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "6.jpg",
    },
    {
        id: "N0007",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "7.jpg",
    },
    {
        id: "N0008",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "8.jpg",
    },
    {
        id: "N0009",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "9.jpg",
    },
    {
        id: "N0010",
        title: "The Pale Blue Eye",
        hours: "39.86 million",
        img: "10.jpg",
    },
];

export default function TopFilms() {
    return (
        <div className="container">
            <div className="flex gap-5 top__select align-center">
                <img src={topImg} alt="" className="small-img" />
                <div className="dropdown flex align-center gap-5">
                    <div>Films (English)</div>
                    <img src={arrow} alt="" className="arrow-img" />
                </div>
            </div>
            <p className="info-txt">
                Some titles may not be available in all regions. Some
                territories are included in the countries list for convenience.
            </p>
            <Slider films={films} />

            <p className="info-txt">
                Some titles may not be available in all regions. Some
                territories are included in the countries list for convenience.
            </p>
        </div>
    );
}
