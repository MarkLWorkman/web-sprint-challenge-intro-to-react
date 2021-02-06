import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Character } from './Character';

const CardWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 1%;
    `;

    export default function CharacterCont() {
        const [state, setState] = useState([]);
    
        useEffect(() => {
            axios.get('https://swapi.dev/api/people/')
            .then((res) => {
                console.log('response: ', res.data);
                setState(res.data);
            })
            .catch((err) => {
                console.log('error: ', err);
            });
        }, []);
    
        return (
            <CardWrapper>
                {state.map((character, id) => {
                    return <Character key = {id} character = {character} />;
                })}
            </CardWrapper>
        );
    }