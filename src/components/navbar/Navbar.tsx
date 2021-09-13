import React from "react";

const Navbar: React.FC = () => {
    return(
        <>
        <header className="hh-header flex justify-center border-b">
        <div className="flex w-full justify-between max-w-screen-xl py-4 px-4 items-center">
          <div className="flex flex-1">
            <img
              className="hh-company-logo max-h-16"
              src="https://zartis.blob.core.windows.net/user/Company_8148/logo_1.png?sv=2019-07-07&sr=b&sig=mGv%2FlgJJrKhug2xgwgKrOx6Kc7YTdsgXiypmIrBC2%2FA%3D&se=2021-09-13T11%3A41%3A55Z&sp=r&rscd=inline%3Bfilename%3D%22logo_1.png%22"
              alt="JSC Bank of Georgia Logo"
            />
          </div>
        </div>
      </header>
        </>
    )
}

export default Navbar;