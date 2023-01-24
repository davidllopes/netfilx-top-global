import "./App.css";
import Header from "./parts/Header/Header";
import Hero from "./parts/Hero/Hero";
import TopFilms from "./parts/TopFilms/TopFilms";

function App() {
    return (
        <div className="App">
            <Header />
            <main className="top-background">
                <Hero />
            </main>

            <section className="section1 nflx-bg-1">
                <TopFilms />
            </section>

            <section className="section2 nflx-bg-2">
                <br />
                <h3>
                    Titles in the Global Top 10 from January 9 - January 15,
                    2023 were also popular in countries around the world:
                </h3>
                <br />
                <br />
            </section>
        </div>
    );
}

export default App;
