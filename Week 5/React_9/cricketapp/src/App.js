import React from "react";

import ListofPlayers from "./components/ListofPlayers";
import Scorebelow70 from "./components/ScoreBelow70";
import OddPlayers from "./components/OddPlayers";
import EvenPlayers from "./components/EvenPlayers";
import ListofIndianPlayers from "./components/ListofIndianPlayers";

function App() {

    var flag = true;

    const IndianTeam = [
        "Sachin",
        "Dhoni",
        "Virat",
        "Rohit",
        "Raina",
        "Jadeja"
    ];

    if (flag === false) {

        return (
            <div>
                <ListofPlayers />
                <Scorebelow70 />
            </div>
        );

    } else {

        return (
            <div>
                <OddPlayers team={IndianTeam} />
                <EvenPlayers team={IndianTeam} />
                <ListofIndianPlayers />
            </div>
        );

    }

}

export default App;