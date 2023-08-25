import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
    border-radius: 22px;
    position: relative;

    background: gray;
    padding: 2px 12px;
    margin: 0 8px;
    min-width: 120px;
    height: 100%;
    cursor: pointer;

    &:hover{
        opacity: 0.6;
        color: #FFFFFF;
    }

    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        width: 80%;
        height: 40px;
        background: #E41050;
        border-color: #e41050;
        border-style: double;
        font-size: 17px;
        padding: 5px;
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
            color: black;
            background-color: purple;
            border-color: purple;
        }
    `}
`