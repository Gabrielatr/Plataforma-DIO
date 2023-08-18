import React from 'react'
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

function Header() {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src='' alt='logo da dio' />
                <SearchInput>
                    <Input placeholder='Search...' />
                </SearchInput>
                <Menu>Live code</Menu>
                <Menu>World</Menu>
            </Row>
            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }