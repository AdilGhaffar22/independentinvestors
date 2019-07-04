import React from "react";
function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 banner">
          <div className="row container mx-auto">
            <div className="col-md-8">
              <h1 className="title h6 font-weight-bold">HIGH-PERFORMANCE INVESTMENTS FROM UK’S TOP INVESTMENT COMPANY</h1>
              <h1 className="sub-title h1 my-4">Enjoy Up To <strong>35%</strong> <br/> Yearly Returns</h1>
              <ul className="navbar-nav">
                <li className="pt-1"><img src="./images/tick-b.png" className="pr-2" alt=""/><strong>Custom Portfolios:</strong> Flexible Investment Solutions</li>
                <li className="pt-1"><img src="./images/tick-b.png" className="pr-2" alt=""/><strong>Fully Managed:</strong> Personalized Services Available 24x7</li>
                <li className="pt-1"><img src="./images/tick-b.png" className="pr-2" alt=""/><strong>Secure Returns:</strong> Safe, Secure & Consistent Interest Returns</li>
                <li className="pt-1"><img src="./images/tick-b.png" className="pr-2" alt=""/><strong>Fully Regulated:</strong> FCA Regulated & FSCS Covered Funds</li>
              </ul>
            </div>
            <div className="col-md-4 p-0">
              <form action="" className="bg-white text-center p-4">
                <h6 className="font-weight-bold">Achieve Your Financial Goals By Investing With Us Today!</h6>
                <p>Fill in the form to reach out to us and we will call you back in 24 hours.</p>
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
          </div>
        </div>
      </div>
      <img src="./images/offer-new.png" className="c-image" alt=""/>
      <img src="./images/top-arrow.png" alt="" className="a-image"/>
      <div className="row p-5 s-row">
        <div className="col-md-3 text-center">
          <h1 className="font-weight-bold">35%</h1>
          <span>Maximum Yearly <br/> Returns</span>
        </div>
        <div className="col-md-3 text-center">
        <h1 className="font-weight-bold">100%</h1>
          <span>Capital <br/> Protection</span>
        </div>
        <div className="col-md-3 text-center">
        <h1 className="font-weight-bold">5k</h1>
          <span>Minimum <br/>Investment Capital</span>
        </div>
        <div className="col-md-3 text-center">
        <h1 className="font-weight-bold">80k</h1>
          <span>Maximum <br/>Coverage By FSCS</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
