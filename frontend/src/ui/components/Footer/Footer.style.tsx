import { styled } from "@mui/material";

export const Wrapper = styled('footer')`
    background-color: ${({theme}) => theme.palette.secondary.main};
`;

export const TopStyled = styled('div')`
    width: 100%;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 3em;
    position: relative;
    img {
        max-width: 200px;
        padding-bottom: 1rem;
    }
    p{
        color: #fff;
        text-align: center;
        margin-bottom: 1em;
        padding: 0;
    }
    ul{
        display: flex;
        gap: 20px;
        list-style: none;
        margin: 0;
        padding: 0;
        li{
            svg{
                color: #fff;
            }
        }
    }
`;

export const Middletyled = styled('div')`
    padding: ${({theme}) => theme.spacing(5)};
    border-bottom: 1px solid rgba(255,255,255,0.3);
`;

export const Container = styled('div')`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    gap: 20px;
    @media (max-width: 540px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;    
    }
`;

export const NewsLetter = styled('div')`
    h3{
        color: #fff;
        font-size: 1.4rem;
        padding: 0;
        margin-top: 0;
        margin-bottom: 20px;
    }
    p{
        color: #fff;
        margin-bottom: 20px;
    }
    form{
        display: flex;
        gap: 10px;
        @media (max-width: 540px) {
                width: 100%;
                display: flex;
                flex-direction: column;
                text-align: center;    
        }
        input[type="text"]{
            width: 170px;
            padding: 16px 26px;
            border-radius: 26px;
            @media (max-width: 540px) {
                width: 100%;
                display: flex;
                text-align: center;    
            }
        }
        button{
            width: 100%;
            border-radius: 26px;
            border: none;
            padding: 2px;
            background-color: ${({theme}) => theme.palette.primary.main};
            color: #fff;
            @media (max-width: 540px) {
                padding: 14px;
            }
        }
        @media (max-width: 912px) {
            width: 300px;
            padding: 3px !important;
        }
        @media (max-width: 1024px) {
            width: 300px;
            padding: 3px !important;
        }
    }
`;

export const Help = styled('div')`
    h3{
        color: #fff;
        font-size: 1.4rem;
        padding: 0;
        margin-top: 0;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    ul{
        width: 100%;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0;
        padding: 0;
        flex-direction: column;
        li{
            margin-bottom: 15.3px;
            &:last-child{
                margin-bottom: 0;
            }
            a{
                color: #fff;
            }
        }
    }
`;

export const QuickLinks = styled('div')`
        h3{
        color: #fff;
        font-size: 1.4rem;
        padding: 0;
        margin-top: 0;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    ul{
        width: 100%;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0;
        padding: 0;
        flex-direction: column;
        li{
            margin-bottom: 15.3px;
            &:last-child{
                margin-bottom: 0;
            }
            a{
                color: #fff;
            }
        }
    }
`;

export const AboutUS = styled('div')`
            h3{
        color: #fff;
        font-size: 1.4rem;
        padding: 0;
        margin-top: 0;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    ul{
        width: 100%;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: center;
        text-align: center;
        margin: 0;
        padding: 0;
        flex-direction: column;
        li{
            margin-bottom: 15.3px;
            &:last-child{
                margin-bottom: 0;
            }
            a{
                color: #fff;
            }
        }
    }
`;

export const Bottom = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 65px;
`;

export const ContainerR = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
`; 