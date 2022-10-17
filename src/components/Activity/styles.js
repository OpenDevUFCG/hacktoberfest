import styled from "styled-components";

export const Card = styled.article`
    display: inline-flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: 22.5em;
    min-height: fit-content;
    height: 100%;
    padding: 1.25em 1.25em;
    gap: 1.25em;
    background-color: var(--medium-dark-blue);
    box-shadow: 0px 4px 35px rgba(255, 255, 255, 0.25);
    border-radius: 0.75em;
`

export const Titulo = styled.h5`
    font-weight: 700;
    font-size: 1.25em;
    text-align: center;
    color: var(--white);
    text-shadow: 0px 0px 42px rgba(255, 255, 255, 0.25);
`

export const Info = styled.p`
    font-style: italic;
    font-weight: 700;
    font-size: 1em;
    text-align: center;
    color: var(--white);
`

export const Divisor = styled.hr`
    width: 2.5em;
`