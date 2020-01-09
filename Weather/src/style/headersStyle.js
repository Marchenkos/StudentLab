import styled from "styled-components";

export const Headers = styled.div`
    font-family: Comic Helvetic;
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 0 auto;
`;

export const HeaderItem = styled.button`
    color: white;
    border: none;
    font-size: 20px;
    padding: 10px 10px;
    background: #4e4285;
    cursor: pointer;

    ${({ active }) => active && `
        background: #272266;
    `}
`;
