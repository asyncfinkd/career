import React from "react";

export default function Navbar() {
  return (
    <>
      <header className="hh-header flex justify-center border-b">
        <div className="flex w-full justify-between max-w-screen-xl py-4 px-4 items-center">
          <div className="flex flex-1">
            <img
              className="hh-company-logo max-h-16"
              src='https://zartis.blob.core.windows.net/user/Company_8148/logo_1.png?sv=2019-07-07&amp;sr=b&amp;sig=ZTOnQZ9XKSGrhQUxlIcNztqaXP5QxE18vb%2BeyDLhkQ8%3D&amp;se=2021-09-12T20%3A33%3A59Z&amp;sp=r&amp;rscd=inline%3Bfilename%3D"logo_1.png"'
              alt="JSC Bank of Georgia Logo"
            />
          </div>
        </div>
      </header>
    </>
  );
}
