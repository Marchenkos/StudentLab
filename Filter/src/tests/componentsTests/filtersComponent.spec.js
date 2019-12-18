import React from "react";
import { shallow } from "enzyme";
import Filters from "../../components/Filters";
import FilterSection from "../../components/FilterSection";
import FiltersList from "../../components/FilterList";
import TitleForFilter from "../../components/TitleForFilter";

const { describe, it, expect } = global;

describe("Test for main component which renders all filter sections", () => {
    const props = {
        filters: {},
        currentTables: [],
        currentCells: [],
        result: [],
        addTable: () => {},
        addCell: () => {},
        addElement: () => {},
        removeTable: () => {},
        removeCell: () => {},
        removeElement: () => {},
    };

    const wrapper = shallow(<Filters {...props} />);

    it("Component renders title", () => {
        const mainBlock = wrapper.find(".filter");

        expect(mainBlock.find(TitleForFilter).length).toEqual(1);
    });

    it("Component renders all sections", () => {
        expect(wrapper.find(FiltersList).length).toEqual(1);
        expect(wrapper.find(FilterSection).length).toEqual(2);
    });

    it("Render three separators for sections", () => {
        expect(wrapper.find(".section_separator").length).toEqual(3);
    });
});
