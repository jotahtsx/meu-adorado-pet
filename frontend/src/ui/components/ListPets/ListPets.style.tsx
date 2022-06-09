import { styled } from "@mui/material";

export const ListPetsSltyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(2)};
`;

export const Item = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({theme}) => theme.spacing(5)};
    margin-bottom: ${({theme}) => theme.spacing(5)};
    ${({theme}) => theme.breakpoints.down('md') } {
        grid-template-columns: 1fr;
        gap: ${({theme}) => theme.spacing(2)};
        margin-bottom: ${({theme}) => theme.spacing(10)};
    };
`;

export const Photo = styled('img')`
    width: 100%;
    height: 230px;
    border-radius: 8px;
    object-fit: cover;
    @media (max-width: 820px) {
        height: 500px;
        padding: 3px !important;
    }
    @media (max-width: 1024px) {
        height: 350px;
        padding: 3px !important;
    }
`;

export const Informations = styled('div')`
    display: flex;
    flex-direction: column;
    button{
        padding: ${({theme}) => theme.spacing(2)};
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
    }
`;

export const Name = styled('h2')`
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.875rem;
    color: ${({theme}) => theme.palette.text.primary};
`;

export const Description = styled('p')`
    margin-top: 0;
    margin-bottom: 1rem;
    word-break: break-word;
    color: ${({theme}) => theme.palette.text.secondary};
`;