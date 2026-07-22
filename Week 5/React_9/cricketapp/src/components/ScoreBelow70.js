import React from "react";

function ScoreBelow70() {

    const players = [
        { name: "Jack", score: 50 },
        { name: "Michael", score: 70 },
        { name: "John", score: 40 },
        { name: "Ann", score: 61 },
        { name: "Elisabeth", score: 61 },
        { name: "Sachin", score: 95 },
        { name: "Dhoni", score: 100 },
        { name: "Virat", score: 84 },
        { name: "Jadeja", score: 64 },
        { name: "Raina", score: 75 },
        { name: "Rohit", score: 80 }
    ];

    let players70 = [];

    players.map((item) => {
        if (item.score <= 70) {
            players70.push(item);
        }
        return null;
    });

    return (
        <div>

            <h2>List of Players having Scores Less than 70</h2>

            <ul>

                {
                    players70.map((item, index) => (
                        <li key={index}>
                            Mr. {item.name} <span>{item.score}</span>
                        </li>
                    ))
                }

            </ul>

        </div>
    );
}

export default ScoreBelow70;