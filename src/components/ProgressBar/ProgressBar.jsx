/**
 * renders a progress bar, width is set by dividing the amount of hours by the highest number
 */
export const ProgressBar = ({ progress, total }) => {
    return (
        <div className="progress__container">
            <div
                className="progress__bar"
                style={{ width: (progress / total) * 100 + "%" }}
            ></div>
        </div>
    );
};
