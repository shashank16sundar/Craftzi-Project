import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
    background-color: #A5F1E9;
    color: #2B3A55;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Announcement() {
  return (
    <Container>It's That Season Again! Crazy Sales! Grab Your Products Right Now!</Container>
  )
}

export default Announcement;