import Link from "next/link";
import { Wrapper, Logo } from "./Header.style";

export default function Header(){
    return(
        <Wrapper>
            <Link href="/">
                <a>
                    <Logo src="/images/logo.svg" alt="Meu Adorado Pet" />
                </a>
            </Link>
        </Wrapper>
    )
}