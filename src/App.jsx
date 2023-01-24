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
        </div>
    );
}

export default App;
