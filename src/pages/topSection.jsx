import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../images/background.jpg'

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${backgroundImg});
`;

export function TopSection(props){
    return (
        <TopContainer>
            Boom
        </TopContainer>
    )
}