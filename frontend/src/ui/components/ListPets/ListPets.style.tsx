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
`;

export const Description = styled('p')`
    margin-top: 0;
    margin-bottom: 1rem;
    word-break: break-word;
`;