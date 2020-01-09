import React from "react";
import WeatherForWeek from "./WeatherForWeek";
import WeatherToday from "./WeatherToday";
import WeatherNow from "./WeatherNow";
import { Spinner } from "../style/spinnerStyle";
import { ContentContainer, BackgroundContainer } from "../style/contentStyle";

const now = "now";
const today = "today";
const fiveDays = "5 days";

export default function Content({ result, cityName, searchMode }) {
    const modeToShow = {
        [now]: () => <WeatherNow result={result} cityName={cityName} />,
        [today]: () => <WeatherToday result={result} cityName={cityName} />,
        [fiveDays]: () => <WeatherForWeek result={result} cityName={cityName} />
    };

    return (
        <ContentContainer>
            <BackgroundContainer>
                {
                    cityName ? (
                        result ? modeToShow[searchMode.toLowerCase()]()
                            : <Spinner />
                    ) : null
                }
            </BackgroundContainer>
        </ContentContainer>
    );
}
