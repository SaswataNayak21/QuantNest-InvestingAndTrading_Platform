import React from 'react';

const ticketSections = [
  {
    title: 'Account Opening',
    links: [
      'Online Account Opening',
      'Offline Account Opening',
      'Company, Partnership and HUF Account',
      'Opening',
      'NRI Account Opening',
      'Charges at QuantNest',
      'QuantNest IDFC FIRST Bank 3-in-1 Account',
      'Getting Started',
    ],
  },
  {
    title: 'Your QuantNest Account',
    links: [
      'Login Issues',
      'Password Reset',
      'Change Phone Number',
      'Modify Email',
      'Close Account',
    ],
  },
  {
    title: 'Kite',
    links: [
      'Kite Web Features',
      'Kite App Features',
      'Order Types',
      'Charts and Indicators',
    ],
  },
  {
    title: 'Funds',
    links: [
      'Adding Funds',
      'Withdrawal Timeline',
      'Fund Reversal',
      'Bank Account Issues',
    ],
  },
  {
    title: 'Console',
    links: [
      'Reports and Statements',
      'P&L Statements',
      'Tax Documents',
      'Holdings Overview',
    ],
  },
  {
    title: 'Coin',
    links: [
      'Buy Mutual Funds',
      'SIP Setup',
      'Coin Mobile App',
      'Redemption Process',
    ],
  },
];

function CreateTicket() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '40px' }}>
        To create a ticket, select a relevant topic
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {ticketSections.map((section, idx) => (
          <div
            key={idx}
            style={{
              flex: '1 1 calc(33.33% - 20px)',
              minWidth: '280px',
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            <h4 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
              <i
                className="fa fa-plus-circle"
                aria-hidden="true"
                style={{ color: '#007bff', marginRight: '8px' }}
              ></i>{' '}
              {section.title}
            </h4>
            {section.links.map((link, i) => (
              <a
                key={i}
                href="#"
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: '#333',
                  lineHeight: '2.2',
                  fontSize: '14px',
                }}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
