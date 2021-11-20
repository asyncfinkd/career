import Actions from 'actions/ui/modal';

export default function Modal() {
  const [pages, setPages] = Actions.useState<number>(0);
  const [showModal, setShowModal] = Actions.useState<boolean>(true);

  const renderSecondPage = (condition: any) => {
    if (condition) {
      return 'hidden';
    } else {
      return null;
    }
  };

  const acceptCookies = () => {
    document.cookie = 'accept__cookie=true';
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div
          id="cookie-disclaimer"
          className="overlay-box-shadow bg-white bottom-0 fixed flex flex-col right-0 px-8 py-4 sm:bottom-6 sm:right-6 sm:max-w-sm sm:rounded-md z-10"
        >
          <div
            id="cookies-message"
            className={`${renderSecondPage(pages == 1)}`}
          >
            <p className="">
              This website uses cookies to improve your web experience. By using
              this site, you agree to the use of cookies.{' '}
              <a
                href="https://hirehive.com/privacy-policy/"
                className="user-color underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
            <div className="mt-4 flex justify-between">
              <button
                id="manageCookies"
                type="button"
                className="underline user-color"
                onClick={() => setPages(1)}
              >
                Manage cookies
              </button>

              <button
                id="acceptCookies"
                type="button"
                className="btn-color text-white px-4 py-1 rounded-md"
                onClick={() => acceptCookies()}
              >
                Accept cookies
              </button>
            </div>
          </div>
          <div id="cookies-panel" className={`${renderSecondPage(pages == 0)}`}>
            <div className="flex">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Choose your cookie settings
              </h3>

              <div className="flex items-center ml-auto pl-3">
                <button
                  id="closeCookies"
                  className="inline-flex bg-gray-50 rounded-md p-1.5 user-color hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                  onClick={() => setPages(0)}
                >
                  <span className="sr-only">Dismiss</span>
                  <Actions.SVG src={Actions.s.DISMISS_SVG} />
                </button>
              </div>
            </div>

            <div className="mt-2">
              <form name="cookies-form">
                <div className="relative p-4 flex border-gray-300 border">
                  <div className="flex items-center">
                    <input
                      id="settings-option-1"
                      name="privacy_setting"
                      type="checkbox"
                      value="functional"
                      checked
                      disabled
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="settings-option-1"
                      className="ml-3 flex flex-col cursor-pointer flex-1"
                    >
                      <span className="block text-sm font-medium text-gray-900">
                        Necessary cookies
                      </span>
                      <span className="block text-sm text-gray-600">
                        These are required to enable core site functionality
                      </span>
                    </label>
                  </div>
                </div>

                <div className="relative p-4 flex mt-2 border-gray-300 border">
                  <div className="flex items-center">
                    <input
                      value="analytics"
                      onChange={(e: any) => 'analytics'}
                      id="settings-option-2"
                      name="privacy_setting"
                      type="checkbox"
                      checked={true}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="settings-option-2"
                      className="ml-3 flex flex-col cursor-pointer flex-1"
                    >
                      <span className="block text-sm font-medium text-gray-900">
                        Statistics cookies
                      </span>
                      <span className="block text-sm text-gray-600">
                        These allow us to analyze site usage so we can measure
                        and improve performance
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    className="btn-color text-white px-4 py-1 rounded-md"
                    onClick={() => acceptCookies()}
                  >
                    Save settings
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
