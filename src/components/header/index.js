import Filtersection from "../filtersection";
import "./index.css";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <div className="Gre-Stripy">
          <ul className="Grey-strip-logo">
            <li>
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715446950/Frame_34_smlbjq.png"
                alt="frame-34"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715448053/Frame_33_knlyrp.png"
                alt="frame-33"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715448087/Frame_32_bgztak.png"
                alt="frame-32"
              />
            </li>
          </ul>
        </div>
        <div className="header">
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715448465/Vector_nfyhfy.png"
                alt="Vector"
                className="vector-logo"
              />
            </li>
          </ul>
          <h1 className="logo">LOGO</h1>
          <ul className="logo-section">
            <li>
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715449171/search-normal_azmapb.png"
                alt="search"
                className="icon"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715449217/heart_u1kv3n.png"
                alt="heart"
                className="icon"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715449217/shopping-bag_gq5kjv.png"
                alt="shopping-bag"
                className="icon"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dtll9buf5/image/upload/v1715449217/profile_kw68cf.png"
                alt="profile"
                className="icon"
              />
            </li>
            <li>
              <select className="select">
                <option>ENG</option>
                <option>HND</option>
                <option>TEL</option>
              </select>
            </li>
          </ul>
        </div>
        <ul className="nav">
          <li className="nav-option">SHOP</li>
          <li className="nav-option">STORIES</li>
          <li className="nav-option">ABOUT</li>
          <li className="nav-option">CONTACT US</li>
        </ul>
        <div>
          <hr />
        </div>
        <div className="content">
          <h2 className="h1">DISCOVER OUR PRODUCTS</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
        <Filtersection />
      </header>
    </>
  );
};
export default Header;
