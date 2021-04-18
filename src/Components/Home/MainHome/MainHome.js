import React from 'react';
import CuttingBeard from '../CuttingBeard/CuttingBeard';
import ExpertStylists from '../ExpertStylists/ExpertStylists';
import Footer from '../Footer/Footer';
import GetOffer from '../GetOffer/GetOffer';
import Header from '../Header/Header';
import Servicess from '../Servicess/Servicess';
import UserReview from '../UserReview/UserReview';

const MainHome = () => {
    return (
        <div>
            <Header></Header>
            <Servicess></Servicess>
            <ExpertStylists></ExpertStylists>
            <CuttingBeard></CuttingBeard>
            <GetOffer></GetOffer>
            <UserReview></UserReview>
            <Footer></Footer>
        </div>
    );
};

export default MainHome;