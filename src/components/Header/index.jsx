import React from 'react'
import {FiArrowDown} from 'react-icons/fi'
import { Button } from '../Button'
import {
    SearchInput,
    Column,
    Container,
    Row,
    Input,
    Menu,
    MenuRight,
    Wrapper,
    UserPicture
} from './styles'

function Header({auth}) {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src='https://hermes.digitalinnovation.one/assets/diome/logo-full.svg' width="90px" alt='logo da dio' />
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
                    <MenuRight href="#">Home</MenuRight>
                    <Button title="Cadastrar" />
                    <Button title="Entrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }