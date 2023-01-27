import "./App.css";
import { Footer } from "./parts/Footer/Footer";
import Header from "./parts/Header/Header";
import Hero from "./parts/Hero/Hero";
import { Methodology } from "./parts/Methodology/Methodology";
import TopFilms from "./parts/TopFilms/TopFilms";

/**
 * App structure: Header, Hero, Top Films Section and ranking, Methodology section, Footer
 * I haven't included all sections as it would be too time-consuming
 * Original page: https://top10.netflix.com/
 */
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

            <Methodology />
            <Footer />
        </div>
    );
}

export default App;
