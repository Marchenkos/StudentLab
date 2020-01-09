import React from "react";
import { Information, Img, InformationBlock, InformationBlockItem } from "../style/contentStyle";

export default function AdditionalBockWeather({ listOfData, changeDetailInformation }) {
    const onChangeDetailInformation = index => {
        changeDetailInformation(index);
    };

    return (
        <InformationBlock complex>
            {
                listOfData.map((item, index) => {
                    return (
                        <InformationBlockItem key={index} index={index} onClick={() => { onChangeDetailInformation(index); }} active>
                            <Information bold={false}>{item.time}</Information>
                            <Img block="additional" src={`http://openweathermap.org/img/w/${item.icon}.png`} />
                            <Information bold={false}>
                                {item.tempetature}
                                &deg;
                            </Information>
                        </InformationBlockItem>
                    );
                })
            }
        </InformationBlock>
    );
}
