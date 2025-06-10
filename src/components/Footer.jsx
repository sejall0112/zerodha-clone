import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
        <div className="logo">
          <img src="./zeroda-logo.svg" alt="Zerodha Logo" />
        </div>
          <p>© 2010 - 2025, Zerodha Broking Ltd. <br />All rights reserved.</p>
          <div className="social-icons">
            <i className="fa-brands fa-x-twitter" />
            <i className="fa-brands fa-facebook" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-linkedin" />
            <i className="fa-brands fa-youtube" />
            <i className="fa-brands fa-whatsapp" />
            <i className="fa-brands fa-telegram" />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Account</h4>
            <ul>
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
              <li>Referral program</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>

          <div>
            <h4>Quick links</h4>
            <ul>
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          <br />
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances{' '}
          <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a> ...
        </p>
        <p>
          Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          <a href="/grievances">Grievances Redressal Mechanism</a>
        </p>
        <p>
         Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
        </p>
        <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
        </p>
      </div>

      <div className="footer-links-bar">
        <a href="/nse">NSE</a>
        <a href="/bse">BSE</a>
        <a href="/mcx">MCX</a>
        <a href="/terms">Terms & conditions</a>
        <a href="/policies">Policies & procedures</a>
        <a href="/privacy">Privacy policy</a>
        <a href="/disclosure">Disclosure</a>
        <a href="/attention">For investor's attention</a>
        <a href="/charter">Investor charter</a>
      </div>
    </footer>
  );
};

export default Footer;
