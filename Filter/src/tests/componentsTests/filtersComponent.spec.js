import React from "react";
import { shallow } from "enzyme";
import Filters from "../../components/Filters";
import FilterSection from "../../components/FilterSection";
import FiltersList from "../../components/FilterList";
import TitleForFilter from "../../components/TitleForFilter";

const { describe, it, expect } = global;

describe("Main component that contain all filter sections", () => {
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

    it("Render title and block with filters", () => {
        const block = wrapper.find(".filter__conditions");

        expect(wrapper.find(TitleForFilter).length).toEqual(1);
        expect(block.children().length).toEqual(6);

        expect(wrapper.find(FiltersList).length).toEqual(1);
        expect(wrapper.find(FilterSection).length).toEqual(2);
    });

    it("Render three filter sections and separators for them", () => {
        const { filters, currentTables, currentCells, result } = props;
        const block = wrapper.find(".filter__conditions");

        expect(block.find(FiltersList).length).toEqual(1);
        expect(block.find(FiltersList).prop("selectedFilters")).toEqual(result);

        expect(block.find(FilterSection).length).toEqual(2);
        expect(block.find(FilterSection).first().prop("currentContext")).toEqual(filters);
        expect(block.find(FilterSection).first().prop("selectedContext")).toEqual(currentTables);
        expect(block.find(FilterSection).at(1).prop("selectedContext")).toEqual(currentCells);

        expect(block.find("hr").length).toEqual(3);
    });
});
