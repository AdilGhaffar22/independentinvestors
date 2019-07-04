import React from "react";

function Footer() {
  return (
    <div className="container-fluid p-0">
      <footer>
        <div className="row m-0">
          <div className="col-md-4 my-5 pt-4 pl-5 p-0">
            <h3 className="ml-5">CONTACT US</h3>
            <p className="ml-5 pt-3">1 St Giles High St <br/> London WC2H <br/> 8AG UK</p>
            <p className="font-weight-bold ml-5 text-white">Phone<a href="http://" className="text-white ml-2">+44 203 695 1157</a></p>
          </div>
          <div className="col-md-8 my-5 pt-4 pr-5 p-0">
            <h3>ABOUT</h3>
            <p className="pt-3 mr-5 pr-5">Founded in 2008, Independent Investors is one of the UK’s trusted investment firms. Their financial team consists of 40 trusted associates, with a cumulative 250 years experience trading investments and managing portfolios for their vibrant clientele. Their services include FSCS protected funds and savings options like term savings deposit accounts, fixed-term bonds, global bond index funds, ETFs and index-linked funds.</p>
          </div>
        </div>
      </footer>
      <div className="footer text-center py-3">&copy; 2019 Independent Investors. All Rights Reserved.</div>
    </div>
  )
}
export default Footer;
