/**
 * Methodology section - information on how data is ranked
 */
export const Methodology = () => {
    return (
        <div className="container max-w-prose text-left regular">
            <br />
            <br />
            <h2 className="">Methodology</h2>
            Every Tuesday, we publish four global Top 10 lists for films and TV:
            Film (English), TV (English), Film (Non-English), and TV
            (Non-English). These lists rank titles based on weekly{" "}
            <b>hours viewed</b>: the total number of hours that our members
            around the world watched each title from Monday to Sunday of the
            previous week.
            <br />
            <br />
            We consider each season of a series and each film on their own, so
            you might see both Stranger Things seasons 2 and 3 in the Top 10.
            Because titles sometimes move in and out of the Top 10, we also show
            the total number of weeks that a season of a series or film has
            spent on the list.
            <br />
            <br />
            To give you a sense of what people are watching around the world, we
            also publish Top 10 lists for nearly 100 countries and territories
            (the same locations where there are Top 10 rows on Netflix). Country
            lists are also ranked based on hours viewed, but don’t show
            country-level viewing directly.
            <br />
            <br />
            Finally, we provide a list of the Top 10 most popular Netflix films
            and TV overall (branded Netflix in any country) in each of the four
            categories based on the hours that each title was viewed during its
            first 28 days. Since some titles have multiple premiere dates,
            whether weekly or in parts, we count the 28 days from each episode
            premiere date in each country. This means that for Money Heist: Part
            5, the total number of hours represents 28 days from the premiere of
            episodes 1-5 plus 28 days from the premiere of episodes 6-10. For
            titles that are Netflix branded in some countries but not others, we
            still include all of the hours viewed. <br />
            <br />
            All of the weekly lists and weeks in the Top 10 on the site start
            from June 28, 2021.
            <br />
            <br />
            Weekly reporting is rounded to 10,000 to account for any
            fluctuations in internet connectivity around the world.
            <br />
            <br />
            We engaged EY – an independent accounting firm – to review the
            weekly lists from July 6, 2021 to January 4, 2022. See report{" "}
            <a
                href="/EY_Report_and_Management_Assertion-Viewership_Metric_Reporting.pdf"
                id="ey_link"
            >
                here
            </a>
            .
        </div>
    );
};
