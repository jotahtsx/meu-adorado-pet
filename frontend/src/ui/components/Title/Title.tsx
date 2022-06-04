import { TitleStyled, SubTitleStyled } from "./Title.style";

interface TitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps){
    return (
    <>
        <TitleStyled>{props.title}</TitleStyled>
        <SubTitleStyled>{props.subtitle}</SubTitleStyled>
    </>
    )
}