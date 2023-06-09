import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    margin: 2rem 0.5rem 4rem;

    img {
        height: 15rem;
        width: 100%;
        object-fit: cover;
    }

    @media screen and (min-width: 750px) {
        display: grid;
        grid-template-columns: 30% auto;
        gap: 0.5rem;
        box-shadow: 0 0 0.5rem 1px gray;
        border-radius: 1rem;
        overflow: hidden;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    #title {
        display: flex;
        justify-content: space-between;
        padding-right: 0.5rem;

        h3 {
            font-size: 1.4rem;
            font-weight: 500;
        }
    }

    #booking {
        margin-top: 1rem;

        * {
            font-size: 1rem;
            color: gray;
        }
    }
`
