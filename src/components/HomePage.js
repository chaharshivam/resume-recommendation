import React from "react";
import {Link} from "react-router-dom";
import './css/HomePage.css';

class HomePage extends React.Component{

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
                        <div className="main-div">
                        <h1>Welcome to Resume</h1>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet aut dolores eligendi eum id ipsa itaque laudantium libero minus possimus provident quae quod, similique sunt tenetur ullam ut.</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, voluptates?</p>
                        <p className="lead">
                            <Link to="/check" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Test now</Link>
                        </p>
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

export default HomePage;
