import twitter from "../../assets/imgs/twitter.svg";
import instagram from "../../assets/imgs/instagram.svg";
import facebook from "../../assets/imgs/facebook.svg";
import logo from "../../assets/imgs/logo.png";

/**
 * Footer component - links are not functional
 */
export const Footer = () => {
    return (
        <footer>
            <div className="margin-y padding-x">
                <div className="flex space-between">
                    <div className="flex space-between gap-1 ">
                        <img src={logo} className="App-logo" alt="logo" />
                        <img
                            src={twitter}
                            className="social__btn"
                            alt="twitter"
                        />
                        <img
                            src={instagram}
                            className="social__btn"
                            alt="instagram"
                        />
                        <img
                            src={facebook}
                            className="social__btn"
                            alt="facebook"
                        />
                    </div>
                    <div className="white-links flex gap-1">
                        {" "}
                        Original page
                        <a href="https://top10.netflix.com/">
                            https://top10.netflix.com/
                        </a>{" "}
                    </div>
                </div>
                <br />
                <br />
                <div className="text-center">© 2023 NETFLIX</div>
            </div>
        </footer>
    );
};
