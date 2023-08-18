import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

import { Container, TextContent, Title, TitleHighlight } from './styles'

const Home = () => {
    return (
        <>
        <Header />
        <Container>
            <div>
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
                <Button title="Começar agora" variant="secondary" onClick={0}/>
            </div>
            <div>
                <img src="" alt="imagem principal" />
            </div>
        </Container>
        </>
    )
}

export { Home }