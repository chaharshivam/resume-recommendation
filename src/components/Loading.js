import React from "react";

const Loading = () =>{
    return(
        <div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            <p>
                Please wait while the server is processing your file
            </p>
        </div>
    )
}

export default Loading;
