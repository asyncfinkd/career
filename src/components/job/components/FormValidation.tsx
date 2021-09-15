import React from "react";
import { useState } from "react";
import Input from "../../../helpers/Input/Input";
import CountrySelect from "./select/CountrySelect";

const FormValidation: React.FC<any> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [cityOrRegion, setCityOrRegion] = useState<string>("");
  const [countrySelect, setCountrySelect] = useState<string>("GE");
  return (
    <>
      <form
        name="ApplicationForm"
        accept-charset="UTF-8"
        className="hh-application-form"
      >
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
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  props={{
                    className: "form-input required",
                    maxLength: 100,
                    required: true,
                    type: "text",
                  }}
                />
              </label>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block" htmlFor="LastName">
                <span className="text-gray-700 font-semibold">
                  &#x10D2;&#x10D5;&#x10D0;&#x10E0;&#x10D8;
                </span>
                <span className="req-mark"></span>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  props={{
                    className: "form-input required",
                    maxLength: 100,
                    required: true,
                    type: "text",
                  }}
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
              <Input
                value={cityOrRegion}
                onChange={(e) => setCityOrRegion(e.target.value)}
                props={{
                  className: "form-input required",
                  maxLength: 150,
                  required: true,
                  type: "text",
                }}
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="block" htmlFor="Country">
              <span className="text-gray-700 font-semibold">
                &#x10E5;&#x10D5;&#x10D4;&#x10E7;&#x10D0;&#x10DC;&#x10D0;
              </span>
              <span className="req-mark"></span>
              <CountrySelect
                countrySelect={countrySelect}
                setCountrySelect={(e: any) => setCountrySelect(e.target.value)}
              />
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
                &#x10EC;&#x10D4;&#x10E0;&#x10D8;&#x10DA;&#x10D8; &lt;small
                className=&quot;hint-text&quot;&gt;&#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10E2;&#x10D8;&#x10D5;&#x10D0;&#x10EA;&#x10D8;&#x10DD;
                &#x10EC;&#x10D4;&#x10E0;&#x10D8;&#x10DA;&#x10D8;&#x10E1;
                &#x10E8;&#x10D4;&#x10D5;&#x10E1;&#x10D4;&#x10D1;&#x10D0;
                &#x10D0;&#x10E3;&#x10EA;&#x10D8;&#x10DA;&#x10D4;&#x10D1;&#x10D4;&#x10DA;&#x10D8;
                &#x10D0;&#x10E0; &#x10D0;&#x10E0;&#x10D8;&#x10E1;&lt;/small&gt;
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
              &#x10DB;&#x10D8;&#x10D4;&#x10E0; (&#x10E1;/&#x10D9;: 204378869)
              (&#x10DB;&#x10D0;&#x10D7;
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
              &#x10D3;&#x10D0; &#x10DB;&#x10DD;&#x10E5;&#x10DB;&#x10D4;&#x10D3;
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
              &#x10DB;&#x10D8;&#x10D6;&#x10DC;&#x10D8;&#x10D7; &#x10D3;&#x10D0;
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
              &#x10D1;&#x10D0;&#x10DC;&#x10D9;&#x10E1; &#x10D3;&#x10D0;
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
            * &#x10DB;&#x10D8;&#x10E3;&#x10D7;&#x10D8;&#x10D7;&#x10D4;&#x10D7;
            &#x10D7;&#x10E5;&#x10D5;&#x10D4;&#x10DC;&#x10D8;
            &#x10E1;&#x10D0;&#x10EE;&#x10D4;&#x10DA;&#x10D8; &#x10D3;&#x10D0;
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
    </>
  );
};

export default FormValidation;
