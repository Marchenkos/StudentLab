import styled from "styled-components";

export const ContentContainer = styled.div`
    background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
    padding:20px;
`;

export const BackgroundContainer = styled.div`
    background-image: url(../../img/background2.jpg);
    background-repeat: no-repeat;
    height:800px;
    width:80%;
    padding-top: 10%;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const ContentBlock = styled.div`
    height: auto;
    font-family: Colos Text;
    width: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 7px;
    margin: 0 auto;
    background-image: url(../../img/backgroundWindow2.jpg);
    background-repeat: no-repeat;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    ${({ complex }) => complex && `
        background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
        display: flex;
        flex-direction: column;
        width: 65%;
    `}
`;

export const InformationBlock = styled.div`
    display: flex;
    justify-content: space-around;
    padding:15px;
    align-items: center;

    ${({ block }) => block === "additional" && `
        padding-top: 0;
    `}
`;

export const InformationBlockItem = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    margin: 0 10px;

    ${({ active }) => active && `
        cursor: pointer;
    `}
`;

export const Information = styled.span`
    font-size: 20px;
    margin: 10px;

    ${({ bold }) => bold && `
        font-weight: bold;
        margin: 10px 0;
        font-size: 30px;
    `}

    color: white;
`;

export const Img = styled.img`
    max-width: 100px;
    margin-right: 15px;

    ${({ block }) => block === "main" && `
        max-width: 150px;
    `}

    ${({ block }) => block === "additional" && `
        max-width: 70px;
    `}
`;
