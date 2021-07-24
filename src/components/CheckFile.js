import React from "react";
import axios from "axios";
import pdfImage from "../assets/pdfIcon.jpg";
import excelImage from "../assets/excelIcon.png";
import {Button, Modal} from "react-bootstrap";
import Loading from "./Loading";

class CheckFile extends React.Component {
    state = {
        fileName: "",
        selectedFile: null,
        loading: false,
        modalDisplay: false,
        result: []
    }
    itemKey = 0;

    fileSelectedHandler = event => {
        console.log(event.target.files);
        console.log(URL.createObjectURL(event.target.files[0]));
        this.setState({
            fileName: event.target.files[0].name, selectedFile: event.target.files[0],
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        if (this.state.selectedFile !== null)
            fd.append('userFile', this.state.selectedFile, this.state.selectedFile.name);
        else
            return alert("Please select File")
        this.setState({modalDisplay: true})
        axios.post('http://localhost:8080/check', fd)
            .then(res => {
                this.setState({result: res.data})
            }).catch(e => {
            this.setState({result: e.message})
        })
    }

    handleModal(){
        this.setState({result : []})
        this.setState({itemKey: 0})
        this.setState({modalDisplay: !this.state.modalDisplay})
    }


    showResults=()=>{
            return(
                <Modal show={this.state.modalDisplay} scrollable={true}>
                    <Modal.Header><b>Response from server</b></Modal.Header>
                    <Modal.Body>
                        {console.log(this.state.result)}
                        {this.state.result.length === 0 ? <Loading/> : this.state.result.map(item=>{
                            console.log(item)
                            this.itemKey = this.itemKey + 1;
                            return <p key={this.itemKey}>{item}</p>
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.handleModal()}}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )
    }

    render() {
        // if (this.state.loading === true)
        //     return <ResultDisplay result={this.state.result}/>
        return (
            <div className="card-body">
                <h5 className="card-title">THIS IS FOR PDF or XLSX or CSV</h5>
                <form onSubmit={this.onFormSubmit}>
                    <span>
                    <img src={pdfImage} className="img-thumbnail m-3" alt="pdfImage" height={150} width={150}/>
                        <b>OR</b>
                    <img src={excelImage} className="img-thumbnail m-3" alt="excelImage" height={150} width={150}/>
                    </span>
                    <div className="d-flex justify-content-center">
                        <div className="w-50 p-3">
                            <div className="input-group">
                                <label className="input-group-btn">
                                     <span className="btn btn-primary">
                                      Browse File <input type="file" style={{display: "none"}}
                                                         onChange={this.fileSelectedHandler}/>
                                    </span>
                                </label>
                                <input type="text" className="form-control mb-0 mt-0"
                                       value={this.state.fileName} readOnly/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {this.showResults()}
            </div>
        )
    }
}

export default CheckFile;
