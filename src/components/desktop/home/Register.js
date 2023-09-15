import {useEffect, useState} from "react";
import Head from "next/head";
import {str_replace} from "../../../helper/php.helper";
import Container from "../../../layouts/deskop/Container";
import BootStrapModal from "../../../elements/modal";

const Register = (data = {}) => {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <>
            <Container>
                <Head>
                    <title>Register - ArdorNext</title>
                    <meta name="description" content="Generated by create next app"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <div className="row flex-center min-vh-100 py-5">
                    <div className="col-sm-10 col-md-8 col-lg-5 col-xl-5 col-xxl-3"><a
                        className="d-flex flex-center text-decoration-none mb-4" href="../../../index.html">
                        <div className="d-flex align-items-center fw-bolder fs-5 d-inline-block">
                            <img src="/site/images/ardornext_logo.png" alt="phoenix" width="100%"/>
                        </div>
                    </a>
                        <div className="text-center mb-7">
                            <h3 className="text-1000">Sign Up</h3>
                            <p className="text-700">Create your account today</p>
                        </div>
                        <form>
                            <div className="mb-3 text-start">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input className="form-control" id="name" type="text" placeholder="Name"/>
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label" htmlFor="email">Email address</label>
                                <input className="form-control" id="email" type="email" placeholder="name@ardorsys.com"/>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-md-6">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input className="form-control form-icon-input" id="password" type="password" placeholder="Password"/>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                    <input className="form-control form-icon-input" id="confirmPassword" type="password" placeholder="Confirm Password"/>
                                </div>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" id="termsService" type="checkbox"/>
                                <label
                                className="form-label fs--1 text-none" htmlFor="termsService">I accept the <a
                                href="#!">terms </a>and <a href="#!">privacy policy</a></label></div>
                            <button className="btn btn-primary w-100 mb-3">Sign up</button>
                            <div className="text-center">
                                <a className="fs--1 fw-bold text-decoration-underline text-secondary" href="#" data-bs-toggle="modal"
                                   data-bs-target="#loginModal">Signin to an existing account</a>
                            </div>
                        </form>
                    </div>
                </div>

            </Container>

            <style jsx>
                {`
                  .b-example-divider {
                    height: 3rem;
                    background-color: rgba(0, 0, 0, .1);
                    border: solid rgba(0, 0, 0, .15);
                    border-width: 1px 0;
                    box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
                  }

                  .card-cover {
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;
                  }

                  .flex-center {
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                  }

                `}
            </style>

        </>
    )
}

export default Register;