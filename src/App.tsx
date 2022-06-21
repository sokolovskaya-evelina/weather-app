import React from 'react';
import './App.scss';
import Hearer from "./components/Hearer";
import CurrentPlaceWeatherCard from "./components/CurrentPlaceWeatherCard";
import WeatherCards from "./components/WeatherCards";
import AddCardButton from "./components/AddCardButton";

function App() {

    return (
        <div className="app">
            <div className="wrapper">
                <Hearer/>
                <CurrentPlaceWeatherCard/>
                <WeatherCards/>
                <AddCardButton/>
            </div>
        </div>
    );
}

export default App;
