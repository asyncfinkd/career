import { JobFormFixtures, JobFormMultipleFixtures } from 'fixtures/modules/job';
import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import JobFormFooter from './job-form-footer';

export default function JobForm() {
  const sanitizer = DOMPurify.sanitize;
  return (
    <>
      <div
        id="apply"
        className="md:w-5/12-1 p-4 sm:p-6 border-t-2 md:border-0 max-w-full"
      >
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-semibold text-2xl text-center">
              გამოაგზავნეთ განაცხადი
            </h3>
            <div className="flex justify-center my-6">
              <a
                href="https://apply.hirehive.com/job/87851/apply/linkedin?returnUrl=https://jsc-bank-of-georgia.hirehive.com/job/87851/-"
                className="flex items-center text-white bg-blue-700 px-4 py-2 button rounded shadow-sm"
                title="Apply with LinkedIn"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="16px"
                  height="16px"
                  viewBox="-3.5 0.5 16 16"
                  enable-background="new -3.5 0.5 16 16"
                >
                  <path
                    fill="#FFFFFF"
                    d="M-3.5,16.5h3.2V5.323h-3.2V16.5z M8.325,5.134C6.4,5.134,5.515,6.157,5.033,6.9V5.323h-3.2
	c0.046,1.021,0,11.177,0,11.177h3.2l0.023-6.23c0-0.329,0.022-0.652,0.118-0.888c0.263-0.654,0.993-1.415,1.993-1.415
	c1.312,0,2.133,0.667,2.133,2.133V16.5h3.2v-6.396C12.5,6.754,10.71,5.134,8.325,5.134z"
                  ></path>
                  <path
                    fill="#FFFFFF"
                    d="M-1.927,3.701h0.02c0.99,0,1.607-0.652,1.607-1.467c-0.019-0.834-0.617-1.467-1.588-1.467
	c-0.976,0-1.612,0.632-1.612,1.467C-3.501,3.049-2.881,3.701-1.927,3.701z"
                  ></path>
                </svg>
                <span className="ml-4">ApplyWithLinkedIn</span>
              </a>
            </div>
            <fieldset>
              <div className="flex flex-wrap -mx-3 mb-4">
                {JobFormMultipleFixtures.map((item: any) => {
                  return (
                    <>
                      <div className={item.className}>
                        <label className="block" htmlFor={item?.id}>
                          <span className="text-gray-700 font-semibold">
                            {item.text}
                          </span>
                          {item?.required && <span className="req-mark"></span>}
                          <input
                            className="form-input required"
                            id={item?.id}
                            maxLength={item?.maxLength}
                            type={item?.type}
                            value=""
                          />
                        </label>
                      </div>
                    </>
                  );
                })}
              </div>
              {JobFormFixtures.map((item: any) => {
                return (
                  <>
                    <div className="mt-4">
                      <label className="text-gray-700" htmlFor={item?.id}>
                        <span
                          className="text-gray-700 font-semibold"
                          dangerouslySetInnerHTML={{
                            __html: sanitizer(item?.text),
                          }}
                        ></span>
                        {item?.required && <span className="req-mark"></span>}
                        {item?.element === 'textarea' ? (
                          <>
                            <textarea
                              className="form-textarea resize-y"
                              id={item?.id}
                              rows={3}
                            ></textarea>
                          </>
                        ) : (
                          <>
                            {item?.type === 'select' ? (
                              <>
                                <select
                                  className="form-select text-gray-700"
                                  id={item?.id}
                                  defaultValue={item?.defaultValue}
                                >
                                  {item?.options.map((country: any) => {
                                    return <option>{country?.name}</option>;
                                  })}
                                </select>
                              </>
                            ) : (
                              <>
                                <input
                                  className="form-input required"
                                  id={item?.id}
                                  maxLength={item?.maxLength}
                                  type={item?.type}
                                />
                              </>
                            )}
                          </>
                        )}
                      </label>
                    </div>
                  </>
                );
              })}
            </fieldset>
            <JobFormFooter />
          </form>
        </div>
      </div>
    </>
  );
}
