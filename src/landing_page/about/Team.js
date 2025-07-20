import React from 'react';

function Team() {
    return (  
        <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center "> Made with ❤️ </h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/saswat.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Saswata Kumar Nayak</h4>
          <h6>Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
  Saswata bootstrapped and founded <strong>Quantnest</strong> with a vision to make intelligent investing accessible to all. Frustrated by the lack of insight-driven tools for retail investors, he set out to build a platform that bridges the gap between data science and stock market decisions.
</p>
<p>
  Today, Quantnest is helping a new generation of investors grow their wealth quantitatively — with clarity, transparency, and precision.
</p>
<p>
  I believe in the power of technology to transform investing. By combining quantitative models with user-friendly interfaces, we can empower anyone to invest intelligently and achieve their financial goals.
</p>
<p>
  Connect on <a href="">Homepage</a> / <a href="https://github.com/SaswataNayak21">GitHub</a> / <a href="https://www.instagram.com/bigbadheaded/">Instagram</a>
</p>

        </div>
      </div>
    </div>
    );
}

export default Team;