import React from "react";
import { InformationBlock, InformationBlockItem, Information, Img } from "../style/contentStyle";
import { iconsCollection } from "../constants";

export default function AdditionalBockWeather({ listOfData, changeDetailInformation }) {
    const onChangeDetailInformation = index => changeDetailInformation(index);

    return (
        <InformationBlock complex>
            {
                listOfData ? listOfData.map((item, index) => {
                    return (
                        <InformationBlockItem key={index} index={index} onClick={() => { onChangeDetailInformation(index); }} active>
                            <Information bold={false} additional>{item.time}</Information>
                            <Img block="additional" src={iconsCollection.get(item.icon.slice(0, -1))} />
                            <Information bold={false} additional>
                                {item.tempetature}
                                &deg;
                            </Information>
                        </InformationBlockItem>
                    );
                })
                    : null
            }
        </InformationBlock>
    );
}
