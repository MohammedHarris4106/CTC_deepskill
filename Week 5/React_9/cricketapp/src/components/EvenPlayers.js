import React from "react";

function EvenPlayers(props) {

    const [, second, , fourth, , sixth] = props.team;

    return (
        <div>

            <h2>Even Team Players</h2>

            <ul>
                <li>{second}</li>
                <li>{fourth}</li>
                <li>{sixth}</li>
            </ul>

        </div>
    );
}

export default EvenPlayers;