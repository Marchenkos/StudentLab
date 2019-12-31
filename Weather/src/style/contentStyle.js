import styled from "styled-components";

export const ContentContainer = styled.div`
    background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
    padding:20px;
`;

export const BackgroundContainer = styled.div`
    background-image: url(../../img/bg.jpg);
    background-repeat: no-repeat;
    height:800px;
    padding: 10% 0;
    width:80%;
    margin: 0 auto;
`;

export const TodayBlock = styled.div`
    width: 400px;
    height: 350px;
    margin: 0 auto;
    background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
    opacity: 0.8;

    ${({ complex }) => complex && `
        display: flex;
        width: 650px;
    `}
`;

export const InformationBlock = styled.div`
    display: flex;
    justify-content: space-around;
    padding:15px;
    align-items: center;

    ${({ complex }) => complex && `
        flex-wrap: wrap;
        flex-basis: 45%;
    `}

    ${({ block }) => block === "additional" && `
    padding-top: 0;
`}
`;

export const InformationBlockItem = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    margin: 0 10px;
`;

export const Img = styled.img`
    ${({ block }) => block === "main" && `
        max-width: 150px;
    `}

    ${({ block }) => block === "additional" && `
        max-width: 70px;
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
