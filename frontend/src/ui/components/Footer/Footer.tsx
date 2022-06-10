
import { Button } from '@mui/material'


import Link from 'next/link';

import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

import { Wrapper, TopStyled, Middletyled, Bottom, Container, NewsLetter, Help, QuickLinks, AboutUS, ContainerR } from "./Footer.style";

export default function Footer(){
    return (
        <Wrapper>
           <TopStyled>
               <img src="/images/logo-color.svg" />
               <p>Com uma pequena ajuda mensal, você
               <br />pode adotar um pet por aqui, facilmente</p>
               <ul>
                   <li>
                       <Link href="/">
                            <a title=''>
                                <FaFacebook size={22} />
                            </a>
                       </Link>
                   </li>
                   <li>
                        <Link href="/">
                            <a title=''>
                                <FaTwitter size={22} />
                            </a>
                        </Link>
                   </li>
                   <li>
                        <Link href="/">
                            <a title=''>
                                <FaFacebook size={22} />
                            </a>
                        </Link>
                   </li>
                   <li>
                        <Link href="/">
                            <a title=''>
                                <FaInstagram size={22} />
                            </a>
                        </Link>
                   </li>
               </ul>
            </TopStyled>
           <Middletyled>
               <Container>
                <NewsLetter>
                    <h3>Se matenha atualizado</h3>
                    <p>
                    Subscribe sit amet dignissim sem. Duis suscipit, nisi ut fermentum molestie.
                    </p>
                    <form>
                        <input type="text" placeholder='Melhor email' />
                        <Button variant='contained'>Inscrever</Button>
                    </form>
                </NewsLetter>
                <Help>
                    <h3>Ajuda</h3>
                    <ul>
                        <li>
                        <Link href="/">
                            <a title=''>
                                Sobre
                            </a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a title=''>
                                Adotar Pet
                            </a>
                        </Link>
                        </li>
                        <li>
                        <Link href="/">
                            <a title=''>
                                Contato
                            </a>
                        </Link>
                        </li>
                    </ul>
                </Help>
                <QuickLinks>
                    <h3>Links Rápidos</h3>
                        <ul>
                            <li>
                            <Link href="/">
                                <a title=''>
                                    Serviços
                                </a>
                            </Link>
                            </li>
                            <li>
                            <Link href="/">
                                <a title=''>
                                    Pets
                                </a>
                            </Link>
                            </li>
                            <li>
                            <Link href="/pets/relatorio">
                                <a title=''>
                                    Relatório de Adoções
                                </a>
                            </Link>
                            </li>
                        </ul>
                </QuickLinks>
                <AboutUS>
                <h3>Meu adorado Pet</h3>
                        <ul>
                            <li>
                            <Link href="/">
                                <a title=''>
                                    Política de Privacidade
                                </a>
                            </Link>
                            </li>
                            <li>
                            <Link href="/">
                                <a title=''>
                                    Termos de Serviço
                                </a>
                            </Link>
                            </li>
                            <li>
                            <Link href="/">
                                <a title=''>
                                    meuadoradopet@gmail.com
                                </a>
                            </Link>
                            </li>
                        </ul>
                </AboutUS>
               </Container>
           </Middletyled>
           <Bottom>
                <ContainerR>
                    © 2022 Meu Adorado Pet
                </ContainerR>
           </Bottom>
        </Wrapper>
    )
}