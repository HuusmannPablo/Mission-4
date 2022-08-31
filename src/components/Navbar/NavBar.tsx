import React from "react";
import { menuItems } from "./Menuitems";

export const NavBar: React.FC = () => {
  return (
    <nav className="NB-main-flex-container">
      <div className="NB-img-container">
        <img
          className="turners-logo"
          alt="Turners Logo"
          src="https://stautotraderprod001.blob.core.windows.net/at-listing/files/10/10853/4d93c94b-bb4e-437d-8d9a-2b6565e4c8df.jpg?sv=2018-03-28&sr=b&sig=AwGlpJ%2B3baLiuQkIdQSratdZKgXcn1PlCgnX7dcXDp0%3D&se=2030-06-02T03%3A03%3A37Z&sp=r"
        />
      </div>

      <div className="NB-search-container">
        <p>Find a Car</p>
      </div>
      {menuItems.map((item, i) => {
        return (
          <div className="NB-menu-item-container" key={i}>
            <p className={item.class}> {item.name}</p>
          </div>
        );
      })}
      <div className="NB-button-container-one">
        <button type="button">Get A Quote</button>
      </div>
      <div className="NB-button-container">
        <button type="button">Login/Sign up</button>
      </div>
    </nav>
  );
};
