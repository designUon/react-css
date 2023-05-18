import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const StyleLink = styled(Link)`
    font-size : 1.2rem;
    font-weight : bold;
    color : #8d02ff;
    text-decoration : none;

    &:hover{
        color: #82bb37;
    }

    &+div{
        background-color: #02ffc8;
    }
`

export default function MyLink({children, ...rest}) {
    return (
        <StyleLink {...rest}>{children}</StyleLink>
    )
}
