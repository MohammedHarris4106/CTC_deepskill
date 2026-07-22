import React from "react";

function ListofIndianPlayers() {

    const T20Players = [
        "First Player",
        "Second Player",
        "Third Player"
    ];

    const RanjiTrophyPlayers = [
        "Fourth Player",
        "Fifth Player",
        "Sixth Player"
    ];

    const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

    return (

        <div>

            <h2>Merged Indian Players</h2>

            <ul>

                {
                    IndianPlayers.map((item, index) => (
                        <li key={index}>
                            Mr. {item}
                        </li>
                    ))
                }

            </ul>

        </div>

    );
}

export default ListofIndianPlayers;