import React from "react";

class CheckText extends React.Component{
    render(){
        return(
            <div className="card-body">
                <h5 className="card-title">Special title treatment THIS IS TEXT</h5>
                <form>
                    <div className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="16"></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CheckText;
