import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

import { Container, TextContent, Title, TitleHighlight, Main } from './styles'

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login');
    }

    return (
        <>
        <Header />
        <div style={{backgroundImage: "url('https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png')",
                    justifyContent: "end",
                    height: "500px",
                    right: "0px",
                    backgroundPositionX: "right",
                    backgroundSize: "contain" }}>
            <div style={{justifyContent: "center", width: "800px", alignItems: "center",
                        backgroundColor: "rgba(0,0,0,0.9)", padding: "60px",
                        position: "absolute", height: "500px",
                        boxShadow: " 10px 0 5px -2px rgba(0, 0, 0, 0.56) "}}>
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
            </div>
        </div>
        {/* <Container>
            
            <div style={{backgroundColor: "black", boxShadow: "10px 12px 15px black", width: "70%", height: "100%"}}>
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
            </div>
            <div>
                <img src="https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-play.png" width="30%"   />
            </div>
        </Container> */}
        </>
    )
}

export { Home }