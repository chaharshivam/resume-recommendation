import React from "react";
import axios from "axios";
import {Button, Modal} from "react-bootstrap";
import Loading from "./Loading";

class CheckText extends React.Component{
    state = {
        inputText: "",
        serverResult: "",
        modalDisplay: false
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        if (this.state.inputText !== null)
            fd.append('givenText', this.state.inputText);
        else
            alert("textarea is empty, Please input some text");
        this.setState({modalDisplay: true})
        axios.post('http://localhost:8080/check', fd)
            .then(res => {
                this.setState({serverResult : res.data})
            }).catch(e => {
            this.setState({serverResult : e.message})
        })
    }

    handleModal(){
        this.setState({serverResult : ""})
        this.setState({modalDisplay: !this.state.modalDisplay})
    }

    showResults=()=>{
        return(
            <Modal show={this.state.modalDisplay}>
                <Modal.Header><b>Response from server</b></Modal.Header>
                <Modal.Body>
                    {this.state.serverResult === null ? <Loading/> : this.state.serverResult}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{this.handleModal()}}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
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
                {this.showResults()}
            </div>
        )
    }
}

export default CheckText;
