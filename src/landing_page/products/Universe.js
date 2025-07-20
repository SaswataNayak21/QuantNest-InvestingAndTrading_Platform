import React from 'react';

function Universe() {
    return ( 
        <div className="container mt-5">
      <div className="row text-center">
        <h1>The Quant Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
  {[
    {
      logo: "media/images/smallcaseLogo.png",
      label: "Thematic investing platform",
    },
    {
      logo: "media/images/streakLogo.png",
      label: "Algo & strategy platform",
    },
    {
      logo: "media/images/sensibullLogo.svg",
      label: "Options trading platform",
    },
    {
      logo: "media/images/zerodhaFundhouse.png",
      label: "Asset management venture",
    },
    {
      logo: "media/images/goldenpiLogo.png",
      label: "Bond trading platform",
    },
    {
      logo: "media/images/dittoLogo.png",
      label: "Insurance advisory platform",
    },
  ].map((item, index) => (
    <div
      key={index}
      style={{
        width: '30%',
        minWidth: '200px',
        margin: '20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src={item.logo}
        alt={item.label}
        style={{
          maxHeight: '48px',
          marginBottom: '12px',
          objectFit: 'contain',
        }}
      />
      <p style={{ fontSize: '14px', color: '#6c757d', margin: 0 }}>{item.label}</p>
    </div>
  ))}
</div>

        <button
          className="p-2 btn btn-primary fs-5 mt-8"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
     );
}

export default Universe;