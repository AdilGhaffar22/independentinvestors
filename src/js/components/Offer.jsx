import React from 'react';

function Offer () {
    return (
        <div className="offer">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h3 className="text-center font-weight-normal">We help our clients achieve their financial goals with <strong>100% capital protection.</strong></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 pl-5 mt-3 pr-4">
                        <p className="pt-3">As a leading investment firm with access to some of the high performing investment funds in the UK, we handle investments from as low £5,000 to £1,000,000+ and deliver consistent returns to all our clients.</p>
                        <p className="pt-2">We bring the best possible financial gains to each and every one of our client and ensure 100% capital protection all the while. Our ongoing conversations with them help in maintaining better client relationships and understand their financial goals better. With this information, we further help perfect the portfolios through continuous assessments. We also provide a clear stress-free exit strategy to our clients, making business with us completely hassle-free.</p>
                        <p className="pt-2">For more information, feel free to contact us by email or phone. We are happy to help always.</p>
                    </div>
                    <div className="col-md-6 my-auto">
                        <img src="./images/happy-family.jpg" className="w-100" alt=""/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="row mt-5 pt-5">
                    <div className="col-md-8">
                        <h2 className="mt-3">Compound Interest Calculator</h2>
                        <p className="pt-2">To effectively grow your wealth, you must systematically fund your investments over a period of time. This can be added as smaller deposits to a savings account, from where you can divert to other plans at a later time.</p>
                        <p className="pt-2 pr-3">TOur compound interest calculator will help you understand how this strategy could work in your favour.</p>
                    </div>
                    <div className="col-md-4 p-0">
                        <form action="" className="form p-2">
                            <div className="container mt-2">
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="" className="font-weight-bold">Principal Amount:</label>
                                        <input type="text" className="p-1" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className="font-weight-bold">Interest Rate:</label>
                                        <input type="text" className="p-1" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="" className="mt-2 font-weight-bold">Compounded:</label>
                                        <select name="" id="" className="p-1">
                                            <option value="">Monthly</option>
                                            <option value="">Quarterly</option>
                                            <option value="">Half-yearly</option>
                                            <option value="">Yearly</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="" className="mt-2 font-weight-bold">Period (months):</label>
                                        <input type="text" className="p-1" />
                                    </div>
                                    <button className="p-1 px-2 my-2 mt-1 ml-3">SUBMIT</button>
                                </div>
                            </div>
                        </form>
                        <div className="foot p-2 pl-4 text-white p-0">
                            <p className="font-weight-bold mb-0" style={{fontSize : "12px"}}>Interest Amount: </p>
                            <p className="font-weight-bold mb-0" style={{fontSize : "25px"}}>£ 0.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Offer;