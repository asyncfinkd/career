import Actions from 'actions/ui/header';
import React from 'react';

export default function Header() {
  const [role, setRole] = Actions.useState<number | null>(0);

  Actions.useEffect(() => {
    if (window.location.pathname != '/') {
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
              <Actions.Image
                className="hh-company-logo max-h-16"
                src={Actions.Logo}
                alt="JSC Bank of Georgia Logo"
              />
            </div>
          </div>
        </header>
      ) : (
        <header className="hh-header flex justify-center border-b">
          <div className="flex w-full justify-between max-w-screen-xl py-4 px-4 items-center">
            <div className="flex flex-1">
              <Actions.Link href="/">
                <Actions.Image
                  src={Actions.Logo}
                  className="hh-company-logo max-h-16"
                  alt="JSC Bank of Georgia Logo"
                />
              </Actions.Link>
            </div>

            <nav className="flex flex-1 justify-end">
              <Actions.Link href="/">
                <a
                  className="user-color p-2 border-2 rounded hh-back-link"
                  style={{ fontFamily: 'MarkGEO' }}
                >
                  &#x10DB;&#x10D8;&#x10DB;&#x10D3;&#x10D8;&#x10DC;&#x10D0;&#x10E0;&#x10D4;
                  &#x10D5;&#x10D0;&#x10D9;&#x10D0;&#x10DC;&#x10E1;&#x10D8;&#x10D4;&#x10D1;&#x10D6;&#x10D4;
                  &#x10D3;&#x10D0;&#x10D1;&#x10E0;&#x10E3;&#x10DC;&#x10D4;&#x10D1;&#x10D0;
                </a>
              </Actions.Link>
            </nav>
          </div>
        </header>
      )}
    </>
  );
}
