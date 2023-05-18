import React from 'react'
import CommonButton from './CommonButton'
import { styled } from 'styled-components'

const Button = styled(CommonButton)`
    background-color: #00cf5d;
`

export default function SpecialButton() {
    return (
        <Button>SpecialButton</Button>
    )
}
