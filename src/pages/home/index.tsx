import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

import { TextContainer, ImageContainer, TextContent, Title, TitleHighlight } from './styles'
import React from "react"

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login');
    }

    return (
        <>
        <Header />
        <ImageContainer>
            <TextContainer>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresasmais inovadoras do mundo 
                    e encare seu novo desafio profissional evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
            </TextContainer>
        </ImageContainer>
        </>
    )
}

export { Home }