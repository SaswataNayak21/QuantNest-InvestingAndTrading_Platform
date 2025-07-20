import React from 'react';

function Hero() {
    return ( 
        <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India.
          <br />
          we believe in Invest intelligically, grow quantitatively
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            Quantnest is a next-generation stock investment platform designed to empower modern investors with intelligent, data-driven insights. Whether you're a beginner or a seasoned trader, Quantnest helps you make smarter investment decisions by leveraging powerful quantitative models, real-time analytics, and curated stock recommendations.

Our mission is to simplify investing without compromising on depth or accuracy. With features like algorithmic screening, portfolio tracking, market sentiment analysis, and risk profiling, Quantnest turns complex market data into clear, actionable insights.

At Quantnest, we believe that smart investing should be accessible to everyone — not just the experts. Start building your financial future with confidence and clarity.


          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          
        </div>
        <div className="col-6 p-5">
            <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
     );
}

export default Hero;