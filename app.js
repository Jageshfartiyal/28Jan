import React, {Component} from "react";
import ReactDOM from "react";

const App=()=>{
    return(
        <div>
            <h1>This is working perfectly Fine</h1>
        </div>
    )
}
ReactDOM.render(
    <App></App>,
    document.querySelector('#root')
)