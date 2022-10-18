import React from 'react'
import { Discord } from '../../assets/SocialIcons/Discord'
import { Github } from '../../assets/SocialIcons/Github'
import { Instagram } from '../../assets/SocialIcons/Instagram'
import { Opencollective } from '../../assets/SocialIcons/Opencollective'
import { Twitter } from '../../assets/SocialIcons/Twitter'
import { HeaderContainer, ItemLink, Links, Link, SocialLinks } from './styles'


export const Header = () => {
  return (
    <HeaderContainer>
        <Links>
            <ItemLink >
            <Link href='#sobre-o-nosso-evento'>Sobre</Link>
            <Link href='#cronograma'>Cronograma</Link>
            <Link href='#patrocinadores'>Patrocinadores</Link>
            <Link href='#outras-edicoes'>edições</Link>
            </ItemLink>
        </Links>

        <SocialLinks>
            <Github url="https://github.com/OpenDevUFCG/"/>
            <Opencollective url="https://opencollective.com/opendevufcg" />
            <Twitter url=" https://twitter.com/OpenDevUFCG" />
            <Instagram url="https://www.instagram.com/opendevufcg/" />
            <Discord url="https://discord.gg/jSFq7XyGe3"/>
        </SocialLinks>

    </HeaderContainer>
  )
}
