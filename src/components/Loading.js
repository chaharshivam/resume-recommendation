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
                Please wait, while your file is being uploaded and classification results are being calculated
            </p>
        </div>
    )
}

export default Loading;
