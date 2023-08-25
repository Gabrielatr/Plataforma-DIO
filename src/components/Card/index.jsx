import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { 
    CardConteiner,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture 
} from './styles';

function Card() {
  return (
    <CardConteiner>
        <ImageBackground src='https://3fda7bf5ab.cbaul-cdnwnd.com/28272a9103056a515d2496144073955e/200000041-bdf08bdf0a/Digital-Inovation-On.png?ph=3fda7bf5ab'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/84939054?v=4' />
                <div>
                    <h4>Gabriela Ribeiro</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto par curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e css no bootcamp dio ... <strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 16
                </p>
            </HasInfo>
        </Content>
    </CardConteiner>
  )
}

export { Card }