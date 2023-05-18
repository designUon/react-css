import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color : skyblue;
    background-color: aliceblue;
`;

// const StyledButton 이라는 이름으로
// a태그에 color값, background-color값을 이용하여 작성
const StyleButton = styled.a`
    color : salmon;
    background-color: antiquewhite;
`


export default function StyleComp(props) {
    return (
        <div>
            <Title>
                {props.children}
            </Title>
        </div>
    )
}
