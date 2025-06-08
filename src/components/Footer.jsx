import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#103c59',
      color: 'white',
      padding: '40px 20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.5,
      fontSize: '16px',
      fontWeight: '400',
    }}
  >
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '40px',
      }}
    >
      {/* Company Info */}
      <div style={{ flex: '1 1 280px', minWidth: '250px' }}>
        <h4
          style={{
            color: '#f26c50',
            fontWeight: '700',
            fontSize: '1.2rem',
            marginBottom: '15px',
          }}
        >
          Any Time Movers AU
        </h4>
        <p style={{ marginBottom: '10px' }}>Your trusted partner for stress-free moving.</p>
        <p style={{ opacity: 0.85 }}>© {new Date().getFullYear()} Any Time Movers AU. All rights reserved.</p>
      </div>

      {/* Quick Links */}
      <div style={{ flex: '1 1 200px', minWidth: '180px' }}>
        <h4
          style={{
            color: '#f26c50',
            fontWeight: '700',
            fontSize: '1.2rem',
            marginBottom: '15px',
          }}
        >
          Quick Links
        </h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {[
            { label: 'Home', to: '/' },
            { label: 'Services', to: '/services' },
            { label: 'Get a Quote', to: '/quote' },
            { label: 'About Us', to: '/about' },
            { label: 'Gallery', to: '/gallery' },
            { label: 'Contact', to: '/contact' },
            { label: 'Privacy Policy', to: '/privacy-policy' },
          ].map(({ label, to }) => (
            <li key={to} style={{ marginBottom: '10px' }}>
              <Link
                to={to}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'color 0.3s',
                  fontSize: '16px',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#f26c50')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div style={{ flex: '1 1 280px', minWidth: '250px' }}>
        <h4
          style={{
            color: '#f26c50',
            fontWeight: '700',
            fontSize: '1.2rem',
            marginBottom: '15px',
          }}
        >
          Contact Us
        </h4>
        <a
          href="tel:0469303269"
          style={{
            color: 'white',
            textDecoration: 'none',
            display: 'block',
            marginBottom: '8px',
            fontWeight: '600',
            fontSize: '16px',
          }}
        >
          📞 0469303269
        </a>
        <p style={{ marginBottom: '8px', opacity: 0.85 }}>✉️ info@anytimemovers.com.au</p>
        <p style={{ opacity: 0.85 }}>🏢 Munno Para, Adelaide</p>

        {/* Social Icons */}
        <div
          style={{
            marginTop: '20px',
            gap: '15px',
          }}
        >
          {[
            {
              href: 'https://www.facebook.com/profile.php?id=61570093314772',
              alt: 'Facebook',
              src: 'facebook.svg',
            },
            {
              href: 'https://instagram.com',
              alt: 'Instagram',
              src: 'instagram.svg',
            },
            {
              href: 'https://www.tiktok.com/@anytimemovers0469303269',
              alt: 'TikTok',
              src: 'tiktok.svg',
            },
          ].map(({ href, alt, src }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-block', transition: 'transform 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={src}
                alt={alt}
                width="28"
                height="28"
              />
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom Acknowledgement Section */}
    <div
      style={{
        borderTop: '1px solid #f26c50',
        marginTop: '40px',
        paddingTop: '25px',
        maxWidth: '1100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '16px',
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '10px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <img src="/flag-1.png" alt="Flag 1" width="35" height="30" />
        <img src="/flag-2.png" alt="Flag 2" width="35" height="30" />
        <img src="/flag-3.png" alt="Flag 3" width="35" height="30" />
      </div>

      <p style={{ maxWidth: '800px', margin: '0 auto' }}>
        Any Time Movers AU acknowledges Aboriginal and Torres Strait Islander people as the Traditional Custodians of the land and pays respect to their Elders past, present, and emerging.
      </p>
    </div>
  </footer>
);

export default Footer;
