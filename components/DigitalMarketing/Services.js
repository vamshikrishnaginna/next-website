import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <section className="services-area ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>Technologies</h2>
                        <div className="bar"></div>
                        <p>These are some of the technolgies we mainly focus on right now. If you cant find the technology you love. Click here!!!</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-pay"></i>
                                </div>
                                <h3>JavaScript</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-music-note"></i>
                                </div>
                                <h3>Android App Development</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-optic"></i>
                                </div>
                                <h3>Google Cloud</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-pie-chart"></i>
                                </div>
                                <h3>React JS</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-deviantart"></i>
                                </div>
                                <h3>Python</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="icofont-chart-pie-alt"></i>
                                </div>
                                <h3>Machine Learning</h3>
                                <p>Sub Content</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;
