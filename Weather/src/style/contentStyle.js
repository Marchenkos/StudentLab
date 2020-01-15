import styled from "styled-components";
import { device } from "./device";

export const InformationBlock = styled.div`
    display: flex;
    justify-content: space-around;
    padding:15px;
    align-items: center;

    @media ${device.tablet} {
        padding: 0;
    }

    @media ${device.mobile} {
        flex-direction: column;
    }

    ${({ complex }) => complex && `
        padding-top: 0;

        @media ${device.tablet} {
            padding: 0;
            flex-direction: row;
            margin-top: 30px;
        }
    `}
`;

InformationBlock.displayName = "InformationBlock";

export const InformationBlockItem = styled.div`
    display:flex;
    align-items: center;
    padding-top: 10px;
    flex-direction: column;
    margin: 0 10px;

    ${({ active }) => active && `
        cursor: pointer;
    `}

    @media ${device.tablet} {
        margin: 0;
        flex-basis: 45%;
        padding-top: 0px;
    }
`;

InformationBlockItem.displayName = "InformationBlockItem";

export const Information = styled.span`
    font-size: 20px;
    margin: 10px;

    @media ${device.tablet} {
        font-size: 15px;
    }

    @media ${device.laptop} {
        margin: 7px;
    }

    ${({ bold }) => bold && `
        font-weight: bold;
        margin: 10px 0;
        font-size: 30px;

        @media ${device.tablet} {
            font-size: 25px;
        }
    `}

    ${({ additional }) => additional && `
        @media ${device.laptop} {
            margin: 0;
        }
    `}

    color: white;
`;

Information.displayName = "Information";

export const Img = styled.img`
    max-width: 100px;
    margin-right: 15px;

    ${({ block }) => block === "main" && `
        max-width: 85px;
    `}

    @media ${device.tablet} {
        max-width: 80px;
    }

    ${({ block }) => block === "additional" && `
        max-width: 50px;

        @media ${device.mobile} {
            max-width: 40px;
            margin: 5px 0;
        };

        @media ${device.tablet} {
            max-width: 45px;
        }

        @media ${device.laptop} {
            max-width: 50px;
        }
    `}

    @media ${device.laptop} {
        margin-right: 0;
    }
`;

Img.displayName = "Img";

export const ContentBlock = styled.div`
    height: auto;
    font-family: Colos Text;
    width: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 7px;
    margin: 0 auto;
    background-image: url(../../img/backgroundWindow.jpg);
    background-repeat: no-repeat;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    @media ${device.laptop} {
        width: 65%;
        padding: 20px;
    }

    @media ${device.mobile} {
        background-color: #814bc7;
        background-image: url(../../img/backgroundWindow.jpg);
    };

    ${({ complex }) => complex && `
        background: linear-gradient(90deg, #0f054a 0px, #5d62a6 100%);
        display: flex;
        flex-direction: column;
        width: 65%;

        @media ${device.laptop} {
            width: 70%;
        }

        @media ${device.tablet} {
            width: 80%;
            padding: 15px 0;
        }
    `}
`;

ContentBlock.displayName = "ContentBlock";
