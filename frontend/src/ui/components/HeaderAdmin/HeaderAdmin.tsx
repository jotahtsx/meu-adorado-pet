import {
    HeaderContainer,
    Logo,
    LinksContainer
} from './HeaderAdmin.style';

import {Link, Box} from '@mui/material';
import NextLink from 'next/link';
export default function HeaderAdmin(){
    return (
        <HeaderContainer>
            <div>
                <Link component={NextLink} href={'/'}>
                    <a>
                        <Logo src={'/images/logo.svg'} alt="Meu Adorado Pet"></Logo>
                    </a>
                </Link>
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>
                            Cadastrar Pet
                        </a>
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'}>
                        <a>
                            Relatório{' '}
                            <Box component={'span'} sx={{display: {sm: 'initial', xs: 'none'}}}>
                                de Adoções
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
    )
}