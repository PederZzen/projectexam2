import styled from "styled-components";
import { color } from "../utils/constants";

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    margin: 2rem 0;

    > div {
        display: flex;
        flex-direction: column;
    }

    input,
    textarea {
        background-color: ${color.light};
        border: none;
        border-radius: 1.2rem;
        padding: .8rem .5rem;
        max-width: 25rem;
        outline: none;
    }

    textarea {
        resize: none;
        height: 15rem;
    }

    input[type=number] {
        width: 50%;
    }

    span {
        color: ${color.main};
        filter: brightness(150%);
        padding: .2rem;
        text-align: left;
    }

`