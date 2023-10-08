import React, { useState } from "react";
import { navbar } from "../../utils/navbar.js";

const Navbar = () => {
  const [dropVis, setDropVis] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-upper">
        <div>
          <span id="navbar-title">ShopKart</span>
        </div>
        <div className="wishlist">
          <div>
            <span className="wish">Wishlist(0)</span>
            <span>Bag(0)</span>
          </div>
        </div>
      </div>
      

      <div className="hl"></div>
      <div className="nav-contents">
        {navbar.map((nav) => {
          return nav.name === "OUR PRODUCTS" ? (
            <div className="prod">
              <p
                className="nav-content"
                style={{
                  color: "white",
                  textDecoration: dropVis ? "underline" : "none",
                  marginBottom: "1px",
                }}
                onClick={() => {
                  setDropVis(!dropVis);
                }}
              >
                {nav.name}
              </p>
              {dropVis && (
                <div className="prod-dropdown">
                  {navbar
                    .filter((nav) => nav.name === "OUR PRODUCTS")
                    .map((arr) => {
                      return arr.child.map((prod) => {
                        return <p className="prod-name">{prod.name}</p>;
                      });
                    })}
                </div>
              )}
            </div>
          ) : (
            <p className="nav-content" style={{ color: "white" }}>
              {nav.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
