import { styled } from "@mui/material";

export const TitleStyled = styled('h1')`
    font-size: 1.25rem;
    text-align: center;
    margin-top: ${({theme}) => theme.spacing(5)};
`;

export const SubTitleStyled = styled('h2')`
    font-size: 1.125rem;
    text-align: center;
    margin-bottom: ${({theme}) => theme.spacing(5)};
    font-weight: normal;
    color: ${({theme}) => theme.palette.text.secondary};
`;