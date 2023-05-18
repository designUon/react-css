import React from 'react'
import { styled } from 'styled-components'

// 스타일드 컴포넌트를 통해서 a태그를 디자인하고
const Button2 = styled.a`
    color : ${props => props.c};
    background-color: ${props => props.bc};
    font-size: ${props => props.fs}rem;
    padding : ${props => props.pd};
`

const Button3 = styled.a`
    color : blue;
    background-color : lightgray;
    font-size: 2rem;
    padding : 10px 10px;
    margin-left: 10px;
`

// onClick이벤트를 이용해서 alert창을 출력하기
// >> App.js에 MyButton을 호출한 후에 출력

export default function MyButton({children, ...rest}) {

    console.log(rest)

    return (
        <div>
            <Button2 {...rest}>{children}</Button2>
            <Button3>버튼3</Button3>
        </div>
    )
}
