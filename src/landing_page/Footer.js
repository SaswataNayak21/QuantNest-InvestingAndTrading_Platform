import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', paddingTop: '3rem', paddingBottom: '3rem', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
      <div className="container border-top pt-5">
        <div className="row text-start text-muted">
          <div className="col-md-3 mb-4">
            <img src="media/images/download.svg" style={{ width: '85%', marginBottom: '1rem' }} alt="Quantnest Logo" />
            <p className="text-secondary">
              &copy; 2025, Quantnest Pvt. Ltd. <br />All rights reserved.
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <p className="fw-semibold text-dark mb-2">Company</p>
            <div className="d-flex flex-column gap-1">
              <a href="#" className="text-decoration-none text-secondary">About</a>
              <a href="#" className="text-decoration-none text-secondary">Products</a>
              <a href="#" className="text-decoration-none text-secondary">Pricing</a>
              <a href="#" className="text-decoration-none text-secondary">Referral Programme</a>
              <a href="#" className="text-decoration-none text-secondary">Careers</a>
              <a href="#" className="text-decoration-none text-secondary">Quantnest.tech</a>
              <a href="#" className="text-decoration-none text-secondary">Press & Media</a>
              <a href="#" className="text-decoration-none text-secondary">Quantnest Cares (CSR)</a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <p className="fw-semibold text-dark mb-2">Support</p>
            <div className="d-flex flex-column gap-1">
              <a href="#" className="text-decoration-none text-secondary">Contact</a>
              <a href="#" className="text-decoration-none text-secondary">Support Portal</a>
              <a href="#" className="text-decoration-none text-secondary">Q-Connect Blog</a>
              <a href="#" className="text-decoration-none text-secondary">List of Charges</a>
              <a href="#" className="text-decoration-none text-secondary">Downloads & Resources</a>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <p className="fw-semibold text-dark mb-2">Account</p>
            <div className="d-flex flex-column gap-1">
              <a href="#" className="text-decoration-none text-secondary">Open an Account</a>
              <a href="#" className="text-decoration-none text-secondary">Fund Transfer</a>
              <a href="#" className="text-decoration-none text-secondary">60 Day Challenge</a>
            </div>
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: '13px', lineHeight: '1.6' }}>
          <p>
            Quantnest Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. CDSL: Depository services through Quantnest Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015. Commodity Trading
            through Quantnest Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238. Registered Address: #153/154, 4th Cross, Dollars
            Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India.
          </p>

          <p>
            For complaints related to securities broking, email: <a href="mailto:complaints@quantnest.com">complaints@quantnest.com</a>. For DP related issues:
            <a href="mailto:dp@quantnest.com"> dp@quantnest.com</a>. Please read the Risk Disclosure Document as prescribed by SEBI.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
            Required details: Name, PAN, Address, Mobile Number, Email ID.
          </p>

          <p>
            Investments in securities market are subject to market risks; read all related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
            Receive information of your transactions directly from the Exchange. KYC is one-time while dealing in securities.
            Once done through a SEBI registered intermediary, it need not be repeated. If you’re subscribing to an IPO, no need to issue a cheque.
            Funds remain in your bank account until allotment."
          </p>

          <p>
            Quantnest does not provide stock tips or authorize any individual to trade on behalf of others. If anyone claims otherwise, please create a support ticket.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
