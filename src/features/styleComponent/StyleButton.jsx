import React from 'react'
import { styled } from 'styled-components'

// 스타일드컴포넌트를 통해서 버튼 생성
const Button = styled.a`
    /* color: coral; */
    color: ${props => props.color};
    /* background-color: ${props => props.backgroundColor} */
    background-color: ${props => props.bgcolor};
    font-size : ${props=>props.fontsize}rem;
`

const TomatoButton = styled(Button)`
    color:tomato;
`
/* 
export default function StyleButton(props) { */
export default function StyleButton({children, ...rest}) {

    console.log(rest)
    /* console.log(...rest) */

    return (
        // <Button color='red'>StyleButton</Button>
        /* <Button color={props.color}>{props.children}</Button> */
        <TomatoButton {...rest}>{children}</TomatoButton>
    )
}
