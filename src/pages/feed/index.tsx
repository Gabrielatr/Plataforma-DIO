import { Header } from "../../components/Header"
import { UserInfo } from "../../components/UserInfo"
import { Card } from "../../components/Card"

import { Container, Column, TitleHighlight } from './styles'
import React from "react"

const Feed = () => {
    return (
        <>
        <Header auth={true}/>
        <Container>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>#RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo image='https://avatars.githubusercontent.com/u/84939054?v=4' percentual='60' name='Gabriela T. R.'/> 
                <UserInfo image='https://avatars.githubusercontent.com/u/84939054?v=4' percentual='60' name='Gabriela T. R.'/> 
                <UserInfo image='https://avatars.githubusercontent.com/u/84939054?v=4' percentual='60' name='Gabriela T. R.'/> 
                <UserInfo image='https://avatars.githubusercontent.com/u/84939054?v=4' percentual='60' name='Gabriela T. R.'/> 
            </Column>
        </Container>
        </>
    )
}

export { Feed }