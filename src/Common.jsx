import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


const Common = (props) =>{
    return(
        <>
            <section className="d-flex align-items-center mt-5">
                <div className="container-fluid mt-5">
                    <div className="row ">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {props.name} <strong className="brand-name">Binary Web Learning</strong>
                                    </h1>
                                    <h5 className="my-3">We are the team of talented developer making websites</h5>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-outline-primary">{props.btn_name}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img src={props.imgsrc} className="image-fluid" width="100%" height="300" alt="web is img" />
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="footer text-center">
                <div className="copyright">
                    <h6>@Copyright-2020 || Developed by Sohailul Alam</h6>
                </div>
            </section>
        </>
    )
}

export default Common;