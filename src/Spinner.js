import React from "react";


const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>

        </div>
    );
};

// defaultProps are used, if we forget to initialize a props in the 
// component props...
Spinner.defaultProps = {
    message: "Loading..."
}


export default Spinner;