import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-section">
        <div>
          <h3>Be the first to know</h3>
          <p>Sign up for updates from mettā muse.</p>
          <input type="gmail" />
          <button>Subscribe</button>
        </div>
        <div>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>Currency</h3>
          <div className="usa-logo">
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715509203/United_States_of_America_US_simn19.png"
              alt="usa-flag"
              className="usa"
            />
            <p>+ USD</p>
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className="top-section">
        <div>
          <h3>mettā muse</h3>
          <p>About</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h3>Follow Us</h3>

          <ul className="social-media">
            <li>
              {" "}
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715510146/Insta_xpgqgb.png"
                alt="insta"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715510146/mdi_linkedin_gzz30c.png"
                alt="linked"
                className="linkedin"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
