import React from 'react';

export default function Hero() {
  return (
    <>
      <div
        className="hh-banner-image flex items-center justify-center sec sec-hero relative bg-cover bg-no-repeat bg-center h-64 sm:h-64 md:h-88 lg:h-120"
        style={{
          backgroundImage: `url(
            "https://zartis.blob.core.windows.net:443/images/images/Company_8148/_a2a9137cropped.jpg"
          )`,
        }}
      >
        <div className="hh-banner-overlay absolute inset-0 bg-black opacity-25"></div>
        <div className="z-10">
          <h2
            className="hh-banner-text text-white text-center text-3xl sm:text-4xl md:text-5xl max-w-3xl font-semibold"
            style={{ fontFamily: 'BOG' }}
          >
            &#x10E8;&#x10D4;&#x10DB;&#x10DD;&#x10D2;&#x10D5;&#x10D8;&#x10D4;&#x10E0;&#x10D7;&#x10D3;&#x10D8;&#x10D7;
          </h2>
        </div>
      </div>
    </>
  );
}
