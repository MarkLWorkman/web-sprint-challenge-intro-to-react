import React from 'react';
import CharacterCont from './components/CharacterCont';
import styled from 'styled-components';
import './App.css';

const Title = styled.h1`
font-size: 4rem;
font-family: 'Turret Road', cursive;
color: Crimson;
-webkit-text-stroke; 1px black;
`;

export default function App() {
  return (
    <div className = 'App'>
      <Title className = 'Header'>Star Wars Characters</Title>
      <CharacterCont />
    </div>
  );
}