import React from "react";

class Navbar extends React.Component{
    // constructor(){
    //     super();
    // }

    render(){
        // {console.log("hello")}d
        return (
            <div className="nav">
                <div className="search-container">
                    <input/>
                    <button id="search-btn">Search</button>
                </div>
            </div>
        );
    }
}

export default Navbar