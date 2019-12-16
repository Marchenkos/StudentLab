import React from "react";
import FilterContainer from "./containers/FilterContainer";
import ManageBlockContainer from "./containers/ManageBlockContainer";

const filters = {
    music: {
        rock: ["Three Days Grace", "Linkin Park", "AC/DC"],
        pop: ["Sia", "Ed Sheeran", "Michael Jackson"],
        jazz: ["Kenny G", "Bill Evans"],
        rap: ["Eminem", "Noize MC", "Atmosphere"]
    },
    literature: {
        novel: ["The Master and Margarita", "Pride and Prejudice"],
        story: ["Flowers for Algernon", "Triumphal Arch", "Roadside Picnic"]
    },
    films: {
        comedy: ["The Hot Chick", "Dumb and Dumber", "Bean"],
        horror: ["Aliens", "Room 237", "Dracula"],
        fantasy: ["Harry Potter", "The Hobbit"],
        adventure: ["Gladiator ", "Avatar", "Interstellar"]
    }
};

export default class App extends React.Component {
    render() {
        return (
            <>
                <ManageBlockContainer />
                <FilterContainer filters={filters} />
            </>
        );
    }
}
