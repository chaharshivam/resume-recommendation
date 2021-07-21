import React from "react";
import axios from "axios";

class CheckText extends React.Component{
    state = {
        inputText: ""
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        if (this.state.inputText !== null)
            fd.append('givenText', this.state.inputText);
        else
            alert("textarea is empty, Please input some text");
        axios.post('http://localhost:8080/check', fd)
            .then(res => {
                console.log(res);
            }).catch(e => {
            console.log(e);
        })
    }
    render(){
        return(
            <div className="card-body">
                <h5 className="card-title">THIS IS FOR TEXT</h5>
                <form onSubmit={this.onFormSubmit}>
                    <div className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="inputText" className="form-label">Enter your resume text below</label>
                            <textarea className="form-control" id="inputText" rows="16"
                             onChange={e => {
                                 this.setState({inputText: e.target.value});
                             }
                             }
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CheckText;
