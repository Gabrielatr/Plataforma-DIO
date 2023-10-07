import React from 'react'
import { To, useNavigate } from "react-router-dom"
import {FiArrowDown} from 'react-icons/fi'
import { Button } from '../Button'
import {
    SearchInput,
    Container,
    Row,
    Input,
    Menu,
    MenuRight,
    Wrapper,
    UserPicture
} from './styles'
import { IHeader } from './types'

function Header({auth}: IHeader) {

    const navigate = useNavigate();

    const handleClick = (ref: To) => {
        navigate(ref);
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img 
                    style={{cursor: 'pointer'}} 
                    src='https://hermes.digitalinnovation.one/assets/diome/logo-full.svg'
                    onClick={() => handleClick("/")} width="90px" alt='logo da dio'
                />
                {auth ? (
                    <>
                    <SearchInput>
                        <Input placeholder='Search...' />
                    </SearchInput>
                    <Menu>Live code</Menu>
                    <Menu>World</Menu>
                    </>
                ) : null}
                
            </Row>
            <Row>
                {auth ? (
                    <>
                    <UserPicture src='https://avatars.githubusercontent.com/u/84939054?v=4' />
                    <FiArrowDown />
                    </>
                ) : (
                    <>
                    <MenuRight onClick={() => handleClick("/")}>Home</MenuRight>
                    <Button onClick={() => handleClick("/cadastro")} title="Cadastrar" />
                    <Button onClick={() => handleClick("/login") } title="Entrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }