import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 22%;
    height: 22rem;
    margion: 1%;
    background: lightgrey;
    border: 0.2rem solid black;
    border-radius: 0.5rem;
    color: white;

    h1 {
        font-size: 1.6rem;
        padding: 1%;
        font-family: "Turret Road", cursive;
        -web-kit-text-stroke: 1px black;
        span {
            color: Crimson;
        }
    }

    h2 {
        font-size: 1.2rem;
        padding: 1%;
        font-family: "Turret Road", cursive;
        -web-kit-text-stroke: 1px black;
        span {
            color: Crimson;
        }
        .height {
            color: Crimson;
        }
        .hair_Color {
            color: Crimson;
        }
    }

    h3 {
        padding-left: 1%;
        font-size: 1.2rem;
        color: white;
        font-family: "Turret Road", cursive;
        -web-kit-text-stroke: 1px black;
    }
    .birth_Year {
        color: Crimson;
        -web-kit-text-stroke: 1px black;
    }
`;

export function Character(props) {
    return (
        <Card>
            <h1>
                <span>Name: </span> {props.character.name}
            </h1>
            <h3>
                <span className = 'birth_Year'>Date of Birth: </span> {props.character.birth_year}
            </h3>
            <h2>
                <span>Gender: </span> {props.character.gender}
            </h2>
            <h2>
                <span className = 'height'>Height: </span> {props.character.height}
            </h2>
            <h2>
                <span className = 'hair_Color'>Hair Color: </span> {props.character.hair_color}
            </h2>
        </Card>
    );
}