import React from 'react'
import { styled } from 'styled-components'

const Button = styled.a`
    display: inline-block;
    margin-top: 20px;
    padding : 5px 7px;
    border-radius: 3px;
    /* props color 값으로 받아와서 다른 색으로 출력하기 */
    background-color: ${props => props.color ? props.color : "#002f75"};
    color : white;
`

// export default function CommonButton({children, className, ...rest}){
export default function CommonButton({children, ...rest}){
    return (
        // <Button>CommonButton</Button>
        // <Button className={""} {...rest}>{children}</Button>
        <Button {...rest}>{children}</Button>
    )
}
