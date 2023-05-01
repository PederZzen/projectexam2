import styled from "styled-components";

export const Wrapper = styled.div `
    color: gray;
    position: relative;

    &::after {
        content: '';
        background-color: gray;
        width: 100%;
        height: 1.5px;
        opacity: .3;
        border-radius: 1px;
        left: 50%;
        transform: translate(-50%);
        bottom: -2.5rem;
        position: absolute;
    }
`