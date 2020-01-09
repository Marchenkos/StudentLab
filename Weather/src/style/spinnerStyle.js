import styled, { keyframes } from "styled-components";

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    position: fixed;
    top: 460px;
    left: 47%;
    width: 100px;
    height: 100px;
    margin: 1px;
    border-radius: 50%;
    border: 12px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spinner} 1.2s linear infinite;
`;
