import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "../../application/environment/env.json";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import dompurify from "dompurify";
import UseDataListener from "../../hooks/useDataListener";
import { isArrayEmpty, isStringEmpty } from "../../utils";
import UseElementListener from "../../hooks/useElementListener";

type T = any;

const JobPages: React.FC = () => {
  const sanitizer = dompurify.sanitize;
  const [data, setData] = useState<Array<T>>([]);
  useEffect(() => {
    axios.get(`${env.host}/api${window.location.pathname}`).then((res) => {
      setData([res.data.data]);
    });
  }, []);
  const DataFunction = () => {
    return (
      <>
        {data[0].description[0].functions.map((descriptionFunction: any) => {
          return (
            <>
              <li>{descriptionFunction.title}</li>
            </>
          );
        })}
      </>
    );
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        {data.map((item: any) => {
          return (
            <title>
              {item.title} | JSC Bank of Georgia |
              &#x10D7;&#x10D1;&#x10D8;&#x10DA;&#x10D8;&#x10E1;&#x10D8;
            </title>
          );
        })}
      </Helmet>
      <Navbar />
      {data.map((item: any) => {
        return (
          <>
            <div className="flex flex-1 ie-no-flex1 max-w-screen-xl mx-auto w-full">
              <div className=" flex-1 flex flex-wrap" id="job-83543">
                <article className="w-full md:w-7/12 pl-4 pr-6 p-6">
                  <div className="pb-4 border-b-2" role="banner">
                    <h1 className="text-2xl font-semibold leading-7 text-gray-900 sm:text-3xl sm:leading-9 hh-job-title">
                      {item.title}
                    </h1>

                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap hh-job-information">
                      <div className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-location">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="flex-shrink-0 mr-1 h-5 w-5 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        {item.location}
                      </div>

                      <div className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-type">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="flex-shrink-0 mr-1 h-5 w-5 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        {item.time}
                      </div>
                    </div>
                  </div>
                  <div
                    role="article"
                    className="ql-editor py-6 hh-job-description"
                  >
                    <p
                      className="ql-align-justify"
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(item.description[0].title),
                      }}
                    ></p>
                    {UseElementListener({
                      condition: isArrayEmpty(data[0].description[0].functions),
                      children: (
                        <>
                          <p className="ql-align-justify">
                            <strong>&nbsp;</strong>
                          </p>
                          <p className="ql-align-justify">
                            <strong
                              style={{ backgroundColor: "rgb(244, 244, 245)" }}
                            >
                              ფუნქციები:
                            </strong>
                          </p>
                          <ul>
                            {UseDataListener({
                              condition: isArrayEmpty(
                                data[0].description[0].functions
                              ),
                              children: DataFunction(),
                            })}
                          </ul>
                        </>
                      ),
                    })}
                    {UseElementListener({
                      condition: isStringEmpty(
                        data[0].description[0].qualitificationRequire
                      ),
                      children: (
                        <>
                          <p className="ql-align-justify">&nbsp;</p>
                          <p className="ql-align-justify">
                            <strong
                              style={{ backgroundColor: "rgb(244, 244, 245)" }}
                            >
                              საკვალიფიკაციო მოთხოვნები:
                            </strong>
                          </p>
                          <p>
                            <strong
                              style={{ backgroundColor: "rgb(244, 244, 245)" }}
                            >
                              განათლება:{" "}
                            </strong>
                            {data[0].description[0].qualitificationRequire}
                            &nbsp;&nbsp;
                          </p>
                        </>
                      ),
                    })}
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong style={{ backgroundColor: "rgb(244, 244, 245)" }}>
                        სამუშაო გამოცდილება:{" "}
                      </strong>
                    </p>
                    {data[0].description[0].workExperience.map((work: any) => {
                      return (
                        <p>
                          ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          {work.title}
                        </p>
                      );
                    })}
                    <p>
                      <br />
                    </p>
                    <p>
                      <strong style={{ backgroundColor: "rgb(244, 244, 245)" }}>
                        ცოდნა, უნარები:
                      </strong>
                    </p>
                    {data[0].description[0].know.map((knows: any) => {
                      return (
                        <>
                          <p>
                            ·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            {knows.title}
                          </p>
                        </>
                      );
                    })}
                    <p>
                      <br />
                    </p>
                    <p>
                      <span style={{ color: "rgb(91, 91, 91)" }}>
                        დაინტერესების შემთხვევაში გთხოვთ, შეავსეთ მოთხოვნილი
                        ინფორმაცია, ატვირთეთ რეზიუმე/CV და დააჭირეთ ღილაკს
                        „გამოაგზავნეთ განაცხადი“. რეზიუმეების მიღების ბოლო ვადაა{" "}
                      </span>
                      <strong style={{ color: "rgb(91, 91, 91)" }}>
                        &nbsp;{data[0].lastTime}
                      </strong>
                      <span style={{ color: "rgb(91, 91, 91)" }}>.</span>
                    </p>
                  </div>
                </article>
                <div className="border-l-2 flex-1 flex-col h-auto opacity-0 md:opacity-100 hidden md:block"></div>
                <div
                  id="apply"
                  className="md:w-5/12-1 p-4 sm:p-6 border-t-2 md:border-0 max-w-full"
                >
                  <div className="">
                    <form
                      name="ApplicationForm"
                      accept-charset="UTF-8"
                      className="hh-application-form"
                    >
                      <input
                        name="__RequestVerificationToken"
                        type="hidden"
                        value="CfDJ8JYSf8jKYMtGhl73eOPUqwcHX9KAu1dKkjRoKaL0mqhxdhYfDi-I7h7te-fCxVvG_FfvtSkAg2Ss4pvC2oZxyFb6DxLZNY066fizQCVocy9xfDOcQsoByd7BLsZ0ViiXoy9Kcx_IdHjAB2oX4IZZAiE"
                      />
                      <input
                        id="CompanyId"
                        name="CompanyId"
                        type="hidden"
                        value="8148"
                      />
                      <input
                        id="JobId"
                        name="JobId"
                        type="hidden"
                        value="83543"
                      />
                      <input
                        id="RenderedAt"
                        name="RenderedAt"
                        type="hidden"
                        value="637671316336485041"
                      />
                      <h3 className="font-semibold text-2xl text-center">
                        &#x10D2;&#x10D0;&#x10DB;&#x10DD;&#x10D0;&#x10D2;&#x10D6;&#x10D0;&#x10D5;&#x10DC;&#x10D4;&#x10D7;
                        &#x10D2;&#x10D0;&#x10DC;&#x10D0;&#x10EA;&#x10EE;&#x10D0;&#x10D3;&#x10D8;
                      </h3>
                      <div className="flex justify-center my-6">
                        <a
                          href="https://apply.hirehive.com/job/83543/apply/linkedin?returnUrl=https://jsc-bank-of-georgia.hirehive.com/job/83543/-"
                          className="flex items-center text-white bg-blue-700 px-4 py-2 button rounded shadow-sm"
                          title="Apply with LinkedIn"
                        >
                          <svg
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
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
                            />
                            <path
                              fill="#FFFFFF"
                              d="M-1.927,3.701h0.02c0.99,0,1.607-0.652,1.607-1.467c-0.019-0.834-0.617-1.467-1.588-1.467
                c-0.976,0-1.612,0.632-1.612,1.467C-3.501,3.049-2.881,3.701-1.927,3.701z"
                            />
                          </svg>
                          <span className="ml-4">ApplyWithLinkedIn</span>
                        </a>
                      </div>
                      <fieldset>
                        <div className="flex flex-wrap -mx-3 mb-4">
                          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block" htmlFor="FirstName">
                              <span className="text-gray-700 font-semibold">
                                &#x10E1;&#x10D0;&#x10EE;&#x10D4;&#x10DA;&#x10D8;
                              </span>
                              <span className="req-mark"></span>
                              <input
                                className="form-input required"
                                data-val="true"
                                data-val-length="The field FirstName must be a string with a maximum length of 100."
                                data-val-length-max="100"
                                data-val-required="The FirstName field is required."
                                id="Candidate_FirstName"
                                maxLength={100}
                                name="Candidate.FirstName"
                                required
                                type="text"
                                value=""
                              />
                            </label>
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <label className="block" htmlFor="LastName">
                              <span className="text-gray-700 font-semibold">
                                &#x10D2;&#x10D5;&#x10D0;&#x10E0;&#x10D8;
                              </span>
                              <span className="req-mark"></span>
                              <input
                                className="form-input required"
                                data-val="true"
                                data-val-length="The field LastName must be a string with a maximum length of 100."
                                data-val-length-max="100"
                                data-val-required="The LastName field is required."
                                id="Candidate_LastName"
                                maxLength={100}
                                name="Candidate.LastName"
                                required
                                type="text"
                                value=""
                              />
                            </label>
                          </div>
                        </div>

                        <div className="mt-4">
                          <label className="text-gray-700" htmlFor="Location">
                            <span className="text-gray-700 font-semibold">
                              &#x10E5;&#x10D0;&#x10DA;&#x10D0;&#x10E5;&#x10D8;/&#x10E0;&#x10D4;&#x10D2;&#x10D8;&#x10DD;&#x10DC;&#x10D8;
                            </span>
                            <span className="req-mark"></span>
                            <input
                              className="form-input required"
                              data-val="true"
                              data-val-length="The field Location must be a string with a maximum length of 150."
                              data-val-length-max="150"
                              id="Candidate_Location"
                              maxLength={150}
                              name="Candidate.Location"
                              required
                              type="text"
                              value=""
                            />
                          </label>
                        </div>

                        <div className="mt-4">
                          <label className="block" htmlFor="Country">
                            <span className="text-gray-700 font-semibold">
                              &#x10E5;&#x10D5;&#x10D4;&#x10E7;&#x10D0;&#x10DC;&#x10D0;
                            </span>
                            <span className="req-mark"></span>
                            <select
                              className="form-select text-gray-700"
                              id="Candidate_CountryId"
                              name="Candidate.CountryId"
                              required
                            >
                              <option value="231">
                                &#x10D0;&#x10DB;&#x10D4;&#x10E0;&#x10D8;&#x10D9;&#x10D8;&#x10E1;
                                &#x10E8;&#x10D4;&#x10D4;&#x10E0;&#x10D7;&#x10D4;&#x10D1;&#x10E3;&#x10DA;&#x10D8;
                                &#x10E8;&#x10E2;&#x10D0;&#x10E2;&#x10D4;&#x10D1;&#x10D8;
                                (United States)
                              </option>
                              <option value="39">
                                &#x10D9;&#x10D0;&#x10DC;&#x10D0;&#x10D3;&#x10D0;
                                (Canada)
                              </option>
                              <option value="230">
                                &#x10D2;&#x10D0;&#x10D4;&#x10E0;&#x10D7;&#x10D8;&#x10D0;&#x10DC;&#x10D4;&#x10D1;&#x10E3;&#x10DA;&#x10D8;
                                &#x10E1;&#x10D0;&#x10DB;&#x10D4;&#x10E4;&#x10DD;
                                (United Kingdom)
                              </option>
                              <option value="105">
                                &#x10D8;&#x10E0;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D0;
                                (Ireland)
                              </option>
                              <option value="14">
                                &#x10D0;&#x10D5;&#x10E1;&#x10E2;&#x10E0;&#x10D0;&#x10DA;&#x10D8;&#x10D0;
                                (Australia)
                              </option>
                              <option value="158">
                                &#x10D0;&#x10EE;&#x10D0;&#x10DA;&#x10D8;
                                &#x10D6;&#x10D4;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D0;
                                (New Zealand)
                              </option>
                              <option value="202">
                                &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;
                                &#x10D0;&#x10E4;&#x10E0;&#x10D8;&#x10D9;&#x10D8;&#x10E1;
                                &#x10E0;&#x10D4;&#x10E1;&#x10DE;&#x10E3;&#x10D1;&#x10DA;&#x10D8;&#x10D9;&#x10D0;
                                (South Africa)
                              </option>
                              <option value="81">
                                &#x10D2;&#x10D4;&#x10E0;&#x10DB;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
                                (Deutschland)
                              </option>
                              <option value="">-----------</option>
                              <option value="496">
                                &#x10E1;&#x10EE;&#x10D5;&#x10D0;&#x10D3;&#x10D0;&#x10E1;&#x10EE;&#x10D5;&#x10D0;
                                &#x10D0;&#x10D3;&#x10D2;&#x10D8;&#x10DA;&#x10D0;&#x10E1;
                              </option>
                              <option value="-1">
                                &#x10D0;&#x10E0;
                                &#x10D0;&#x10E0;&#x10D8;&#x10E1;
                                &#x10EE;&#x10D4;&#x10DA;&#x10DB;&#x10D8;&#x10E1;&#x10D0;&#x10EC;&#x10D5;&#x10D3;&#x10DD;&#x10DB;&#x10D8;
                              </option>
                              <option value="1">
                                &#x10D0;&#x10D5;&#x10E6;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (&#x202B;&#x627;&#x641;&#x63A;&#x627;&#x646;&#x633;&#x62A;&#x627;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="2">
                                &#x10D0;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (&#xC5;land)
                              </option>
                              <option value="3">
                                &#x10D0;&#x10DA;&#x10D1;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (Shqip&#xEB;ri)
                              </option>
                              <option value="4">
                                &#x10D0;&#x10DA;&#x10DF;&#x10D8;&#x10E0;&#x10D8;
                                (Algeria)
                              </option>
                              <option value="5">
                                &#x10D0;&#x10DB;&#x10D4;&#x10E0;&#x10D8;&#x10D9;&#x10D8;&#x10E1;
                                &#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10D0;
                                (American Samoa)
                              </option>
                              <option value="6">
                                &#x10D0;&#x10DC;&#x10D3;&#x10DD;&#x10E0;&#x10D0;
                                (Andorra)
                              </option>
                              <option value="7">
                                &#x10D0;&#x10DC;&#x10D2;&#x10DD;&#x10DA;&#x10D0;
                                (Angola)
                              </option>
                              <option value="8">
                                &#x10D0;&#x10DC;&#x10D2;&#x10D5;&#x10D8;&#x10DA;&#x10D0;
                                (Anguilla)
                              </option>
                              <option value="9">
                                &#x10D0;&#x10DC;&#x10E2;&#x10D0;&#x10E0;&#x10E5;&#x10E2;&#x10D8;&#x10D9;&#x10D0;
                                (Antarctica)
                              </option>
                              <option value="10">
                                &#x10D0;&#x10DC;&#x10E2;&#x10D8;&#x10D2;&#x10E3;&#x10D0;
                                &#x10D3;&#x10D0;
                                &#x10D1;&#x10D0;&#x10E0;&#x10D1;&#x10E3;&#x10D3;&#x10D0;
                                (Antigua &amp; Barbuda)
                              </option>
                              <option value="11">
                                &#x10D0;&#x10E0;&#x10D2;&#x10D4;&#x10DC;&#x10E2;&#x10D8;&#x10DC;&#x10D0;
                                (Argentina)
                              </option>
                              <option value="12">
                                &#x10E1;&#x10DD;&#x10DB;&#x10EE;&#x10D4;&#x10D7;&#x10D8;
                                (&#x540;&#x561;&#x575;&#x561;&#x57D;&#x57F;&#x561;&#x576;)
                              </option>
                              <option value="13">
                                &#x10D0;&#x10E0;&#x10E3;&#x10D1;&#x10D0; (Aruba)
                              </option>
                              <option value="15">
                                &#x10D0;&#x10D5;&#x10E1;&#x10E2;&#x10E0;&#x10D8;&#x10D0;
                                (&#xD6;sterreich)
                              </option>
                              <option value="16">
                                &#x10D0;&#x10D6;&#x10D4;&#x10E0;&#x10D1;&#x10D0;&#x10D8;&#x10EF;&#x10D0;&#x10DC;&#x10D8;
                                (Az&#x259;rbaycan)
                              </option>
                              <option value="17">
                                &#x10D1;&#x10D0;&#x10F0;&#x10D0;&#x10DB;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Bahamas)
                              </option>
                              <option value="18">
                                &#x10D1;&#x10D0;&#x10F0;&#x10E0;&#x10D4;&#x10D8;&#x10DC;&#x10D8;
                                (&#x202B;&#x627;&#x644;&#x628;&#x62D;&#x631;&#x64A;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="19">
                                &#x10D1;&#x10D0;&#x10DC;&#x10D2;&#x10DA;&#x10D0;&#x10D3;&#x10D4;&#x10E8;&#x10D8;
                                (&#x9AC;&#x9BE;&#x982;&#x9B2;&#x9BE;&#x9A6;&#x9C7;&#x9B6;)
                              </option>
                              <option value="20">
                                &#x10D1;&#x10D0;&#x10E0;&#x10D1;&#x10D0;&#x10D3;&#x10DD;&#x10E1;&#x10D8;
                                (Barbados)
                              </option>
                              <option value="21">
                                &#x10D1;&#x10D4;&#x10DA;&#x10D0;&#x10E0;&#x10E3;&#x10E1;&#x10D8;
                                (&#x411;&#x435;&#x43B;&#x430;&#x440;&#x443;&#x441;&#x44C;)
                              </option>
                              <option value="22">
                                &#x10D1;&#x10D4;&#x10DA;&#x10D2;&#x10D8;&#x10D0;
                                (Belgium)
                              </option>
                              <option value="23">
                                &#x10D1;&#x10D4;&#x10DA;&#x10D8;&#x10D6;&#x10D8;
                                (Belize)
                              </option>
                              <option value="24">
                                &#x10D1;&#x10D4;&#x10DC;&#x10D8;&#x10DC;&#x10D8;
                                (B&#xE9;nin)
                              </option>
                              <option value="25">
                                &#x10D1;&#x10D4;&#x10E0;&#x10DB;&#x10E3;&#x10D3;&#x10D0;
                                (Bermuda)
                              </option>
                              <option value="26">
                                &#x10D1;&#x10E3;&#x10E2;&#x10D0;&#x10DC;&#x10D8;
                                (&#xF60;&#xF56;&#xFB2;&#xF74;&#xF42;)
                              </option>
                              <option value="27">
                                &#x10D1;&#x10DD;&#x10DA;&#x10D8;&#x10D5;&#x10D8;&#x10D0;
                                (Bolivia)
                              </option>
                              <option value="28">
                                &#x10D1;&#x10DD;&#x10E1;&#x10DC;&#x10D8;&#x10D0;
                                &#x10D3;&#x10D0;
                                &#x10F0;&#x10D4;&#x10E0;&#x10EA;&#x10D4;&#x10D2;&#x10DD;&#x10D5;&#x10D8;&#x10DC;&#x10D0;
                                (&#x411;&#x43E;&#x441;&#x43D;&#x430; &#x438;
                                &#x425;&#x435;&#x440;&#x446;&#x435;&#x433;&#x43E;&#x432;&#x438;&#x43D;&#x430;)
                              </option>
                              <option value="29">
                                &#x10D1;&#x10DD;&#x10E2;&#x10E1;&#x10D5;&#x10D0;&#x10DC;&#x10D0;
                                (Botswana)
                              </option>
                              <option value="30">
                                &#x10D1;&#x10E3;&#x10D5;&#x10D4; (Bouvet Island)
                              </option>
                              <option value="31">
                                &#x10D1;&#x10E0;&#x10D0;&#x10D6;&#x10D8;&#x10DA;&#x10D8;&#x10D0;
                                (Brasil)
                              </option>
                              <option value="32">
                                &#x10D1;&#x10E0;&#x10D8;&#x10E2;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
                                &#x10E2;&#x10D4;&#x10E0;&#x10D8;&#x10E2;&#x10DD;&#x10E0;&#x10D8;&#x10D0;
                                &#x10D8;&#x10DC;&#x10D3;&#x10DD;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
                                &#x10DD;&#x10D9;&#x10D4;&#x10D0;&#x10DC;&#x10D4;&#x10E8;&#x10D8;
                                (British Indian Ocean Territory)
                              </option>
                              <option value="33">
                                &#x10D1;&#x10E0;&#x10E3;&#x10DC;&#x10D4;&#x10D8;
                                (Brunei)
                              </option>
                              <option value="34">
                                &#x10D1;&#x10E3;&#x10DA;&#x10D2;&#x10D0;&#x10E0;&#x10D4;&#x10D7;&#x10D8;
                                (&#x411;&#x44A;&#x43B;&#x433;&#x430;&#x440;&#x438;&#x44F;)
                              </option>
                              <option value="35">
                                &#x10D1;&#x10E3;&#x10E0;&#x10D9;&#x10D8;&#x10DC;&#x10D0;-&#x10E4;&#x10D0;&#x10E1;&#x10DD;
                                (Burkina Faso)
                              </option>
                              <option value="36">
                                &#x10D1;&#x10E3;&#x10E0;&#x10E3;&#x10DC;&#x10D3;&#x10D8;
                                (Uburundi)
                              </option>
                              <option value="37">
                                &#x10D9;&#x10D0;&#x10DB;&#x10D1;&#x10DD;&#x10EF;&#x10D0;
                                (&#x1780;&#x1798;&#x17D2;&#x1796;&#x17BB;&#x1787;&#x17B6;)
                              </option>
                              <option value="38">
                                &#x10D9;&#x10D0;&#x10DB;&#x10D4;&#x10E0;&#x10E3;&#x10DC;&#x10D8;
                                (Cameroun)
                              </option>
                              <option value="40">
                                &#x10D9;&#x10D0;&#x10D1;&#x10DD;-&#x10D5;&#x10D4;&#x10E0;&#x10D3;&#x10D4;
                                (Kabu Verdi)
                              </option>
                              <option value="41">
                                &#x10D9;&#x10D0;&#x10D8;&#x10DB;&#x10D0;&#x10DC;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Cayman Islands)
                              </option>
                              <option value="42">
                                &#x10EA;&#x10D4;&#x10DC;&#x10E2;&#x10E0;&#x10D0;&#x10DA;&#x10E3;&#x10E0;&#x10D8;
                                &#x10D0;&#x10E4;&#x10E0;&#x10D8;&#x10D9;&#x10D8;&#x10E1;
                                &#x10E0;&#x10D4;&#x10E1;&#x10DE;&#x10E3;&#x10D1;&#x10DA;&#x10D8;&#x10D9;&#x10D0;
                                (R&#xE9;publique centrafricaine)
                              </option>
                              <option value="43">
                                &#x10E9;&#x10D0;&#x10D3;&#x10D8; (Tchad)
                              </option>
                              <option value="44">
                                &#x10E9;&#x10D8;&#x10DA;&#x10D4; (Chile)
                              </option>
                              <option value="45">
                                &#x10E9;&#x10D8;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (&#x4E2D;&#x56FD;)
                              </option>
                              <option value="46">
                                &#x10E8;&#x10DD;&#x10D1;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D8;
                                (Christmas Island)
                              </option>
                              <option value="47">
                                &#x10E5;&#x10DD;&#x10E5;&#x10DD;&#x10E1;&#x10D8;&#x10E1;
                                (&#x10D9;&#x10D8;&#x10DA;&#x10D8;&#x10DC;&#x10D2;&#x10D8;&#x10E1;)
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Kepulauan Cocos (Keeling))
                              </option>
                              <option value="48">
                                &#x10D9;&#x10DD;&#x10DA;&#x10E3;&#x10DB;&#x10D1;&#x10D8;&#x10D0;
                                (Colombia)
                              </option>
                              <option value="49">
                                &#x10D9;&#x10DD;&#x10DB;&#x10DD;&#x10E0;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (&#x202B;&#x62C;&#x632;&#x631;
                                &#x627;&#x644;&#x642;&#x645;&#x631;&#x202C;&#x200E;)
                              </option>
                              <option value="50">
                                &#x10D9;&#x10DD;&#x10DC;&#x10D2;&#x10DD; -
                                &#x10D1;&#x10E0;&#x10D0;&#x10D6;&#x10D0;&#x10D5;&#x10D8;&#x10DA;&#x10D8;
                                (Congo-Brazzaville)
                              </option>
                              <option value="51">
                                &#x10D9;&#x10DD;&#x10DC;&#x10D2;&#x10DD; -
                                &#x10D9;&#x10D8;&#x10DC;&#x10E8;&#x10D0;&#x10E1;&#x10D0;
                                (Jamhuri ya Kidemokrasia ya Kongo)
                              </option>
                              <option value="52">
                                &#x10D9;&#x10E3;&#x10D9;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Cook Islands)
                              </option>
                              <option value="53">
                                &#x10D9;&#x10DD;&#x10E1;&#x10E2;&#x10D0;-&#x10E0;&#x10D8;&#x10D9;&#x10D0;
                                (Costa Rica)
                              </option>
                              <option value="54">
                                &#x10D9;&#x10DD;&#x10E2;-&#x10D3;&#x10D8;&#x10D5;&#x10E3;&#x10D0;&#x10E0;&#x10D8;
                                (C&#xF4;te d&#x2019;Ivoire)
                              </option>
                              <option value="55">
                                &#x10EE;&#x10DD;&#x10E0;&#x10D5;&#x10D0;&#x10E2;&#x10D8;&#x10D0;
                                (Hrvatska)
                              </option>
                              <option value="56">
                                &#x10D9;&#x10E3;&#x10D1;&#x10D0; (Cuba)
                              </option>
                              <option value="57">
                                &#x10D9;&#x10D5;&#x10D8;&#x10DE;&#x10E0;&#x10DD;&#x10E1;&#x10D8;
                                (&#x39A;&#x3CD;&#x3C0;&#x3C1;&#x3BF;&#x3C2;)
                              </option>
                              <option value="58">
                                &#x10E9;&#x10D4;&#x10EE;&#x10D4;&#x10D7;&#x10D8;
                                (&#x10C;esko)
                              </option>
                              <option value="59">
                                &#x10D3;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
                                (Danmark)
                              </option>
                              <option value="60">
                                &#x10EF;&#x10D8;&#x10D1;&#x10E3;&#x10E2;&#x10D8;
                                (Djibouti)
                              </option>
                              <option value="61">
                                &#x10D3;&#x10DD;&#x10DB;&#x10D8;&#x10DC;&#x10D8;&#x10D9;&#x10D0;
                                (Dominica)
                              </option>
                              <option value="62">
                                &#x10D3;&#x10DD;&#x10DB;&#x10D8;&#x10DC;&#x10D8;&#x10D9;&#x10D4;&#x10DA;&#x10D7;&#x10D0;
                                &#x10E0;&#x10D4;&#x10E1;&#x10DE;&#x10E3;&#x10D1;&#x10DA;&#x10D8;&#x10D9;&#x10D0;
                                (Rep&#xFA;blica Dominicana)
                              </option>
                              <option value="63">
                                &#x10D4;&#x10D9;&#x10D5;&#x10D0;&#x10D3;&#x10DD;&#x10E0;&#x10D8;
                                (Ecuador)
                              </option>
                              <option value="64">
                                &#x10D4;&#x10D2;&#x10D5;&#x10D8;&#x10DE;&#x10E2;&#x10D4;
                                (&#x202B;&#x645;&#x635;&#x631;&#x202C;&#x200E;)
                              </option>
                              <option value="65">
                                &#x10E1;&#x10D0;&#x10DA;&#x10D5;&#x10D0;&#x10D3;&#x10DD;&#x10E0;&#x10D8;
                                (El Salvador)
                              </option>
                              <option value="66">
                                &#x10D4;&#x10D9;&#x10D5;&#x10D0;&#x10E2;&#x10DD;&#x10E0;&#x10E3;&#x10DA;&#x10D8;
                                &#x10D2;&#x10D5;&#x10D8;&#x10DC;&#x10D4;&#x10D0;
                                (Guinea Ecuatorial)
                              </option>
                              <option value="67">
                                &#x10D4;&#x10E0;&#x10D8;&#x10E2;&#x10E0;&#x10D4;&#x10D0;
                                (Eritrea)
                              </option>
                              <option value="68">
                                &#x10D4;&#x10E1;&#x10E2;&#x10DD;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (Eesti)
                              </option>
                              <option value="69">
                                &#x10D4;&#x10D7;&#x10D8;&#x10DD;&#x10DE;&#x10D8;&#x10D0;
                                (Ethiopia)
                              </option>
                              <option value="70">
                                &#x10E4;&#x10DD;&#x10DA;&#x10D9;&#x10DA;&#x10D4;&#x10DC;&#x10D3;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Falkland Islands (Islas Malvinas))
                              </option>
                              <option value="71">
                                &#x10E4;&#x10D0;&#x10E0;&#x10D4;&#x10E0;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (F&#xF8;royar)
                              </option>
                              <option value="72">
                                &#x10E4;&#x10D8;&#x10EF;&#x10D8; (Fiji)
                              </option>
                              <option value="73">
                                &#x10E4;&#x10D8;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (Suomi)
                              </option>
                              <option value="74">
                                &#x10E1;&#x10D0;&#x10E4;&#x10E0;&#x10D0;&#x10DC;&#x10D2;&#x10D4;&#x10D7;&#x10D8;
                                (France)
                              </option>
                              <option value="75">
                                &#x10E1;&#x10D0;&#x10E4;&#x10E0;&#x10D0;&#x10DC;&#x10D2;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
                                &#x10D2;&#x10D5;&#x10D8;&#x10D0;&#x10DC;&#x10D0;
                                (Guyane fran&#xE7;aise)
                              </option>
                              <option value="76">
                                &#x10E1;&#x10D0;&#x10E4;&#x10E0;&#x10D0;&#x10DC;&#x10D2;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
                                &#x10DE;&#x10DD;&#x10DA;&#x10D8;&#x10DC;&#x10D4;&#x10D6;&#x10D8;&#x10D0;
                                (Polyn&#xE9;sie fran&#xE7;aise)
                              </option>
                              <option value="77">
                                &#x10E4;&#x10E0;&#x10D0;&#x10DC;&#x10D2;&#x10E3;&#x10DA;&#x10D8;
                                &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
                                &#x10E2;&#x10D4;&#x10E0;&#x10D8;&#x10E2;&#x10DD;&#x10E0;&#x10D8;&#x10D4;&#x10D1;&#x10D8;
                                (Terres australes fran&#xE7;aises)
                              </option>
                              <option value="78">
                                &#x10D2;&#x10D0;&#x10D1;&#x10DD;&#x10DC;&#x10D8;
                                (Gabon)
                              </option>
                              <option value="79">
                                &#x10D2;&#x10D0;&#x10DB;&#x10D1;&#x10D8;&#x10D0;
                                (Gambia)
                              </option>
                              <option selected value="80">
                                &#x10E1;&#x10D0;&#x10E5;&#x10D0;&#x10E0;&#x10D7;&#x10D5;&#x10D4;&#x10DA;&#x10DD;
                              </option>
                              <option value="82">
                                &#x10D2;&#x10D0;&#x10DC;&#x10D0; (Gaana)
                              </option>
                              <option value="83">
                                &#x10D2;&#x10D8;&#x10D1;&#x10E0;&#x10D0;&#x10DA;&#x10E2;&#x10D0;&#x10E0;&#x10D8;
                                (Gibraltar)
                              </option>
                              <option value="84">
                                &#x10E1;&#x10D0;&#x10D1;&#x10D4;&#x10E0;&#x10EB;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (&#x395;&#x3BB;&#x3BB;&#x3AC;&#x3B4;&#x3B1;)
                              </option>
                              <option value="85">
                                &#x10D2;&#x10E0;&#x10D4;&#x10DC;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D0;
                                (Kalaallit Nunaat)
                              </option>
                              <option value="86">
                                &#x10D2;&#x10E0;&#x10D4;&#x10DC;&#x10D0;&#x10D3;&#x10D0;
                                (Grenada)
                              </option>
                              <option value="87">
                                &#x10D2;&#x10D5;&#x10D0;&#x10D3;&#x10D4;&#x10DA;&#x10E3;&#x10DE;&#x10D0;
                                (Guadeloupe)
                              </option>
                              <option value="88">
                                &#x10D2;&#x10E3;&#x10D0;&#x10DB;&#x10D8; (Guam)
                              </option>
                              <option value="89">
                                &#x10D2;&#x10D5;&#x10D0;&#x10E2;&#x10D4;&#x10DB;&#x10D0;&#x10DA;&#x10D0;
                                (Guatemala)
                              </option>
                              <option value="90">
                                &#x10D2;&#x10D4;&#x10E0;&#x10DC;&#x10E1;&#x10D8;
                                (Guernsey)
                              </option>
                              <option value="91">
                                &#x10D2;&#x10D5;&#x10D8;&#x10DC;&#x10D4;&#x10D0;
                                (Guin&#xE9;e)
                              </option>
                              <option value="92">
                                &#x10D2;&#x10D5;&#x10D8;&#x10DC;&#x10D4;&#x10D0;-&#x10D1;&#x10D8;&#x10E1;&#x10D0;&#x10E3;
                                (Guin&#xE9;-Bissau)
                              </option>
                              <option value="93">
                                &#x10D2;&#x10D0;&#x10D8;&#x10D0;&#x10DC;&#x10D0;
                                (Guyana)
                              </option>
                              <option value="94">
                                &#x10F0;&#x10D0;&#x10D8;&#x10E2;&#x10D8; (Haiti)
                              </option>
                              <option value="95">
                                &#x10F0;&#x10D4;&#x10E0;&#x10D3;&#x10D8;
                                &#x10D3;&#x10D0;
                                &#x10DB;&#x10D0;&#x10D9;&#x10D3;&#x10DD;&#x10DC;&#x10D0;&#x10DA;&#x10D3;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Heard &amp; McDonald Islands)
                              </option>
                              <option value="96">
                                &#x10E5;&#x10D0;&#x10DA;&#x10D0;&#x10E5;&#x10D8;
                                &#x10D5;&#x10D0;&#x10E2;&#x10D8;&#x10D9;&#x10D0;&#x10DC;&#x10D8;
                                (Citt&#xE0; del Vaticano)
                              </option>
                              <option value="97">
                                &#x10F0;&#x10DD;&#x10DC;&#x10D3;&#x10E3;&#x10E0;&#x10D0;&#x10E1;&#x10D8;
                                (Honduras)
                              </option>
                              <option value="98">
                                &#x10F0;&#x10DD;&#x10DC;&#x10D9;&#x10DD;&#x10DC;&#x10D2;&#x10D8;
                                (&#x9999;&#x6E2F;)
                              </option>
                              <option value="99">
                                &#x10E3;&#x10DC;&#x10D2;&#x10E0;&#x10D4;&#x10D7;&#x10D8;
                                (Magyarorsz&#xE1;g)
                              </option>
                              <option value="100">
                                &#x10D8;&#x10E1;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D0;
                                (&#xCD;sland)
                              </option>
                              <option value="101">
                                &#x10D8;&#x10DC;&#x10D3;&#x10DD;&#x10D4;&#x10D7;&#x10D8;
                                (&#x92D;&#x93E;&#x930;&#x924;)
                              </option>
                              <option value="102">
                                &#x10D8;&#x10DC;&#x10D3;&#x10DD;&#x10DC;&#x10D4;&#x10D6;&#x10D8;&#x10D0;
                                (Indonesia)
                              </option>
                              <option value="103">
                                &#x10D8;&#x10E0;&#x10D0;&#x10DC;&#x10D8;
                                (&#x202B;&#x627;&#x6CC;&#x631;&#x627;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="104">
                                &#x10D4;&#x10E0;&#x10D0;&#x10E7;&#x10D8;
                                (&#x202B;&#x627;&#x644;&#x639;&#x631;&#x627;&#x642;&#x202C;&#x200E;)
                              </option>
                              <option value="106">
                                &#x10DB;&#x10D4;&#x10DC;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D8;
                                (Isle of Man)
                              </option>
                              <option value="107">
                                &#x10D8;&#x10E1;&#x10E0;&#x10D0;&#x10D4;&#x10DA;&#x10D8;
                                (&#x202B;&#x5D9;&#x5E9;&#x5E8;&#x5D0;&#x5DC;&#x202C;&#x200E;)
                              </option>
                              <option value="108">
                                &#x10D8;&#x10E2;&#x10D0;&#x10DA;&#x10D8;&#x10D0;
                                (Italia)
                              </option>
                              <option value="109">
                                &#x10D8;&#x10D0;&#x10DB;&#x10D0;&#x10D8;&#x10D9;&#x10D0;
                                (Jamaica)
                              </option>
                              <option value="110">
                                &#x10D8;&#x10D0;&#x10DE;&#x10DD;&#x10DC;&#x10D8;&#x10D0;
                                (&#x65E5;&#x672C;)
                              </option>
                              <option value="111">
                                &#x10EF;&#x10D4;&#x10E0;&#x10E1;&#x10D8;
                                (Jersey)
                              </option>
                              <option value="112">
                                &#x10D8;&#x10DD;&#x10E0;&#x10D3;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
                                (&#x202B;&#x627;&#x644;&#x623;&#x631;&#x62F;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="113">
                                &#x10E7;&#x10D0;&#x10D6;&#x10D0;&#x10EE;&#x10D4;&#x10D7;&#x10D8;
                                (&#x41A;&#x430;&#x437;&#x430;&#x445;&#x441;&#x442;&#x430;&#x43D;)
                              </option>
                              <option value="114">
                                &#x10D9;&#x10D4;&#x10DC;&#x10D8;&#x10D0; (Kenya)
                              </option>
                              <option value="115">
                                &#x10D9;&#x10D8;&#x10E0;&#x10D8;&#x10D1;&#x10D0;&#x10E2;&#x10D8;
                                (Kiribati)
                              </option>
                              <option value="116">
                                &#x10E9;&#x10E0;&#x10D3;&#x10D8;&#x10DA;&#x10DD;&#x10D4;&#x10D7;
                                &#x10D9;&#x10DD;&#x10E0;&#x10D4;&#x10D0;
                                (&#xBD81;&#xD55C;)
                              </option>
                              <option value="117">
                                &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;
                                &#x10D9;&#x10DD;&#x10E0;&#x10D4;&#x10D0;
                                (&#xB300;&#xD55C;&#xBBFC;&#xAD6D;)
                              </option>
                              <option value="118">
                                &#x10E5;&#x10E3;&#x10D5;&#x10D4;&#x10D8;&#x10D7;&#x10D8;
                                (&#x202B;&#x627;&#x644;&#x643;&#x648;&#x64A;&#x62A;&#x202C;&#x200E;)
                              </option>
                              <option value="119">
                                &#x10E7;&#x10D8;&#x10E0;&#x10D2;&#x10D8;&#x10D6;&#x10D4;&#x10D7;&#x10D8;
                                (&#x41A;&#x44B;&#x440;&#x433;&#x44B;&#x437;&#x441;&#x442;&#x430;&#x43D;)
                              </option>
                              <option value="120">
                                &#x10DA;&#x10D0;&#x10DD;&#x10E1;&#x10D8;
                                (&#xEA5;&#xEB2;&#xEA7;)
                              </option>
                              <option value="121">
                                &#x10DA;&#x10D0;&#x10E2;&#x10D5;&#x10D8;&#x10D0;
                                (Latvija)
                              </option>
                              <option value="122">
                                &#x10DA;&#x10D8;&#x10D1;&#x10D0;&#x10DC;&#x10D8;
                                (&#x202B;&#x644;&#x628;&#x646;&#x627;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="123">
                                &#x10DA;&#x10D4;&#x10E1;&#x10DD;&#x10D7;&#x10DD;
                                (Lesotho)
                              </option>
                              <option value="124">
                                &#x10DA;&#x10D8;&#x10D1;&#x10D4;&#x10E0;&#x10D8;&#x10D0;
                                (Liberia)
                              </option>
                              <option value="125">
                                &#x10DA;&#x10D8;&#x10D1;&#x10D8;&#x10D0;
                                (&#x202B;&#x644;&#x64A;&#x628;&#x64A;&#x627;&#x202C;&#x200E;)
                              </option>
                              <option value="126">
                                &#x10DA;&#x10D8;&#x10EE;&#x10E2;&#x10D4;&#x10DC;&#x10E8;&#x10E2;&#x10D0;&#x10D8;&#x10DC;&#x10D8;
                                (Liechtenstein)
                              </option>
                              <option value="127">
                                &#x10DA;&#x10D8;&#x10E2;&#x10D5;&#x10D0;
                                (Lietuva)
                              </option>
                              <option value="128">
                                &#x10DA;&#x10E3;&#x10E5;&#x10E1;&#x10D4;&#x10DB;&#x10D1;&#x10E3;&#x10E0;&#x10D2;&#x10D8;
                                (Luxembourg)
                              </option>
                              <option value="129">
                                &#x10DB;&#x10D0;&#x10D9;&#x10D0;&#x10DD;
                                (&#x6FB3;&#x9580;)
                              </option>
                              <option value="130">
                                &#x10DB;&#x10D0;&#x10D9;&#x10D4;&#x10D3;&#x10DD;&#x10DC;&#x10D8;&#x10D0;
                                (&#x41C;&#x430;&#x43A;&#x435;&#x434;&#x43E;&#x43D;&#x438;&#x458;&#x430;)
                              </option>
                              <option value="131">
                                &#x10DB;&#x10D0;&#x10D3;&#x10D0;&#x10D2;&#x10D0;&#x10E1;&#x10D9;&#x10D0;&#x10E0;&#x10D8;
                                (Madagasikara)
                              </option>
                              <option value="132">
                                &#x10DB;&#x10D0;&#x10DA;&#x10D0;&#x10D5;&#x10D8;
                                (Malawi)
                              </option>
                              <option value="133">
                                &#x10DB;&#x10D0;&#x10DA;&#x10D0;&#x10D8;&#x10D6;&#x10D8;&#x10D0;
                                (Malaysia)
                              </option>
                              <option value="134">
                                &#x10DB;&#x10D0;&#x10DA;&#x10D3;&#x10D8;&#x10D5;&#x10D4;&#x10D1;&#x10D8;
                                (Maldives)
                              </option>
                              <option value="135">
                                &#x10DB;&#x10D0;&#x10DA;&#x10D8; (Mali)
                              </option>
                              <option value="136">
                                &#x10DB;&#x10D0;&#x10DA;&#x10E2;&#x10D0; (Malta)
                              </option>
                              <option value="137">
                                &#x10DB;&#x10D0;&#x10E0;&#x10E8;&#x10D0;&#x10DA;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Marshall Islands)
                              </option>
                              <option value="138">
                                &#x10DB;&#x10D0;&#x10E0;&#x10E2;&#x10D8;&#x10DC;&#x10D8;&#x10D9;&#x10D0;
                                (Martinique)
                              </option>
                              <option value="139">
                                &#x10DB;&#x10D0;&#x10D5;&#x10E0;&#x10D8;&#x10E2;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
                                (&#x202B;&#x645;&#x648;&#x631;&#x64A;&#x62A;&#x627;&#x646;&#x64A;&#x627;&#x202C;&#x200E;)
                              </option>
                              <option value="140">
                                &#x10DB;&#x10D0;&#x10D5;&#x10E0;&#x10D8;&#x10D9;&#x10D8;
                                (Moris)
                              </option>
                              <option value="141">
                                &#x10DB;&#x10D0;&#x10D8;&#x10DD;&#x10E2;&#x10D0;
                                (Mayotte)
                              </option>
                              <option value="142">
                                &#x10DB;&#x10D4;&#x10E5;&#x10E1;&#x10D8;&#x10D9;&#x10D0;
                                (M&#xE9;xico)
                              </option>
                              <option value="143">
                                &#x10DB;&#x10D8;&#x10D9;&#x10E0;&#x10DD;&#x10DC;&#x10D4;&#x10D6;&#x10D8;&#x10D0;
                                (Micronesia)
                              </option>
                              <option value="144">
                                &#x10DB;&#x10DD;&#x10DA;&#x10D3;&#x10DD;&#x10D5;&#x10D0;
                                (Republica Moldova)
                              </option>
                              <option value="145">
                                &#x10DB;&#x10DD;&#x10DC;&#x10D0;&#x10D9;&#x10DD;
                                (Monaco)
                              </option>
                              <option value="146">
                                &#x10DB;&#x10DD;&#x10DC;&#x10E6;&#x10DD;&#x10DA;&#x10D4;&#x10D7;&#x10D8;
                                (&#x41C;&#x43E;&#x43D;&#x433;&#x43E;&#x43B;)
                              </option>
                              <option value="147">
                                &#x10DB;&#x10DD;&#x10DC;&#x10E2;&#x10D4;&#x10DC;&#x10D4;&#x10D2;&#x10E0;&#x10DD;
                                (Crna Gora)
                              </option>
                              <option value="148">
                                &#x10DB;&#x10DD;&#x10DC;&#x10E1;&#x10D4;&#x10E0;&#x10D0;&#x10E2;&#x10D8;
                                (Montserrat)
                              </option>
                              <option value="149">
                                &#x10DB;&#x10D0;&#x10E0;&#x10DD;&#x10D9;&#x10DD;
                                (Morocco)
                              </option>
                              <option value="150">
                                &#x10DB;&#x10DD;&#x10D6;&#x10D0;&#x10DB;&#x10D1;&#x10D8;&#x10D9;&#x10D8;
                                (Mo&#xE7;ambique)
                              </option>
                              <option value="151">
                                &#x10DB;&#x10D8;&#x10D0;&#x10DC;&#x10DB;&#x10D0;&#x10E0;&#x10D8;
                                (&#x10D1;&#x10D8;&#x10E0;&#x10DB;&#x10D0;)
                                (&#x1019;&#x103C;&#x1014;&#x103A;&#x1019;&#x102C;)
                              </option>
                              <option value="152">
                                &#x10DC;&#x10D0;&#x10DB;&#x10D8;&#x10D1;&#x10D8;&#x10D0;
                                (Namibi&#xEB;)
                              </option>
                              <option value="153">
                                &#x10DC;&#x10D0;&#x10E3;&#x10E0;&#x10E3; (Nauru)
                              </option>
                              <option value="154">
                                &#x10DC;&#x10D4;&#x10DE;&#x10D0;&#x10DA;&#x10D8;
                                (&#x928;&#x947;&#x92A;&#x93E;&#x932;)
                              </option>
                              <option value="155">
                                &#x10DC;&#x10D8;&#x10D3;&#x10D4;&#x10E0;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D4;&#x10D1;&#x10D8;
                                (Nederland)
                              </option>
                              <option value="156"></option>
                              <option value="157">
                                &#x10D0;&#x10EE;&#x10D0;&#x10DA;&#x10D8;
                                &#x10D9;&#x10D0;&#x10DA;&#x10D4;&#x10D3;&#x10DD;&#x10DC;&#x10D8;&#x10D0;
                                (Nouvelle-Cal&#xE9;donie)
                              </option>
                              <option value="159">
                                &#x10DC;&#x10D8;&#x10D9;&#x10D0;&#x10E0;&#x10D0;&#x10D2;&#x10E3;&#x10D0;
                                (Nicaragua)
                              </option>
                              <option value="160">
                                &#x10DC;&#x10D8;&#x10D2;&#x10D4;&#x10E0;&#x10D8;
                                (Nijar)
                              </option>
                              <option value="161">
                                &#x10DC;&#x10D8;&#x10D2;&#x10D4;&#x10E0;&#x10D8;&#x10D0;
                                (Nigeria)
                              </option>
                              <option value="162">
                                &#x10DC;&#x10D8;&#x10E3;&#x10D4; (Niue)
                              </option>
                              <option value="163">
                                &#x10DC;&#x10DD;&#x10E0;&#x10E4;&#x10DD;&#x10DA;&#x10D9;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D8;
                                (Norfolk Island)
                              </option>
                              <option value="164">
                                &#x10E9;&#x10E0;&#x10D3;&#x10D8;&#x10DA;&#x10DD;&#x10D4;&#x10D7;
                                &#x10DB;&#x10D0;&#x10E0;&#x10D8;&#x10D0;&#x10DC;&#x10D0;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Northern Mariana Islands)
                              </option>
                              <option value="165">
                                &#x10DC;&#x10DD;&#x10E0;&#x10D5;&#x10D4;&#x10D2;&#x10D8;&#x10D0;
                                (Norge)
                              </option>
                              <option value="166">
                                &#x10DD;&#x10DB;&#x10D0;&#x10DC;&#x10D8;
                                (&#x202B;&#x639;&#x64F;&#x645;&#x627;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="167">
                                &#x10DE;&#x10D0;&#x10D9;&#x10D8;&#x10E1;&#x10E2;&#x10D0;&#x10DC;&#x10D8;
                                (&#x202B;&#x67E;&#x627;&#x6A9;&#x633;&#x62A;&#x627;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="168">
                                &#x10DE;&#x10D0;&#x10DA;&#x10D0;&#x10E3; (Palau)
                              </option>
                              <option value="169">
                                &#x10DE;&#x10D0;&#x10DA;&#x10D4;&#x10E1;&#x10E2;&#x10D8;&#x10DC;&#x10D0;
                                (&#x202B;&#x641;&#x644;&#x633;&#x637;&#x64A;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="170">
                                &#x10DE;&#x10D0;&#x10DC;&#x10D0;&#x10DB;&#x10D0;
                                (Panam&#xE1;)
                              </option>
                              <option value="171">
                                &#x10DE;&#x10D0;&#x10DE;&#x10E3;&#x10D0;-&#x10D0;&#x10EE;&#x10D0;&#x10DA;&#x10D8;
                                &#x10D2;&#x10D5;&#x10D8;&#x10DC;&#x10D4;&#x10D0;
                                (Papua New Guinea)
                              </option>
                              <option value="172">
                                &#x10DE;&#x10D0;&#x10E0;&#x10D0;&#x10D2;&#x10D5;&#x10D0;&#x10D8;
                                (Paraguay)
                              </option>
                              <option value="173">
                                &#x10DE;&#x10D4;&#x10E0;&#x10E3; (Per&#xFA;)
                              </option>
                              <option value="174">
                                &#x10E4;&#x10D8;&#x10DA;&#x10D8;&#x10DE;&#x10D8;&#x10DC;&#x10D4;&#x10D1;&#x10D8;
                                (Philippines)
                              </option>
                              <option value="175">
                                &#x10DE;&#x10D8;&#x10E2;&#x10D9;&#x10D4;&#x10E0;&#x10DC;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Pitcairn Islands)
                              </option>
                              <option value="176">
                                &#x10DE;&#x10DD;&#x10DA;&#x10DD;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (Polska)
                              </option>
                              <option value="177">
                                &#x10DE;&#x10DD;&#x10E0;&#x10E2;&#x10E3;&#x10D2;&#x10D0;&#x10DA;&#x10D8;&#x10D0;
                                (Portugal)
                              </option>
                              <option value="178">
                                &#x10DE;&#x10E3;&#x10D4;&#x10E0;&#x10E2;&#x10DD;-&#x10E0;&#x10D8;&#x10D9;&#x10DD;
                                (Puerto Rico)
                              </option>
                              <option value="179">
                                &#x10D9;&#x10D0;&#x10E2;&#x10D0;&#x10E0;&#x10D8;
                                (&#x202B;&#x642;&#x637;&#x631;&#x202C;&#x200E;)
                              </option>
                              <option value="180">
                                &#x10E0;&#x10D4;&#x10E3;&#x10DC;&#x10D8;&#x10DD;&#x10DC;&#x10D8;
                                (La R&#xE9;union)
                              </option>
                              <option value="181">
                                &#x10E0;&#x10E3;&#x10DB;&#x10D8;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (Rom&#xE2;nia)
                              </option>
                              <option value="182">
                                &#x10E0;&#x10E3;&#x10E1;&#x10D4;&#x10D7;&#x10D8;
                                (&#x420;&#x43E;&#x441;&#x441;&#x438;&#x44F;)
                              </option>
                              <option value="183">
                                &#x10E0;&#x10E3;&#x10D0;&#x10DC;&#x10D3;&#x10D0;
                                (Rwanda)
                              </option>
                              <option value="184">
                                &#x10EC;&#x10DB;&#x10D8;&#x10DC;&#x10D3;&#x10D0;
                                &#x10D4;&#x10DA;&#x10D4;&#x10DC;&#x10D4;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D8;
                                (St. Helena)
                              </option>
                              <option value="185">
                                &#x10E1;&#x10D4;&#x10DC;&#x10E2;-&#x10D9;&#x10D8;&#x10E2;&#x10E1;&#x10D8;
                                &#x10D3;&#x10D0;
                                &#x10DC;&#x10D4;&#x10D5;&#x10D8;&#x10E1;&#x10D8;
                                (St. Kitts &amp; Nevis)
                              </option>
                              <option value="186">
                                &#x10E1;&#x10D4;&#x10DC;&#x10E2;-&#x10DA;&#x10E3;&#x10E1;&#x10D8;&#x10D0;
                                (St. Lucia)
                              </option>
                              <option value="187">
                                &#x10E1;&#x10D4;&#x10DC;-&#x10DE;&#x10D8;&#x10D4;&#x10E0;&#x10D8;
                                &#x10D3;&#x10D0;
                                &#x10DB;&#x10D8;&#x10D9;&#x10D4;&#x10DA;&#x10DD;&#x10DC;&#x10D8;
                                (Saint-Pierre-et-Miquelon)
                              </option>
                              <option value="188">
                                &#x10E1;&#x10D4;&#x10DC;&#x10E2;-&#x10D5;&#x10D8;&#x10DC;&#x10E1;&#x10D4;&#x10DC;&#x10E2;&#x10D8;
                                &#x10D3;&#x10D0;
                                &#x10D2;&#x10E0;&#x10D4;&#x10DC;&#x10D0;&#x10D3;&#x10D8;&#x10DC;&#x10D4;&#x10D1;&#x10D8;
                                (St. Vincent &amp; Grenadines)
                              </option>
                              <option value="189">
                                &#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10D0; (Samoa)
                              </option>
                              <option value="190">
                                &#x10E1;&#x10D0;&#x10DC;-&#x10DB;&#x10D0;&#x10E0;&#x10D8;&#x10DC;&#x10DD;
                                (San Marino)
                              </option>
                              <option value="191">
                                &#x10E1;&#x10D0;&#x10DC;-&#x10E2;&#x10DD;&#x10DB;&#x10D4;
                                &#x10D3;&#x10D0;
                                &#x10DE;&#x10E0;&#x10D8;&#x10DC;&#x10E1;&#x10D8;&#x10DE;&#x10D8;
                                (S&#xE3;o Tom&#xE9; e Pr&#xED;ncipe)
                              </option>
                              <option value="192">
                                &#x10E1;&#x10D0;&#x10E3;&#x10D3;&#x10D8;&#x10E1;
                                &#x10D0;&#x10E0;&#x10D0;&#x10D1;&#x10D4;&#x10D7;&#x10D8;
                                (&#x202B;&#x627;&#x644;&#x645;&#x645;&#x644;&#x643;&#x629;
                                &#x627;&#x644;&#x639;&#x631;&#x628;&#x64A;&#x629;
                                &#x627;&#x644;&#x633;&#x639;&#x648;&#x62F;&#x64A;&#x629;&#x202C;&#x200E;)
                              </option>
                              <option value="193">
                                &#x10E1;&#x10D4;&#x10DC;&#x10D4;&#x10D2;&#x10D0;&#x10DA;&#x10D8;
                                (Senegal)
                              </option>
                              <option value="194">
                                &#x10E1;&#x10D4;&#x10E0;&#x10D1;&#x10D4;&#x10D7;&#x10D8;
                                (&#x421;&#x440;&#x431;&#x438;&#x458;&#x430;)
                              </option>
                              <option value="195">
                                &#x10E1;&#x10D4;&#x10D8;&#x10E8;&#x10D4;&#x10DA;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Seychelles)
                              </option>
                              <option value="196">
                                &#x10E1;&#x10D8;&#x10D4;&#x10E0;&#x10D0;-&#x10DA;&#x10D4;&#x10DD;&#x10DC;&#x10D4;
                                (Sierra Leone)
                              </option>
                              <option value="197">
                                &#x10E1;&#x10D8;&#x10DC;&#x10D2;&#x10D0;&#x10DE;&#x10E3;&#x10E0;&#x10D8;
                                (Singapore)
                              </option>
                              <option value="198">
                                &#x10E1;&#x10DA;&#x10DD;&#x10D5;&#x10D0;&#x10D9;&#x10D4;&#x10D7;&#x10D8;
                                (Slovensko)
                              </option>
                              <option value="199">
                                &#x10E1;&#x10DA;&#x10DD;&#x10D5;&#x10D4;&#x10DC;&#x10D8;&#x10D0;
                                (Slovenija)
                              </option>
                              <option value="200">
                                &#x10E1;&#x10DD;&#x10DA;&#x10DD;&#x10DB;&#x10DD;&#x10DC;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Solomon Islands)
                              </option>
                              <option value="201">
                                &#x10E1;&#x10DD;&#x10DB;&#x10D0;&#x10DA;&#x10D8;
                                (Soomaaliya)
                              </option>
                              <option value="203">
                                &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;
                                &#x10EF;&#x10DD;&#x10E0;&#x10EF;&#x10D8;&#x10D0;
                                &#x10D3;&#x10D0;
                                &#x10E1;&#x10D0;&#x10DB;&#x10EE;&#x10E0;&#x10D4;&#x10D7;
                                &#x10E1;&#x10D4;&#x10DC;&#x10D3;&#x10D5;&#x10D8;&#x10E9;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (South Georgia &amp; South Sandwich Islands)
                              </option>
                              <option value="204">
                                &#x10D4;&#x10E1;&#x10DE;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (Espa&#xF1;a)
                              </option>
                              <option value="205">
                                &#x10E8;&#x10E0;&#x10D8;-&#x10DA;&#x10D0;&#x10DC;&#x10D9;&#x10D0;
                                (&#xDC1;&#xDCA;&#x200D;&#xDBB;&#xDD3;
                                &#xDBD;&#xD82;&#xD9A;&#xDCF;&#xDC0;)
                              </option>
                              <option value="206">
                                &#x10E1;&#x10E3;&#x10D3;&#x10D0;&#x10DC;&#x10D8;
                                (&#x202B;&#x627;&#x644;&#x633;&#x648;&#x62F;&#x627;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="207">
                                &#x10E1;&#x10E3;&#x10E0;&#x10D8;&#x10DC;&#x10D0;&#x10DB;&#x10D8;
                                (Suriname)
                              </option>
                              <option value="208">
                                &#x10E8;&#x10DE;&#x10D8;&#x10EA;&#x10D1;&#x10D4;&#x10E0;&#x10D2;&#x10D4;&#x10DC;&#x10D8;
                                &#x10D3;&#x10D0;
                                &#x10D8;&#x10D0;&#x10DC;-&#x10DB;&#x10D0;&#x10D8;&#x10D4;&#x10DC;&#x10D8;
                                (Svalbard og Jan Mayen)
                              </option>
                              <option value="209">
                                &#x10E1;&#x10D5;&#x10D0;&#x10D6;&#x10D8;&#x10DA;&#x10D4;&#x10DC;&#x10D3;&#x10D8;
                                (Swaziland)
                              </option>
                              <option value="210">
                                &#x10E8;&#x10D5;&#x10D4;&#x10D3;&#x10D4;&#x10D7;&#x10D8;
                                (Sverige)
                              </option>
                              <option value="211">
                                &#x10E8;&#x10D5;&#x10D4;&#x10D8;&#x10EA;&#x10D0;&#x10E0;&#x10D8;&#x10D0;
                                (Schweiz)
                              </option>
                              <option value="212">
                                &#x10E1;&#x10D8;&#x10E0;&#x10D8;&#x10D0;
                                (&#x202B;&#x633;&#x648;&#x631;&#x64A;&#x627;&#x202C;&#x200E;)
                              </option>
                              <option value="213">
                                &#x10E2;&#x10D0;&#x10D8;&#x10D5;&#x10D0;&#x10DC;&#x10D8;
                                (&#x53F0;&#x7063;)
                              </option>
                              <option value="214">
                                &#x10E2;&#x10D0;&#x10EF;&#x10D8;&#x10D9;&#x10D4;&#x10D7;&#x10D8;
                                (Tajikistan)
                              </option>
                              <option value="215">
                                &#x10E2;&#x10D0;&#x10DC;&#x10D6;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
                                (Tanzania)
                              </option>
                              <option value="216">
                                &#x10E2;&#x10D0;&#x10D8;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;
                                (&#xE44;&#xE17;&#xE22;)
                              </option>
                              <option value="217">
                                &#x10E2;&#x10D8;&#x10DB;&#x10DD;&#x10E0;-&#x10DA;&#x10D4;&#x10E1;&#x10E2;&#x10D4;
                                (Timor-Leste)
                              </option>
                              <option value="218">
                                &#x10E2;&#x10DD;&#x10D2;&#x10DD; (Togo)
                              </option>
                              <option value="219">
                                &#x10E2;&#x10DD;&#x10D9;&#x10D4;&#x10DA;&#x10D0;&#x10E3;
                                (Tokelau)
                              </option>
                              <option value="220">
                                &#x10E2;&#x10DD;&#x10DC;&#x10D2;&#x10D0; (Tonga)
                              </option>
                              <option value="221">
                                &#x10E2;&#x10E0;&#x10D8;&#x10DC;&#x10D8;&#x10D3;&#x10D0;&#x10D3;&#x10D8;
                                &#x10D3;&#x10D0;
                                &#x10E2;&#x10DD;&#x10D1;&#x10D0;&#x10D2;&#x10DD;
                                (Trinidad &amp; Tobago)
                              </option>
                              <option value="222">
                                &#x10E2;&#x10E3;&#x10DC;&#x10D8;&#x10E1;&#x10D8;
                                (Tunisia)
                              </option>
                              <option value="223">
                                &#x10D7;&#x10E3;&#x10E0;&#x10E5;&#x10D4;&#x10D7;&#x10D8;
                                (T&#xFC;rkiye)
                              </option>
                              <option value="224">
                                &#x10D7;&#x10E3;&#x10E0;&#x10E5;&#x10DB;&#x10D4;&#x10DC;&#x10D4;&#x10D7;&#x10D8;
                                (Turkmenistan)
                              </option>
                              <option value="225">
                                &#x10D7;&#x10D4;&#x10E0;&#x10E5;&#x10E1;-&#x10E5;&#x10D0;&#x10D8;&#x10E5;&#x10DD;&#x10E1;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (Turks &amp; Caicos Islands)
                              </option>
                              <option value="226">
                                &#x10E2;&#x10E3;&#x10D5;&#x10D0;&#x10DA;&#x10E3;
                                (Tuvalu)
                              </option>
                              <option value="227">
                                &#x10E3;&#x10D2;&#x10D0;&#x10DC;&#x10D3;&#x10D0;
                                (Uganda)
                              </option>
                              <option value="228">
                                &#x10E3;&#x10D9;&#x10E0;&#x10D0;&#x10D8;&#x10DC;&#x10D0;
                                (&#x423;&#x43A;&#x440;&#x430;&#x457;&#x43D;&#x430;)
                              </option>
                              <option value="229">
                                &#x10D0;&#x10E0;&#x10D0;&#x10D1;&#x10D7;&#x10D0;
                                &#x10D2;&#x10D0;&#x10D4;&#x10E0;&#x10D7;&#x10D8;&#x10D0;&#x10DC;&#x10D4;&#x10D1;&#x10E3;&#x10DA;&#x10D8;
                                &#x10E1;&#x10D0;&#x10D0;&#x10DB;&#x10D8;&#x10E0;&#x10DD;&#x10D4;&#x10D1;&#x10D8;
                                (&#x202B;&#x627;&#x644;&#x625;&#x645;&#x627;&#x631;&#x627;&#x62A;
                                &#x627;&#x644;&#x639;&#x631;&#x628;&#x64A;&#x629;
                                &#x627;&#x644;&#x645;&#x62A;&#x62D;&#x62F;&#x629;&#x202C;&#x200E;)
                              </option>
                              <option value="232">
                                &#x10D0;&#x10E8;&#x10E8;-&#x10D8;&#x10E1;
                                &#x10E8;&#x10DD;&#x10E0;&#x10D4;&#x10E3;&#x10DA;&#x10D8;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (U.S. Outlying Islands)
                              </option>
                              <option value="233">
                                &#x10E3;&#x10E0;&#x10E3;&#x10D2;&#x10D5;&#x10D0;&#x10D8;
                                (Uruguay)
                              </option>
                              <option value="234">
                                &#x10E3;&#x10D6;&#x10D1;&#x10D4;&#x10D9;&#x10D4;&#x10D7;&#x10D8;
                                (O&#x2BB;zbekiston)
                              </option>
                              <option value="235">
                                &#x10D5;&#x10D0;&#x10DC;&#x10E3;&#x10D0;&#x10E2;&#x10E3;
                                (Vanuatu)
                              </option>
                              <option value="237">
                                &#x10D5;&#x10D4;&#x10DC;&#x10D4;&#x10E1;&#x10E3;&#x10D4;&#x10DA;&#x10D0;
                                (Venezuela)
                              </option>
                              <option value="238">
                                &#x10D5;&#x10D8;&#x10D4;&#x10E2;&#x10DC;&#x10D0;&#x10DB;&#x10D8;
                                (Vi&#x1EC7;t Nam)
                              </option>
                              <option value="239">
                                &#x10D1;&#x10E0;&#x10D8;&#x10E2;&#x10D0;&#x10DC;&#x10D4;&#x10D7;&#x10D8;&#x10E1;
                                &#x10D5;&#x10D8;&#x10E0;&#x10EF;&#x10D8;&#x10DC;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (British Virgin Islands)
                              </option>
                              <option value="240">
                                &#x10D0;&#x10E8;&#x10E8;-&#x10D8;&#x10E1;
                                &#x10D5;&#x10D8;&#x10E0;&#x10EF;&#x10D8;&#x10DC;&#x10D8;&#x10E1;
                                &#x10D9;&#x10E3;&#x10DC;&#x10EB;&#x10E3;&#x10DA;&#x10D4;&#x10D1;&#x10D8;
                                (U.S. Virgin Islands)
                              </option>
                              <option value="241">
                                &#x10E3;&#x10DD;&#x10DA;&#x10D8;&#x10E1;&#x10D8;
                                &#x10D3;&#x10D0;
                                &#x10E4;&#x10E3;&#x10E2;&#x10E3;&#x10DC;&#x10D0;
                                (Wallis &amp; Futuna)
                              </option>
                              <option value="242">
                                &#x10D3;&#x10D0;&#x10E1;&#x10D0;&#x10D5;&#x10DA;&#x10D4;&#x10D7;
                                &#x10E1;&#x10D0;&#x10F0;&#x10D0;&#x10E0;&#x10D0;
                                (&#x202B;&#x627;&#x644;&#x635;&#x62D;&#x631;&#x627;&#x621;
                                &#x627;&#x644;&#x63A;&#x631;&#x628;&#x64A;&#x629;&#x202C;&#x200E;)
                              </option>
                              <option value="243">
                                &#x10D8;&#x10D4;&#x10DB;&#x10D4;&#x10DC;&#x10D8;
                                (&#x202B;&#x627;&#x644;&#x64A;&#x645;&#x646;&#x202C;&#x200E;)
                              </option>
                              <option value="245">
                                &#x10D6;&#x10D0;&#x10DB;&#x10D1;&#x10D8;&#x10D0;
                                (Zambia)
                              </option>
                              <option value="246">
                                &#x10D6;&#x10D8;&#x10DB;&#x10D1;&#x10D0;&#x10D1;&#x10D5;&#x10D4;
                                (Zimbabwe)
                              </option>
                              <option value="495">
                                &#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10DD;&#x10D1;&#x10D0;
                                &#x10D3;&#x10D8;&#x10E1;&#x10E2;&#x10D0;&#x10DC;&#x10EA;&#x10D8;&#x10E3;&#x10E0;&#x10D0;&#x10D3;
                              </option>
                            </select>
                          </label>
                        </div>

                        <div className="mt-4">
                          <label className="block" htmlFor="CurrentCompany">
                            <span className="text-gray-700 font-semibold">
                              &#x10DB;&#x10D8;&#x10DB;&#x10D3;&#x10D8;&#x10DC;&#x10D0;&#x10E0;&#x10D4;/&#x10D1;&#x10DD;&#x10DA;&#x10DD;
                              &#x10D3;&#x10D0;&#x10DB;&#x10E1;&#x10D0;&#x10E5;&#x10DB;&#x10D4;&#x10D1;&#x10D4;&#x10DA;&#x10D8;
                              &#xD;&#xA;&lt;small
                              className=&quot;hint-text&quot;&gt;&#x10DB;&#x10D8;&#x10E3;&#x10D7;&#x10D8;&#x10D7;&#x10D4;&#x10D7;
                              &quot;N/A&quot; &#x10D7;&#x10E3; &#x10D0;&#x10E0;
                              &#x10D2;&#x10D0;&#x10E5;&#x10D5;&#x10D7;
                              &#x10E1;&#x10D0;&#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10DD;
                              &#x10D2;&#x10D0;&#x10DB;&#x10DD;&#x10EA;&#x10D3;&#x10D8;&#x10DA;&#x10D4;&#x10D1;&#x10D0;&lt;/small&gt;
                            </span>
                            <span className="req-mark"></span>
                            <input
                              className="form-input required"
                              data-val="true"
                              data-val-length="The field CurrentCompany must be a string with a maximum length of 150."
                              data-val-length-max="150"
                              id="Candidate_CurrentCompany"
                              maxLength={150}
                              name="Candidate.CurrentCompany"
                              required
                              type="text"
                              value=""
                            />
                          </label>
                        </div>

                        <div className="mt-4">
                          <label className="block" htmlFor="CurrentTitle">
                            <span className="text-gray-700 font-semibold">
                              &#x10DB;&#x10D8;&#x10DB;&#x10D3;&#x10D8;&#x10DC;&#x10D0;&#x10E0;&#x10D4;/&#x10D1;&#x10DD;&#x10DA;&#x10DD;
                              &#x10DE;&#x10DD;&#x10D6;&#x10D8;&#x10EA;&#x10D8;&#x10D0;
                              &#xD;&#xA;&lt;small
                              className=&quot;hint-text&quot;&gt;&#x10DB;&#x10D8;&#x10E3;&#x10D7;&#x10D8;&#x10D7;&#x10D4;&#x10D7;
                              &quot;N/A&quot; &#x10D7;&#x10E3; &#x10D0;&#x10E0;
                              &#x10D2;&#x10D0;&#x10E5;&#x10D5;&#x10D7;
                              &#x10E1;&#x10D0;&#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10DD;
                              &#x10D2;&#x10D0;&#x10DB;&#x10DD;&#x10EA;&#x10D3;&#x10D8;&#x10DA;&#x10D4;&#x10D1;&#x10D0;&lt;/small&gt;
                            </span>
                            <span className="req-mark"></span>
                          </label>
                          <input
                            className="form-input required"
                            data-val="true"
                            data-val-length="The field CurrentTitle must be a string with a maximum length of 150."
                            data-val-length-max="150"
                            id="Candidate_CurrentTitle"
                            maxLength={150}
                            name="Candidate.CurrentTitle"
                            required
                            type="text"
                            value=""
                          />
                        </div>

                        <div className="mt-4">
                          <label className="block" htmlFor="Email">
                            <span className="text-gray-700 font-semibold">
                              &#x10DE;&#x10D8;&#x10E0;&#x10D0;&#x10D3;&#x10D8;
                              &#x10D4;&#x10DA;-&#x10E4;&#x10DD;&#x10E1;&#x10E2;&#x10D0;
                            </span>
                            <span className="req-mark"></span>
                            <input
                              className="form-input required"
                              data-val="true"
                              data-val-length="The field Email must be a string with a maximum length of 150."
                              data-val-length-max="150"
                              data-val-required="The Email field is required."
                              id="Candidate_Email"
                              maxLength={150}
                              name="Candidate.Email"
                              pattern="[A-Za-z0-9._%&#x2B;-]&#x2B;@[A-Za-z0-9.-]&#x2B;\.[A-Za-z]{1,63}$"
                              required
                              type="email"
                              value=""
                            />
                          </label>
                        </div>

                        <div className="mt-4">
                          <label className="block" htmlFor="Phone">
                            <span className="text-gray-700 font-semibold">
                              &#x10E2;&#x10D4;&#x10DA;&#x10D4;&#x10E4;&#x10DD;&#x10DC;&#x10D8;
                              (&#x10E4;&#x10DD;&#x10E0;&#x10DB;&#x10D0;&#x10E2;&#x10D8;:
                              9955XXXXXXXX)
                            </span>
                            <input
                              className="form-input"
                              data-val="true"
                              data-val-length="The field Phone must be a string with a maximum length of 100."
                              data-val-length-max="100"
                              id="Candidate_Phone"
                              maxLength={100}
                              name="Candidate.Phone"
                              type="text"
                              value=""
                            />
                          </label>
                        </div>

                        <div className="mt-4">
                          <label className="block" htmlFor="cvUpload">
                            <span className="text-gray-700 font-semibold">
                              &#x10D0;&#x10E2;&#x10D5;&#x10D8;&#x10E0;&#x10D7;&#x10D4;&#x10D7;
                              &#x10D7;&#x10E5;&#x10D5;&#x10D4;&#x10DC;&#x10D8;
                              &#x10E0;&#x10D4;&#x10D6;&#x10D8;&#x10E3;&#x10DB;&#x10D4;/CV
                              <span className="req-mark"></span>
                            </span>
                          </label>

                          <div className="file-input-container">
                            <input
                              hidden
                              id="Application_Resume_Name"
                              name="Application.Resume.Name"
                              required
                              type="text"
                              value=""
                            />
                            {/* RESUME or CV */}
                          </div>

                          <input
                            id="Application_Resume_BlobFolder"
                            name="Application.Resume.BlobFolder"
                            type="hidden"
                            value=""
                          />
                          <input
                            id="Application_Resume_BlobName"
                            name="Application.Resume.BlobName"
                            type="hidden"
                            value=""
                          />
                          <input
                            id="Application_Resume_ContentType"
                            name="Application.Resume.ContentType"
                            type="hidden"
                            value=""
                          />

                          <span
                            className="text-red-500 font-normal text-sm"
                            style={{ display: "none" }}
                            id="icloud-error"
                          >
                            iCloud files currently not available
                          </span>
                        </div>

                        <div className="mt-4">
                          <label className="block" htmlFor="CoverLetter">
                            <span className="text-gray-700 font-semibold">
                              &#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10E2;&#x10D8;&#x10D5;&#x10D0;&#x10EA;&#x10D8;&#x10DD;
                              &#x10EC;&#x10D4;&#x10E0;&#x10D8;&#x10DA;&#x10D8;
                              &lt;small
                              className=&quot;hint-text&quot;&gt;&#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10E2;&#x10D8;&#x10D5;&#x10D0;&#x10EA;&#x10D8;&#x10DD;
                              &#x10EC;&#x10D4;&#x10E0;&#x10D8;&#x10DA;&#x10D8;&#x10E1;
                              &#x10E8;&#x10D4;&#x10D5;&#x10E1;&#x10D4;&#x10D1;&#x10D0;
                              &#x10D0;&#x10E3;&#x10EA;&#x10D8;&#x10DA;&#x10D4;&#x10D1;&#x10D4;&#x10DA;&#x10D8;
                              &#x10D0;&#x10E0;
                              &#x10D0;&#x10E0;&#x10D8;&#x10E1;&lt;/small&gt;
                            </span>

                            <textarea
                              className="form-textarea resize-y"
                              id="Application_CoverLetter"
                              name="Application.CoverLetter"
                              rows={3}
                            ></textarea>
                          </label>
                        </div>
                      </fieldset>
                      <input
                        data-val="true"
                        data-val-required="The QuestionId field is required."
                        id="Application_Answers_0__QuestionId"
                        name="Application.Answers[0].QuestionId"
                        type="hidden"
                        value="73795"
                      />{" "}
                      <div className="options-default checkbox-required mt-4">
                        <div className="block">
                          <span className="text-gray-700 font-semibold">
                            &#x10DE;&#x10D4;&#x10E0;&#x10E1;&#x10DD;&#x10DC;&#x10D0;&#x10DA;&#x10E3;&#x10E0;&#x10D8;
                            &#x10DB;&#x10DD;&#x10DC;&#x10D0;&#x10EA;&#x10D4;&#x10DB;&#x10D4;&#x10D1;&#x10D8;&#x10E1;
                            &#x10D3;&#x10D0;&#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10D5;&#x10D4;&#x10D1;&#x10D0;
                            (&#x10DB;&#x10D0;&#x10D7;
                            &#x10E8;&#x10DD;&#x10E0;&#x10D8;&#x10E1;,
                            &#x10E1;&#x10EE;&#x10D5;&#x10D0;
                            &#x10E1;&#x10D0;&#x10EE;&#x10D4;&#x10DA;&#x10DB;&#x10EC;&#x10D8;&#x10E4;&#x10DD;&#x10E1;&#x10D7;&#x10D5;&#x10D8;&#x10E1;
                            &#x10D2;&#x10D0;&#x10D3;&#x10D0;&#x10EA;&#x10D4;&#x10DB;&#x10D0;)
                            &#x10D2;&#x10D0;&#x10DC;&#x10EE;&#x10DD;&#x10E0;&#x10EA;&#x10D8;&#x10D4;&#x10DA;&#x10D3;&#x10D4;&#x10D1;&#x10D0;
                            &#x10E1;&#x10E1;
                            &#x10E1;&#x10D0;&#x10E5;&#x10D0;&#x10E0;&#x10D7;&#x10D5;&#x10D4;&#x10DA;&#x10DD;&#x10E1;
                            &#x10D1;&#x10D0;&#x10DC;&#x10D9;&#x10D8;&#x10E1;
                            &#x10DB;&#x10D8;&#x10D4;&#x10E0; (&#x10E1;/&#x10D9;:
                            204378869) (&#x10DB;&#x10D0;&#x10D7;
                            &#x10E8;&#x10DD;&#x10E0;&#x10D8;&#x10E1;,
                            &#x10E3;&#x10E4;&#x10DA;&#x10D4;&#x10D1;&#x10D0;&#x10DB;&#x10DD;&#x10E1;&#x10D8;&#x10DA;&#x10D8;
                            &#x10DE;&#x10D8;&#x10E0;&#x10D8;&#x10E1;
                            &#x10DB;&#x10D4;&#x10E8;&#x10D5;&#x10D4;&#x10DD;&#x10D1;&#x10D8;&#x10D7;),
                            &#x10E0;&#x10DD;&#x10DB;&#x10D4;&#x10DA;&#x10D8;&#x10EA;
                            &#x10DB;&#x10DD;&#x10E5;&#x10DB;&#x10D4;&#x10D3;&#x10D4;&#x10D1;&#x10E1;
                            &#x10DB;&#x10DD;&#x10DC;&#x10D0;&#x10EA;&#x10D4;&#x10DB;&#x10D7;&#x10D0;
                            &#x10D3;&#x10D0;&#x10EA;&#x10D5;&#x10D8;&#x10E1;
                            &#x10E1;&#x10D0;&#x10D4;&#x10E0;&#x10D7;&#x10D0;&#x10E8;&#x10DD;&#x10E0;&#x10D8;&#x10E1;&#x10DD;
                            &#x10E1;&#x10E2;&#x10D0;&#x10DC;&#x10D3;&#x10D0;&#x10E0;&#x10E2;&#x10D4;&#x10D1;&#x10D7;&#x10D0;&#x10DC;
                            &#x10D3;&#x10D0;
                            &#x10DB;&#x10DD;&#x10E5;&#x10DB;&#x10D4;&#x10D3;
                            &#x10D9;&#x10D0;&#x10DC;&#x10DD;&#x10DC;&#x10DB;&#x10D3;&#x10D4;&#x10D1;&#x10DA;&#x10DD;&#x10D1;&#x10D0;&#x10E1;&#x10D7;&#x10D0;&#x10DC;
                            &#x10E8;&#x10D4;&#x10E1;&#x10D0;&#x10D1;&#x10D0;&#x10DB;&#x10D8;&#x10E1;&#x10DD;&#x10D1;&#x10D0;&#x10E8;&#x10D8;.
                            &#x10DE;&#x10D4;&#x10E0;&#x10E1;&#x10DD;&#x10DC;&#x10D0;&#x10DA;&#x10E3;&#x10E0;&#x10D8;
                            &#x10DB;&#x10DD;&#x10DC;&#x10D0;&#x10EA;&#x10D4;&#x10DB;&#x10D4;&#x10D1;&#x10D8;&#x10E1;
                            &#x10D3;&#x10D0;&#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10D5;&#x10D4;&#x10D1;&#x10D8;&#x10E1;
                            &#x10DB;&#x10D8;&#x10D6;&#x10D0;&#x10DC;&#x10D8;&#x10D0;
                            &#x10D9;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D3;&#x10D0;&#x10E2;&#x10D8;&#x10E1;
                            &#x10E8;&#x10D4;&#x10E1;&#x10D0;&#x10D1;&#x10D0;&#x10DB;&#x10D8;&#x10E1;&#x10DD;&#x10D1;&#x10D8;&#x10E1;
                            &#x10D3;&#x10D0;&#x10D3;&#x10D2;&#x10D4;&#x10DC;&#x10D0;
                            &#x10D0;&#x10E0;&#x10E1;&#x10D4;&#x10D1;&#x10E3;&#x10DA;/&#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10DB;&#x10D0;&#x10D5;&#x10DA;&#x10DD;
                            &#x10D5;&#x10D0;&#x10D9;&#x10D0;&#x10DC;&#x10E1;&#x10D8;&#x10D8;&#x10E1;
                            &#x10DB;&#x10DD;&#x10D7;&#x10EE;&#x10DD;&#x10D5;&#x10DC;&#x10D4;&#x10D1;&#x10D7;&#x10D0;&#x10DC;,
                            &#x10D3;&#x10D0;&#x10E1;&#x10D0;&#x10E5;&#x10DB;&#x10D4;&#x10D1;&#x10D8;&#x10E1;
                            &#x10D7;&#x10D0;&#x10DD;&#x10D1;&#x10D0;&#x10D6;&#x10D4;
                            &#x10D2;&#x10D0;&#x10D3;&#x10D0;&#x10EC;&#x10E7;&#x10D5;&#x10D4;&#x10E2;&#x10D8;&#x10DA;&#x10D4;&#x10D1;&#x10D8;&#x10E1;
                            &#x10DB;&#x10D8;&#x10E6;&#x10D4;&#x10D1;&#x10D8;&#x10E1;
                            &#x10DB;&#x10D8;&#x10D6;&#x10DC;&#x10D8;&#x10D7;
                            &#x10D3;&#x10D0;
                            &#x10E8;&#x10D4;&#x10D8;&#x10DC;&#x10D0;&#x10EE;&#x10D4;&#x10D1;&#x10D0;
                            &#x10D0;&#x10E0;&#x10D0;&#x10E3;&#x10DB;&#x10D4;&#x10E2;&#x10D4;&#x10E1;
                            10 &#x10EC;&#x10DA;&#x10D8;&#x10E1;
                            &#x10D5;&#x10D0;&#x10D3;&#x10D8;&#x10E1;&#x10D0;;
                            &#x10DE;&#x10D4;&#x10E0;&#x10E1;&#x10DD;&#x10DC;&#x10D0;&#x10DA;&#x10E3;&#x10E0;&#x10D8;
                            &#x10DB;&#x10DD;&#x10DC;&#x10D0;&#x10EA;&#x10D4;&#x10DB;&#x10D4;&#x10D1;&#x10D8;&#x10E1;
                            &#x10D0;&#x10E2;&#x10D5;&#x10D8;&#x10E0;&#x10D7;&#x10D5;&#x10D0;
                            &#x10EE;&#x10D3;&#x10D4;&#x10D1;&#x10D0; HireHive
                            LTD-&#x10D8;&#x10E1; (&#x10E1;/&#x10D9;: 380350,
                            &#x10D8;&#x10E0;&#x10DA;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D0;,
                            &#x10E5;&#x10DD;&#x10E0;&#x10E5;&#x10D8;.)
                            &#x10E6;&#x10E0;&#x10E3;&#x10D1;&#x10DA;&#x10DD;&#x10D5;&#x10D0;&#x10DC;&#x10D8;
                            &#x10E2;&#x10D4;&#x10E5;&#x10DC;&#x10DD;&#x10DA;&#x10DD;&#x10D2;&#x10D8;&#x10D8;&#x10E1;
                            &#x10E1;&#x10D8;&#x10E1;&#x10E2;&#x10D4;&#x10DB;&#x10D0;&#x10E8;&#x10D8;;
                            &#x10E1;&#x10D8;&#x10E1;&#x10E2;&#x10D4;&#x10DB;&#x10D8;&#x10E1;
                            &#x10E8;&#x10D4;&#x10E1;&#x10D0;&#x10EE;&#x10D4;&#x10D1;
                            &#x10D3;&#x10D0;&#x10DB;&#x10D0;&#x10E2;&#x10D4;&#x10D1;&#x10D8;&#x10D7;
                            &#x10D8;&#x10DC;&#x10E4;&#x10DD;&#x10E0;&#x10DB;&#x10D0;&#x10EA;&#x10D8;&#x10D0;
                            &#x10D8;&#x10EE;. hirehive.com.
                            &#x10D9;&#x10D0;&#x10DC;&#x10D3;&#x10D8;&#x10D3;&#x10D0;&#x10E2;&#x10D8;
                            &#x10E3;&#x10E4;&#x10DA;&#x10D4;&#x10D1;&#x10D0;&#x10DB;&#x10DD;&#x10E1;&#x10D8;&#x10DA;&#x10D8;&#x10D0;
                            &#x10DB;&#x10D8;&#x10D8;&#x10E6;&#x10DD;&#x10E1;
                            &#x10D8;&#x10DC;&#x10E4;&#x10DD;&#x10E0;&#x10DB;&#x10D0;&#x10EA;&#x10D8;&#x10D0;
                            &#x10DB;&#x10D8;&#x10E1;
                            &#x10E8;&#x10D4;&#x10E1;&#x10D0;&#x10EE;&#x10D4;&#x10D1;
                            &#x10D3;&#x10D0;&#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10D5;&#x10D4;&#x10D1;&#x10E3;&#x10DA;&#x10D8;
                            &#x10DE;&#x10D4;&#x10E0;&#x10E1;&#x10DD;&#x10DC;&#x10D0;&#x10DA;&#x10E3;&#x10E0;&#x10D8;
                            &#x10DB;&#x10DD;&#x10DC;&#x10D0;&#x10EA;&#x10D4;&#x10DB;&#x10D4;&#x10D1;&#x10D8;&#x10E1;
                            &#x10E8;&#x10D4;&#x10E1;&#x10D0;&#x10EE;&#x10D4;&#x10D1;,
                            &#x10E0;&#x10DD;&#x10DB;&#x10D4;&#x10DA;&#x10D8;&#x10EA;
                            &#x10D7;&#x10D0;&#x10D5;&#x10D0;&#x10D3;
                            &#x10DB;&#x10D8;&#x10D0;&#x10EC;&#x10DD;&#x10D3;&#x10D0;
                            &#x10D1;&#x10D0;&#x10DC;&#x10D9;&#x10E1;
                            &#x10D3;&#x10D0;
                            &#x10DB;&#x10DD;&#x10D8;&#x10D7;&#x10EE;&#x10DD;&#x10D5;&#x10DD;&#x10E1;
                            &#x10D0;&#x10E6;&#x10DC;&#x10D8;&#x10E8;&#x10DC;&#x10E3;&#x10DA;&#x10D8;
                            &#x10D8;&#x10DC;&#x10E4;&#x10DD;&#x10E0;&#x10DB;&#x10D0;&#x10EA;&#x10D8;&#x10D8;&#x10E1;
                            &#x10D2;&#x10D0;&#x10E1;&#x10EC;&#x10DD;&#x10E0;&#x10D4;&#x10D1;&#x10D0;,
                            &#x10D2;&#x10D0;&#x10DC;&#x10D0;&#x10EE;&#x10DA;&#x10D4;&#x10D1;&#x10D0;,
                            &#x10D3;&#x10D0;&#x10DB;&#x10D0;&#x10E2;&#x10D4;&#x10D1;&#x10D0;,
                            &#x10D3;&#x10D0;&#x10D1;&#x10DA;&#x10DD;&#x10D9;&#x10D5;&#x10D0;,
                            &#x10EC;&#x10D0;&#x10E8;&#x10DA;&#x10D0;
                            &#x10D3;&#x10D0;/&#x10D0;&#x10DC;
                            &#x10D2;&#x10D0;&#x10DC;&#x10D0;&#x10D3;&#x10D2;&#x10E3;&#x10E0;&#x10D4;&#x10D1;&#x10D0;;
                            &#x10D0;&#x10DB;&#x10D8;&#x10E1;&#x10D7;&#x10D5;&#x10D8;&#x10E1;
                            &#x10D2;&#x10D7;&#x10EE;&#x10DD;&#x10D5;&#x10D7;
                            &#x10DB;&#x10DD;&#x10D2;&#x10D5;&#x10DB;&#x10D0;&#x10E0;&#x10D7;&#x10D4;&#x10D7;
                            &#x10D4;&#x10DA;-&#x10E4;&#x10DD;&#x10E1;&#x10E2;&#x10D0;&#x10D6;&#x10D4;:
                            Careers@bog.ge
                          </span>
                          <span className="req-mark"></span>
                          <div className="mt-2">
                            <div className="mb-1">
                              <label
                                className="inline-flex items-center font-normal"
                                htmlFor="question_73795_62143"
                              >
                                <input
                                  data-group-name="question_73795_62143"
                                  id="question_73795_62143"
                                  name="Application.Answers[0].SelectedAnswers"
                                  value="62143"
                                  type="checkbox"
                                  className="form-checkbox h-5 w-5"
                                  required
                                />

                                <span className="ml-2 text-gray-700 leading-tight">
                                  &#x10D5;&#x10D4;&#x10D7;&#x10D0;&#x10DC;&#x10EE;&#x10DB;&#x10D4;&#x10D1;&#x10D8;
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        data-val="true"
                        data-val-required="The QuestionId field is required."
                        id="Application_Answers_1__QuestionId"
                        name="Application.Answers[1].QuestionId"
                        type="hidden"
                        value="93811"
                      />{" "}
                      <div className="options-default  mt-4">
                        <h4 className="font-semibold text-gray-700 mb-1">
                          *
                          &#x10DB;&#x10D8;&#x10E3;&#x10D7;&#x10D8;&#x10D7;&#x10D4;&#x10D7;
                          &#x10D7;&#x10E5;&#x10D5;&#x10D4;&#x10DC;&#x10D8;
                          &#x10E1;&#x10D0;&#x10EE;&#x10D4;&#x10DA;&#x10D8;
                          &#x10D3;&#x10D0;
                          &#x10D2;&#x10D5;&#x10D0;&#x10E0;&#x10D8;
                          &#x10E1;&#x10E0;&#x10E3;&#x10DA;&#x10D0;&#x10D3;,
                          &#x10DE;&#x10D8;&#x10E0;&#x10D0;&#x10D3;&#x10DD;&#x10D1;&#x10D8;&#x10E1;
                          &#x10DB;&#x10DD;&#x10EC;&#x10DB;&#x10DD;&#x10D1;&#x10D8;&#x10E1;
                          &#x10D8;&#x10D3;&#x10D4;&#x10DC;&#x10E2;&#x10E3;&#x10E0;&#x10D0;&#x10D3;
                        </h4>
                        <p className=""></p>
                      </div>
                      <input
                        data-val="true"
                        data-val-required="The QuestionId field is required."
                        id="Application_Answers_2__QuestionId"
                        name="Application.Answers[2].QuestionId"
                        type="hidden"
                        value="93812"
                      />{" "}
                      <div className="options-default  mt-4">
                        <h4 className="font-semibold text-gray-700 mb-1">
                          * &#x10D2;&#x10D7;&#x10EE;&#x10DD;&#x10D5;&#x10D7;,
                          &#x10E1;&#x10D0;&#x10D0;&#x10DE;&#x10DA;&#x10D8;&#x10D9;&#x10D0;&#x10EA;&#x10D8;&#x10DD;
                          &#x10E4;&#x10DD;&#x10E0;&#x10DB;&#x10D0;
                          &#x10E8;&#x10D4;&#x10D0;&#x10D5;&#x10E1;&#x10DD;&#x10D7;
                          &#x10E5;&#x10D0;&#x10E0;&#x10D7;&#x10E3;&#x10DA;&#x10D8;
                          &#x10E4;&#x10DD;&#x10DC;&#x10E2;&#x10D8;&#x10D7;
                        </h4>
                        <p className=""></p>
                      </div>
                      <div className="text-center mt-8">
                        <button
                          id="submitBtn"
                          type="submit"
                          className="btn-color loading-button px-8 py-2 font-medium text-white rounded shadow-sm button"
                        >
                          <span className="circle-loader text-gray-600"></span>
                          <span className="apply-button-text button-content">
                            &#x10D2;&#x10D0;&#x10DB;&#x10DD;&#x10D0;&#x10D2;&#x10D6;&#x10D0;&#x10D5;&#x10DC;&#x10D4;&#x10D7;
                            &#x10D2;&#x10D0;&#x10DC;&#x10D0;&#x10EA;&#x10EE;&#x10D0;&#x10D3;&#x10D8;
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <footer className="bg-gray-300 border-t-2 border-gray-400 flex flex-col items-center justify-center py-12 text-gray-800 hh-footer">
              <p className="flex flex-col items-center sm:flex-row">
                <span>© JSC Bank of Georgia 2021.</span>
                <span className="sm:ml-2">
                  Powered by
                  <a
                    className="footer-logo* inline-flex"
                    href="https://hirehive.com"
                    title="HireHive Recruiting Software"
                  >
                    <svg
                      className="logo logo-default mr-4"
                      viewBox="0 0 160 42"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="logo-last"
                        d="M107.937 9.56L92.823.85c-.806-.465-2.123-.465-2.93 0L74.78 9.56c-.806.464-1.465 1.603-1.465 2.53v17.42c0 .93.66 2.07 1.465 2.533l15.114 8.71c.806.465 2.123.465 2.93 0l15.113-8.71c.806-.463 1.464-1.603 1.464-2.532V12.09c0-.927-.65-2.066-1.46-2.53zm-3.592 1.156c0 .858-.517 1.306-1.34 1.41l-2.165.24V28.68l2.164.24c.824.103 1.34.517 1.34 1.375v.515c0 .825-.55 1.306-1.375 1.306h-8.66c-.79 0-1.31-.48-1.31-1.306v-.55c0-.823.48-1.237 1.27-1.34l1.75-.24v-6.527h-9.34v6.527l1.78.24c.79.103 1.27.517 1.27 1.34v.55c0 .825-.48 1.306-1.34 1.306h-8.62c-.83 0-1.41-.48-1.41-1.306v-.515c0-.858.55-1.306 1.37-1.375l2.16-.24V12.366l-2.17-.24c-.83-.104-1.38-.55-1.38-1.41v-.48c0-.893.58-1.34 1.41-1.34h8.63c.852 0 1.34.447 1.34 1.34v.516c0 .824-.48 1.27-1.278 1.375l-1.783.24v5.77h9.345v-5.77l-1.756-.24c-.79-.104-1.27-.55-1.27-1.375v-.516c0-.893.52-1.34 1.31-1.34h8.656c.827 0 1.378.447 1.378 1.34v.48zm11.832 1.645c.106.07.28.07.387 0l1.996-1.14c.106-.06.193-.21.193-.33v-2.3c0-.12-.087-.27-.193-.33l-1.996-1.15c-.106-.06-.28-.06-.387 0l-1.995 1.15c-.106.06-.194.21-.194.34v2.3c0 .12.088.27.194.34l1.995 1.15zm42.277 15.26c-.172 0-.55.04-.825.14-1.45.66-2.86 1.1-4.5 1.1-2.55 0-4.06-1.37-4.33-3.5-.04-.27-.04-.75-.04-1.06h9.82c.44 0 .93-.17 1.1-.44.24-.34.31-.86.31-1.23 0-4.29-1.24-8.24-7.32-8.24-4.57 0-8.59 3.09-8.59 9.45 0 5.22 2.92 8.87 7.93 8.87 2.71 0 4.88-.69 7.04-1.85.48-.24.79-.69.79-1.203 0-.342-.07-.823-.42-1.34-.28-.48-.55-.653-1-.653zm-5.874-9.92c2.19 0 3.05 1.17 3.05 2.72 0 .24 0 .41-.035.69h-6.7c.31-2.2 1.82-3.4 3.676-3.4zm-31.75 11.27l-1.89-.24V15.8c0-.893-.55-1.306-1.236-1.306-1.34.035-3.677.447-5.36.86-.618.17-1.03.617-1.03 1.442v.515c0 .86.447 1.31 1.27 1.31h1.89v10.13l-1.785.21c-.79.07-1.24.52-1.24 1.34v.52c0 .86.48 1.31 1.3 1.31h8c.82 0 1.27-.48 1.27-1.3v-.52c0-.82-.42-1.23-1.21-1.34zm21.194-14.01h-6.87c-.824 0-1.27.45-1.27 1.34v.45c0 .83.41 1.34 1.2 1.41l1.306.14c-1.75 4.5-2.575 7.01-3.33 9.48-.858-2.54-1.58-4.87-3.4-9.48l1.305-.13c.79-.07 1.203-.58 1.203-1.41v-.45c0-.89-.45-1.34-1.27-1.34h-7.046c-.824 0-1.27.45-1.27 1.34v.48c0 .79.34 1.27 1.2 1.38l.997.14 5.05 12.58c.31.75.89 1.27 1.68 1.27h2.78c.79 0 1.4-.48 1.64-1.17l5.15-12.64.99-.17c.79-.105 1.2-.586 1.2-1.41v-.48c0-.86-.45-1.307-1.28-1.307z"
                      />
                      <path
                        className="logo-first"
                        d="M24.695 8.807h-8.69c-.794 0-1.31.448-1.31 1.346v.517c0 .83.482 1.276 1.274 1.38l1.76.242v5.793H8.34v-5.793l1.795-.242c.792-.104 1.275-.55 1.275-1.38v-.517c0-.897-.483-1.346-1.345-1.346h-8.65C.587 8.807 0 9.255 0 10.153v.482c0 .863.553 1.31 1.38 1.414l2.172.24v16.38l-2.172.24c-.826.07-1.38.52-1.38 1.38v.52c0 .82.587 1.31 1.416 1.31h8.656c.862 0 1.345-.49 1.345-1.31v-.56c0-.83-.483-1.24-1.275-1.35l-1.795-.24v-6.55h9.383v6.55l-1.76.24c-.793.1-1.276.52-1.276 1.34v.56c0 .82.517 1.31 1.312 1.31h8.69c.828 0 1.38-.48 1.38-1.31v-.51c0-.87-.52-1.28-1.345-1.38l-2.17-.24V12.29l2.18-.242c.83-.104 1.35-.55 1.35-1.414v-.482c0-.9-.55-1.347-1.38-1.347zm8.084 3.554c.1.07.28.07.38 0l1.99-1.14c.1-.06.19-.21.19-.33v-2.3c0-.12-.09-.27-.2-.33l-1.99-1.15c-.11-.06-.28-.06-.39 0l-2 1.15c-.11.06-.19.21-.19.34v2.3c0 .12.08.27.19.34l1.99 1.15zm4.65 16.59l-1.9-.24V15.74c0-.897-.56-1.31-1.24-1.31-1.35.034-3.69.448-5.38.862-.63.172-1.04.62-1.04 1.448v.52c0 .86.45 1.31 1.28 1.31h1.89v10.174l-1.8.206c-.8.07-1.25.52-1.25 1.346v.518c0 .862.48 1.31 1.31 1.31h8.04c.82 0 1.27-.482 1.27-1.31v-.518c0-.828-.41-1.243-1.21-1.347zm32.02-1.34c-.18 0-.56.04-.83.14-1.45.66-2.87 1.11-4.52 1.11-2.56 0-4.07-1.38-4.35-3.52-.04-.27-.04-.76-.04-1.07h9.87c.44 0 .93-.17 1.1-.45.24-.34.31-.86.31-1.24 0-4.31-1.25-8.27-7.35-8.27-4.59 0-8.62 3.11-8.62 9.49 0 5.24 2.93 8.9 7.97 8.9 2.72 0 4.9-.69 7.07-1.86.48-.24.79-.69.79-1.2 0-.35-.07-.83-.42-1.35-.28-.48-.55-.65-1-.65zm-5.9-9.96c2.21 0 3.07 1.17 3.07 2.73 0 .25 0 .42-.04.69h-6.72c.31-2.2 1.83-3.41 3.69-3.41zM53.4 14.54c-.275-.1-.586-.133-.93-.133-1.897 0-3.83.38-4.76 2.034v-.69c0-.86-.518-1.27-1.276-1.27-1.378 0-3.036.28-5.31.8-.658.18-1.07.69-1.07 1.48v.52c0 .86.482 1.35 1.31 1.35h1.897v10.1l-1.79.24c-.83.11-1.24.52-1.24 1.35v.52c0 .86.48 1.31 1.28 1.31h8.59c.83 0 1.28-.48 1.28-1.31v-.52c0-.825-.41-1.24-1.21-1.344l-2.41-.276v-8.8c1.21-.93 2.76-1.346 3.73-1.346.274 0 .93.036 1.207.036 1.07 0 1.588-.69 1.588-1.656v-.83c0-.83-.2-1.35-.86-1.555z"
                      />
                    </svg>
                  </a>
                </span>
              </p>
            </footer>
          </>
        );
      })}
    </>
  );
};

export default JobPages;
