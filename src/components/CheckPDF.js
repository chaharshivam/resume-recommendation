import React from "react";
import axios from "axios";
import pdfImage from "../assets/pdfIcon.jpg"

class CheckPDF extends React.Component {
    state = {
        pdfFileName: "",
        selectedFile: null
    }

    fileSelectedHandler = event => {
        console.log(event.target.files);
        console.log(URL.createObjectURL(event.target.files[0]));
        this.setState({
            pdfFileName: event.target.files[0].name, selectedFile: event.target.files[0],
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        if (this.state.selectedFile !== null)
            fd.append('pdfFile', this.state.selectedFile, this.state.selectedFile.name);
        else
            alert("Please select File")
        axios.put('http://localhost:8080/', fd)
            .then(res => {
                console.log(res);
            }).catch(e => {
            console.log(e);
        })
    }

    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">Special title treatment THIS IS PDF</h5>
                <form onSubmit={this.onFormSubmit}>
                    <img src={pdfImage} className="img-thumbnail" alt="pdfImage" height={150} width={150}/>
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
                                       value={this.state.pdfFileName} readOnly/>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CheckPDF;
