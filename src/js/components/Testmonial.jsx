import React from 'react';


function Testmonial () {
    return (
        <div className="container-fluid testmonial mt-5">
            <div className="row">
                <div className="col-12 text-center pt-5">
                    <h2>Happy Clients</h2>
                    <p className="pt-2">See what our happy clients got to say about us</p>
                </div>
            </div>
            <div className="row flex-nowrap mx-3 container mt-3 mb-5">
                <div className="col-md-4 bg-white text-center p-4">
                    <img src="./images/testi-1.jpg" className="mt-2" alt=""/>
                    <p className="pt-5">" Independent investors have been managing my portfolios for more than 5 years now. Apart from helping me make sound financial decisions, the further ensure that every penny you invest is accounted for. I am truly happy with their work. “</p>
                    <p className="font-weight-bold">TERRY PARKER</p>
                </div>
                <div className="col-md-4 bg-white ml-4 text-center p-4">
                    <img src="./images/testi-2.jpg" className="mt-2" alt=""/>
                    <p className="pt-5">" I have invested with various other investment firms in the UK, but none has exceeded my expectations like Independent Investors. Their personalized services ensured stable and consistent returns. The team is professional yet very approachable and has helped me gain the best returns from the investments. I would definitely recommend them to my acquaintances. “</p>
                    <p className="font-weight-bold">MATHEW JENSON</p>
                </div>
                <div className="col-md-4 bg-white ml-4 text-center p-4">
                    <img src="./images/testi-3.jpg" className="mt-2" alt=""/>
                    <p className="pt-5">“The personalized services from Independent investors has always helped me with my financial goals. The team is highly proactive and available to answer queries at all times. I would highly recommend their services."</p>
                    <p className="font-weight-bold">MARIAM SALAMR</p>
                </div>
            </div>
            <hr/>
            <div className="row mx-2 my-5 container">
                <div className="col-md-5">
                    <form action="" className="bg-white text-center p-4">
                        <h3 className="my-3 pb-3 text-center">Achieve Your Financial Goals By Investing With Us Today!</h3>
                        <input type="text" name="" className="bg-light p-2 border" placeholder="Name" />
                        <input type="text" name="" className="bg-light ml-2 p-2 border" placeholder="Phone" />
                        <input type="email" name="" className="bg-light p-2 border my-3" placeholder="Email Address" />
                        <select name="investment" className="bg-light p-2 border" aria-required="true" aria-invalid="false">
                            <option value>Which investment option are you interested in?</option>
                            <option value="value-1">Deposit & Savings</option>
                            <option value="">Bond Funds</option>
                            <option value="">Equity Funds</option>
                            <option value="">Fixed Rate Bonds</option>
                        </select>
                        <select name="investment" className="bg-light my-3 p-2 border" aria-required="true" aria-invalid="false">
                            <option value>Investment sum</option>
                            <option value="value-1">£5,000 - £25,000</option>
                            <option value="">£25,000 - £50,000</option>
                            <option value="">£50,000+</option>
                        </select>
                        <button className="btn d-block w-100 text-white mt-1">CONTACT US</button>
                    </form>
                </div>
                <div className="col-md-7">
                    <p className="test-1 mt-5 ml-3">REACH OUT TO US FOR CUSTOM FINANCIAL COUNSEL AND GUIDANCE.</p>
                    <p className="test-2 ml-3 mt-4">We are a team of investment specialists focused on bringing you tailored investment plans to help you realise your financial goals.</p>
                    <p className="test-1 mt-4 ml-3">HAVE ANY QUESTIONS? REACH US BY PHONE.</p>
                    <p className="test-2 mt-3 ml-3">Call us on <span className="test-1 ml-2">+44 203 695 1157</span> </p>
                    <p className="test-1 mt-3 ml-3">GET MORE INFO QUICKLY.</p>
                    <p className="test-2 mt-3 ml-3">Fill in the form at left and we will contact you within 24 hours.</p>
                </div>
            </div>
        </div>
    )
}

export default Testmonial;