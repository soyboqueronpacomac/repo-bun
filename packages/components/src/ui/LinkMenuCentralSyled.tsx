import Link from "next/link";
import styled from "styled-components";

export const LinkMenuCentralStyled = styled(Link)`
    padding-left: 1rem;
    padding-right: 1rem;
    transition: all .5 ease-in;
    &:hover {
        background-color: white;
        padding: 1rem;
        border-radius: .75rem;
    }
`
