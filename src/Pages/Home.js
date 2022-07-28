import React from "react";

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to <span id="quickpocket">QuickPocket!</span>
      </h1>
      <h2 className="home-phrase" id="left">
        Where you can track your funds <span id="anytime">anytime</span>,{" "}
        <span id="anywhere">anywhere</span>.
      </h2>
      <img
        className="home-image"
        id="right"
        src="https://st.depositphotos.com/2069237/4425/i/450/depositphotos_44256655-stock-photo-man-on-smart-phone-business.jpg"
        alt="stockimage"
      />
    </div>
  );
}
