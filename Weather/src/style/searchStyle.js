import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    align-items: flex-start;

`;

export const SearchButton = styled.img`
    max-width: 40px;
`;

export const SearchLine = styled.input`
    border: none;
    border-bottom: 2px solid white;
    background: none;
    border-radius: 2px;
    margin-top:10px;
    color: #0f054a;
    outline:none;
    font-size: 20px;
    font-family: Comic Helvetic;

    &::-webkit-input-placeholder {
        color: #0f054a;
        font-family: Comic Helvetic;
    }
`;

export const Select = styled.select`
    height: 35px;
    margin-top:10px;
    outline:none;
    font-size: 20px;
    font-family: Comic Helvetic;
    width:100px;
    background: none;
    margin-right: 40px;
    color: #0f054a;
    border: none;

    option {
        font-family: Comic Helvetic;
        color: #0f054a;
        margin-top: 10px;
        outline:none;
        font-size: 20px;
    }
`;
