import React from "react";

function OddPlayers(props) {

    const [first, , third, , fifth] = props.team;

    return (
        <div>

            <h2>Odd Team Players</h2>

            <ul>
                <li>{first}</li>
                <li>{third}</li>
                <li>{fifth}</li>
            </ul>

        </div>
    );
}

export default OddPlayers;