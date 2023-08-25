import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
//import { MDEmail, MDLock } from "../../assets"

import { Container, TitleLogin, Title, SubtitleLogin, EsqueciText, CriarText, Column, Row, Wrapper } from './styles'

const Login = () => {

    const navigate = useNavigate();
    
    const handleClickSignIn = () => {
        navigate('/feed');
    }

    return (
        <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias 
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>

            <Column>
                <Wrapper>
                    <TitleLogin> Faça o seu cadastro </TitleLogin>
                    <SubtitleLogin> Faça seu login e make the change._ </SubtitleLogin>
                    <form>
                        <Input placeholder="Email" /*leftIcon={<MDEmail />}*/ />
                        { <Input placeholder="Senha" type="password" /*leftIcon={<MDLock />}*/ /> }
                        <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type='button' />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Login }