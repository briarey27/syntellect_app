import React from "react";
import "./App.css";
import { FirstControl, SecondControl } from "./view";
import { DropDownSelectControl } from "./view";
import {
    modelMax3,
    modelMax10,
} from "./view/DropDownSelectControl/DropDownSelectControlViewModel";

function App() {
    const model1 = modelMax3;
    const model2 = modelMax10;

    return (
        <div>
            <div className={"paper"}>
                <FirstControl />
            </div>
            <div className={"paper"}>
                <SecondControl />
            </div>
            <div className={"paper"}>
                <DropDownSelectControl model={model1} />
                <DropDownSelectControl model={model2} />
            </div>
        </div>
    );
}

export default App;
