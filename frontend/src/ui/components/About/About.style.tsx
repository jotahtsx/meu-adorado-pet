import { styled } from "@mui/material";

export const AboutContainer = styled('div')`
    display: grid;
    grid-template-columns: 550px 265px 265px;
    max-width: 1140px;
    margin: 0 auto;
    gap: 20px;
    margin-bottom: 50px;
    @media (max-width: 400px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0 16px;
    }
    @media (max-width: 414px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0 16px;
    }
    @media (max-width: 820px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0 26px;
    }
    @media (max-width: 912px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0 16px;
    }
`;

export const OurHistory = styled('div')`
    div{
        color: ${({theme}) => theme.palette.primary.main};
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 15px;
        @media (max-width: 820px) {
            font-size: 1.625rem;
        }
        @media (max-width: 912px) {
            font-size: 1.625rem;
        }
    }
    h2{
        font-size: 2.5rem;
        font-weight: 900;
        color: ${({theme}) => theme.palette.secondary.main};
        padding: 0 !important;
        margin: 0 !important;
    }
    p{
        font-size: 14px;
        margin-bottom: 20px;
        @media (max-width: 820px) {
            font-size: 1.25rem;
            margin-bottom: 30px;
        }
        @media (max-width: 912px) {
            font-size: 1.25rem;
            margin-bottom: 30px;
        }
    }
`;

export const ListItems = styled('ul')`
    list-style: none;
    margin: 0;
    padding: 0;
    svg{
        color: ${({theme}) => theme.palette.primary.main};
    }
`;

export const Item = styled('li')`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 16px;
    @media (max-width: 820px) {
        font-size: 1.125rem;
        margin-bottom: 30px;
    }
    @media (max-width: 912px) {
        font-size: 1.125rem;
        margin-bottom: 30px;
    }
`;

export const AdoptionLink = styled('div')`
    width: 75%;
    height: 212px;
    border: 1px solid ${({theme}) => theme.palette.primary.main};
    margin-top: 1rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 30px;
    @media (max-width: 820px) {
        width: 100%;
    }
    @media (max-width: 912px) {
        width: 100%;
    }
    h2{
        margin: 0;
        padding: 0;
        font-size: 1.125rem;
        @media (max-width: 820px) {
            font-size: 1.875rem;
        }
        @media (max-width: 912px) {
            font-size: 1.875rem;
        }
    }
    a{
        margin: 0;
        padding: 0;
        font-size: 1rem;
    }
    a{
        @media (max-width: 820px) {
            font-size: 1.875rem;
        }
        @media (max-width: 912px) {
            font-size: 1.875rem;
        }
    }
`;

export const CreatPet = styled('div')`
    width: 75%;
    height: 212px;
    border: 1px solid ${({theme}) => theme.palette.primary.main};
    margin-top: 1rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    margin-top: 30px;
    @media (max-width: 820px) {
        width: 100%;
    }
    @media (max-width: 912px) {
        width: 100%;
    }
    h2{
        margin: 0;
        padding: 0;
        font-size: 18px;
        @media (max-width: 820px) {
            font-size: 1.875rem;
        }
        @media (max-width: 912px) {
            font-size: 1.875rem;
        }
    }
    a{
        margin: 0;
        padding: 0;
        font-size: 1rem;
        @media (max-width: 820px) {
            font-size: 1.875rem;
        }
        @media (max-width: 912px) {
            font-size: 1.875rem;
        }
    }
`;

export const FirstBanner = styled('div')`
    width: 100%;
    height: 325px;
    border-radius: 16px;
    background-image: url(./images/first-banner.jpg);
    background-size: cover;
    background-position: center;
    @media (max-width: 400px) {
        height: 250px !important;
    }
    @media (max-width: 414px) {
        height: 250px !important;
    }
    @media (max-width: 820px) {
        width: 75%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
    @media (max-width: 912px) {
        width: 75%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
`;

export const SecondBanner = styled('div')`
    width: 100%;
    height: 325px;
    border-radius: 16px;
    background-image: url(./images/second-banner.jpg);
    background-size: cover;
    background-position: center;
    @media (max-width: 400px) {
        height: 250px !important;
    }
    @media (max-width: 414px) {
        height: 250px !important;
    }
    @media (max-width: 820px) {
        width: 75%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
    @media (max-width: 912px) {
        width: 75%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }
`;