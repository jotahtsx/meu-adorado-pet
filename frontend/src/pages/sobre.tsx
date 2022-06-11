import Head from 'next/head'
import Link from "next/link";
import { NextPage } from "next";
import Title from '../ui/components/Title/Title'
import {BsCheckLg} from 'react-icons/bs'
import { AboutContainer, OurHistory, ListItems, Item, AdoptionLink, FirstBanner, SecondBanner, CreatPet } from '../ui/components/About/About.style';

const About: NextPage = () => {
    return(
        <>
            <Head>
                <title>Sobre nós</title>
            </Head>
            <div>
                <Title 
                title={'Sobre nosso trabalho'}
                subtitle={'Entenda melhor sobre nossa proposta'}
                />
            </div>
            <AboutContainer>
                <OurHistory>
                    <div>Nossa História</div>
                    <h2>Qualquer coisa e tudo para todo o seu animal de estimação</h2>
                    <p>
                        Nossas maiores realizações não podem ficar para trás porque nosso destino está acima de nós. Nosso instinto de sobrevivência é a nossa maior inspiração. O amor é a única coisa que transcende o tempo e o espaço.
                    </p>
                    <ListItems>
                        <Item>
                            <BsCheckLg size={20} /> Mesmo se você for embora
                        </Item>
                        <Item>
                            <BsCheckLg size={20} /> O sol nascerá todos os dias
                        </Item>
                        <Item>
                            <BsCheckLg size={20} /> Assim como eu continuarei amando você
                        </Item>
                    </ListItems>
                </OurHistory>
                <div>
                    <AdoptionLink>
                        <h2>Suas Adoções</h2>
                        <Link href={'/pets/relatorio'}>Ver suas adoções</Link>
                    </AdoptionLink>
                    <FirstBanner></FirstBanner>
                </div>
                <div>
                    <SecondBanner></SecondBanner>
                    <CreatPet>
                        <h2>Cadastrar Pet</h2>
                        <Link href={'/pets/cadastro'}>Adicionar um Pet</Link>
                    </CreatPet>
                </div>
            </AboutContainer>
        </>
    )
}

export default About;