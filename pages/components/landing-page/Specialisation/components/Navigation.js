import React from 'react'
import styled from "styled-components"

import ImageContainer from "./ImageContainer"

const Container = styled.div`
width: 50%;
height: 100%
display: flex;
flex-direction: column;
`;

const Heading = styled.h1`
font-size: 1.5rem;
`;

const Navigation = () => {
    return (
        <Container>
            <ImageContainer/>
        </Container>
    )
}

export default Navigation
