import React from 'react'
import CommonButton from './CommonButton'
import { styled } from 'styled-components'

const ButtonTest = styled(CommonButton)`
    /* background-color: #00cf5d; */
    ${(props)=>{
        switch (props.mode){
            case "dark":
                return `
                    background-color: #2b2b2b;
                    color : lightgray;
                    margin-left : 5px;
                `
            case "light":
                return `
                    background-color: lightgray;
                    color : #2b2b2b;
            `        
        }

    }}
`

export default function SpecialButton({children, ...rest}) {
    return (
        <ButtonTest {...rest}>{children}</ButtonTest>
    )
}
