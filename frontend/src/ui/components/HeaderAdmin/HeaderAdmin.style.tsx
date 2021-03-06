import { styled } from "@mui/material";

export const HeaderContainer = styled('header')`
    height: 115x;
    background-color: #f6f6f6;
    padding: ${({theme}) => theme.spacing(2)};

    div{
        height: 100%;
        max-width: 1140px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${({theme}) => theme.spacing(2)};
    }
`;

export const Logo = styled('img')`
    max-width: 175px;
    @media (max-width: 280px) {
        width: 125px;
    }
`;

export const LinksContainer = styled('nav')`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2) };
    flex-wrap: wrap;
    justify-content: flex-end;
`;