import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 57px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 35px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchInput = styled.div`
    width: 200px;
    height: 30px;
    background: #2d2d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 40px;
`
export const Menu = styled.a`
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    color: #FFFF;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-style: normal;
    font-size: 15px;
    line-height: 25px;
    color: #FFFF;
    margin-right: 12px;
    text-decoration: none;
    cursor: pointer;
    padding: 0px 5px;

    &:hover{
        box-shadow: 3px 7px 7px black;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFF;
    margin-right: 10px;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFFF;
    width: 100%;
    height: 100%;
    border-radius: 8px;
`

