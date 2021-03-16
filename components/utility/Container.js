import React from 'react'
import styled from "styled-components"

const StyledContainer = styled.section`
width: 100vw;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
` 

const Container = ({children}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}


export default Container
