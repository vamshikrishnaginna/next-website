import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/DigitalMarketing/Banner';
import Services from '../components/DigitalMarketing/Services';
import Overview from '../components/DigitalMarketing/Overview';
import AnalysisForm from '../components/DigitalMarketing/AnalysisForm';
import Works from '../components/DigitalMarketing/Works';
import Team from '../components/DigitalMarketing/Team';
import Blog from '../components/DigitalMarketing/Blog';
import Feedback from '../components/DigitalMarketing/Feedback';
import GetStarted from '../components/DigitalMarketing/GetStarted';
import Platform from '../components/DigitalMarketing/Platform';
import FaqContent from '../components/Faq/FaqContent';


class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Banner/>
                <Overview/>
                <Services/>
                <Works/>
                <AnalysisForm/>
                <FaqContent/>
                {/*<Platform/>*/}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Index;