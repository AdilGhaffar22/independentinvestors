import React from 'react';

function About () {
    return (
        <div className="container-fluid about p-0">
            <div className="row container mx-auto">
                <div className="col">
                    <h1 className="font-weight-bold">About Our Company</h1>
                </div>
            </div>
            <div className="row container mx-auto mb-5">
                <div className="col-md-6">
                    <p className="pt-2">Independent Investors is a leading investment company based in the United Kingdom. Founded in the year 2008, we have been in the investment industry for more than a decade, serving our clients through the years. Our team of 40 trusted associates boasts of a cumulative 250 years of experience in investment trading, investment sales and portfolio management for clients from diverse backgrounds.</p>
                    <p className="pt-2">As a finance team, we tend to our client’s financial goals, guiding them to make the best investments. We further help them align these investments according to changing market values and adjust their portfolios from time to time. Our services include FSCS protected funds and savings options like term savings deposit accounts, fixed-term bonds, global bond index funds, ETFs and index-linked funds.</p>
                </div>
                <div className="col-md-6">
                    <img src="./images/independent-investements.jpg" className="w-100" alt=""/>
                </div>
            </div>
            <div className="container-fluid about-2 m-0 p-0">
                <div className="row m-0">
                    <div className="col-12">
                        <h2 className="text-center my-5 offer">What We Offer</h2>
                    </div>    
                </div>  
                <div className="row m-0">
                    <div className="col-md-4 p-0 text-right">
                        <div className="d-flex flex-row-reverse mt-4 mr-5">
                            <img src="./images/new-icon.png" alt=""  />
                            <h3 className="mr-3">CONSISTENT RETURNS</h3>
                        </div>
                        <p className="ml-5 pl-1 pr-5 mr-5">We assure you that for all your investments with us, you get your returns on time, paid annually or termwise throughout the investment period.</p>
                        <div className="d-flex flex-row-reverse mt-5 mr-5">
                            <img src="./images/new-icon.png" alt=""  />
                            <h3 className="mr-3">FSCS COVERED FUNDS</h3>
                        </div>
                        <p className="ml-5 pl-1 pr-5 mr-5">We have investment funds that are covered by the Financial Services Compensation Scheme (FSCS), which provides an additional shield of protection to all investments up to £80,000.</p>
                        <div className="d-flex flex-row-reverse mt-5 mr-5">
                            <img src="./images/new-icon.png" alt=""  />
                            <h3 className="mr-3">FLEXIBILITY & PERSONALISATIONS</h3>
                        </div>
                        <p className="ml-5 pl-1 pr-5 mr-5">With us, you can personalise your portfolios with investments that are risk-free, ensure consistent returns and meet all your financial goals with the principal investment as low as £5,000.</p>
                    </div>
                    <div className="col-md-4 p-0 my-auto">
                        <img src="./images/independent-investors.png" style={{"width" : "379px"}} alt=""/>
                    </div>
                    <div className="col-md-4 p-0 text-left">
                        <div className="d-flex flex-row mt-4">
                            <img src="./images/new-icon.png" alt=""  />
                            <h3 className="ml-3">ACCESSIBLE CUSTOMER SERVICE</h3>
                        </div>
                        <p className="mr-5 pr-5 ml-5">Throughout your investment period, we provide you with 24×7 customer service, ensuring a continuous conversation with our team as and when needed.</p>
                        <div className="d-flex flex-row mt-4">
                            <img src="./images/new-icon.png" alt=""  />
                            <h3 className="ml-3">CAPITAL PROTECTION</h3>
                        </div>
                        <p className="mr-5 pr-5 ml-5">We ensure 100% capital protection at the end of the term with zero hidden charges applied. After a brief investment period, you can tune or withdraw your investment as necessary.</p>
                        <div className="d-flex flex-row mt-4">
                            <img src="./images/new-icon.png" alt=""  />
                            <h3 className="ml-3">INVESTMENT GUIDANCE</h3>
                        </div>
                        <p className="mr-5 pr-5 ml-5">We provide comprehensive guidance and advisory services for our clients on their investments for better returns on investments and portfolio management.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;