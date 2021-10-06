import styled from "styled-components";

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    width: 250px;
    min-height: 65px;
    background-color: #299B01;
    border-color: transparent;
    color: white;
    font-size: inherit;
    font-family: inherit;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    &:hover {
        background-color: #ffffff;
        color: #299B01;
        border-color: #299B01;
    }
`;

