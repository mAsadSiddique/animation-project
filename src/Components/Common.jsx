import React from 'react';
import { NavLink } from 'react-router-dom';
// import web from '../../src/images/bike-illustration_1x.png'

function Common(props) {



    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="d-flex justify-content-right">
                                <div className="col-mid-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-left flex-column" >
                                    <h1 className="d-flex flex-column">
                                        {props.name}
                                        <strong className="brand-name"> Khan Motors </strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are Team of Well Experienced Business Man
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink
                                            to={props.visit}
                                            className="btn-get-started">
                                            {props.btnName}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                                    <img src={props.imgSrc} className="img-fluid animated" alt="Home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Common;