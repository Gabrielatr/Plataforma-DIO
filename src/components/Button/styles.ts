import styled, { css } from 'styled-components'
import { IButtonStyle } from './types'

export const ButtonContainer = styled.button<IButtonStyle>`
    border-radius: 22px;
    position: relative;

    background: gray;
    padding: 2px 20px;
    margin: 0 8px;
    max-width: 150px;
    height: 100%;
    cursor: pointer;

    &:hover{
        opacity: 0.6;
        color: #FFFFFF;
    }

    ${({variant}) => variant !== "primary" && css`
        min-width: 250px;
        max-width: 250px;
        color: white;
        height: 40px;
        background: #E41050;
        border-color: #e41050;
        border-style: double;
        font-size: 16px;
        padding: 4px 5px;
        background-clip: content-box;

        &::after{
            content: '',
            position: absolute;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }

        &:hover{
            opacity: 1;
            background-color: purple;
            border-color: purple;
        }
    `}
`