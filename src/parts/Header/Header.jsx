import logo from "../../assets/imgs/logo.png";

/**
 * Top header - search bar is decorative only
 */
export default function Header() {
    return (
        <header className="App-header text-white flex absolute">
            <div className="flex align-center space-between gap-1">
                <img src={logo} className="App-logo" alt="logo" />
                <div>TOP 10</div>
                <div>
                    Search{" "}
                    <svg
                        viewBox="0 0 24 24"
                        height="16"
                        fill="white"
                        className="inline-block ml-1 "
                    >
                        <path
                            fillRule="evenodd"
                            d="M11 17a6 6 0 100-12 6 6 0 000 12zm-6.56.162a8.975 8.975 0 005.898 2.814 8.974 8.974 0 005.877-1.64l3.724 3.725.354-.354 1.414-1.414.354-.354-3.725-3.724a8.974 8.974 0 001.64-5.877A9 9 0 0011 2a9 9 0 00-6.56 15.162z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </div>
            <nav className="flex align-center space-between gap-1">
                <div>English • Español</div> <div>About</div>
            </nav>
        </header>
    );
}
