import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/Routes";
import Image from "../../assets/logo_1.png";

const Navbar: React.FC = () => {
  const [role, setRole] = useState<number | null>(0);
  useEffect(() => {
    if (window.location.pathname != "/") {
      setRole(1);
    } else {
      setRole(0);
    }
  });
  return (
    <>
      {role == 0 ? (
        <header className="hh-header flex justify-center border-b">
          <div className="flex w-full justify-between max-w-screen-xl py-4 px-4 items-center">
            <div className="flex flex-1">
              <img
                className="hh-company-logo max-h-16"
                src={Image}
                alt="JSC Bank of Georgia Logo"
              />
            </div>
          </div>
        </header>
      ) : (
        <header className="hh-header flex justify-center border-b">
          <div className="flex w-full justify-between max-w-screen-xl py-4 px-4 items-center">
            <div className="flex flex-1">
              <Link to={HOME} title="JSC Bank of Georgia">
                <img
                  className="hh-company-logo max-h-16"
                  src={Image}
                  alt="JSC Bank of Georgia Logo"
                />
              </Link>
            </div>

            <nav className="flex flex-1 justify-end">
              <Link
                to={HOME}
                title="&#x10DB;&#x10D8;&#x10DB;&#x10D3;&#x10D8;&#x10DC;&#x10D0;&#x10E0;&#x10D4; &#x10D5;&#x10D0;&#x10D9;&#x10D0;&#x10DC;&#x10E1;&#x10D8;&#x10D4;&#x10D1;&#x10D6;&#x10D4; &#x10D3;&#x10D0;&#x10D1;&#x10E0;&#x10E3;&#x10DC;&#x10D4;&#x10D1;&#x10D0;"
                className="user-color p-2 border-2 rounded hh-back-link"
                style={{ fontFamily: "MarkGEO" }}
              >
                &#x10DB;&#x10D8;&#x10DB;&#x10D3;&#x10D8;&#x10DC;&#x10D0;&#x10E0;&#x10D4;
                &#x10D5;&#x10D0;&#x10D9;&#x10D0;&#x10DC;&#x10E1;&#x10D8;&#x10D4;&#x10D1;&#x10D6;&#x10D4;
                &#x10D3;&#x10D0;&#x10D1;&#x10E0;&#x10E3;&#x10DC;&#x10D4;&#x10D1;&#x10D0;
              </Link>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
