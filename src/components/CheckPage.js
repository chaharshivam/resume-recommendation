import React from "react";
import {Link} from "react-router-dom";
import CheckFile from "./CheckFile";
import CheckText from "./CheckText";
import './css/CheckPage.css';

class CheckPage extends React.Component{
    state = {
        pdfActive : true,
        textActive : false,
    }

    checkArea=()=>{
        if(this.state.pdfActive)
            return <CheckFile/>
        if(this.state.textActive)
            return <CheckText/>
    }

    render(){
        return(
            <div className="mydiv d-flex h-100 text-center text-white bg-dark">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <header className="mb-auto">
                        <div>
                            <h1 className="float-md-start mb-0">Cover</h1>
                            <nav className="nav nav-masthead justify-content-center float-md-end">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                <Link to="/features" className="nav-link" >Features</Link>
                                <Link to="/login" className="nav-link" >Login</Link>
                                <Link to="/register" className="nav-link" >Signup</Link>
                            </nav>
                        </div>
                    </header>
                    <main className="px-3">
                        <div className="box-container card text-center">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                    <li className="nav-item">
                                        <a className={this.state.pdfActive ? "nav-link active" : "nav-link"} aria-current="true" href="#"
                                           onClick={ e => {
                                               this.setState({
                                                   pdfActive: true,
                                                   textActive: false,
                                               })
                                           }
                                        }>File</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className={this.state.textActive ? "nav-link active" : "nav-link"} href="#"
                                        onClick={e => {
                                            this.setState({
                                                pdfActive: false,
                                                textActive: true,
                                            })
                                        } }
                                        >Text</a>
                                    </li>
                                </ul>
                            </div>
                            {this.checkArea()}
                        </div>
                    </main>
                    <footer className="mt-auto text-white-50">
                        <p>&#169; 2021 Resume, Developed by Dr. Pradeep Kumar Roy and Shivam</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default CheckPage;
