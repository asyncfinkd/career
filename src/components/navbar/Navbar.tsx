import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/Routes";

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
                src="https://zartis.blob.core.windows.net/user/Company_8148/logo_1.png?sv=2019-07-07&sr=b&sig=7hbEht7LlYyviLIvR0Ga5e%2Fk3IfPKMSs5evBymTfIaI%3D&se=2021-09-14T14%3A56%3A00Z&sp=r&rscd=inline%3Bfilename%3D%22logo_1.png%22"
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
                  src="https://zartis.blob.core.windows.net/user/Company_8148/logo_1.png?sv=2019-07-07&sr=b&sig=7hbEht7LlYyviLIvR0Ga5e%2Fk3IfPKMSs5evBymTfIaI%3D&se=2021-09-14T14%3A56%3A00Z&sp=r&rscd=inline%3Bfilename%3D%22logo_1.png%22"
                  alt="JSC Bank of Georgia Logo"
                />
              </Link>
            </div>

            <nav className="flex flex-1 justify-end">
              <Link
                to={HOME}
                title="&#x10DB;&#x10D8;&#x10DB;&#x10D3;&#x10D8;&#x10DC;&#x10D0;&#x10E0;&#x10D4; &#x10D5;&#x10D0;&#x10D9;&#x10D0;&#x10DC;&#x10E1;&#x10D8;&#x10D4;&#x10D1;&#x10D6;&#x10D4; &#x10D3;&#x10D0;&#x10D1;&#x10E0;&#x10E3;&#x10DC;&#x10D4;&#x10D1;&#x10D0;"
                className="user-color p-2 border-2 rounded hh-back-link"
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
