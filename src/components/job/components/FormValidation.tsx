import React from "react";
import { useState } from "react";
import Input from "../../../helpers/Input/Input";
import Textarea from "../../../helpers/Textarea/Textarea";
import CountrySelect from "./select/CountrySelect";

const FormValidation: React.FC<any> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [cityOrRegion, setCityOrRegion] = useState<string>("");
  const [countrySelect, setCountrySelect] = useState<string>("GE");
  const [lastHire, setLastHire] = useState<string>("");
  const [lastPosition, setLastPosition] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobilePhone, setMobilePhone] = useState<string>("");
  const [motivationMessage, setMotivationMessage] = useState<string>("");
  return (
    <>
      <form
        name="ApplicationForm"
        accept-charset="UTF-8"
        className="hh-application-form"
      >
        <h3
          className="font-semibold text-2xl text-center"
          style={{ fontFamily: "MarkGEO" }}
        >
          &#x10D2;&#x10D0;&#x10DB;&#x10DD;&#x10D0;&#x10D2;&#x10D6;&#x10D0;&#x10D5;&#x10DC;&#x10D4;&#x10D7;
          &#x10D2;&#x10D0;&#x10DC;&#x10D0;&#x10EA;&#x10EE;&#x10D0;&#x10D3;&#x10D8;
        </h3>
        <fieldset className="my-6">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label
                className="block"
                htmlFor="FirstName"
                style={{ fontFamily: "MarkGEO" }}
              >
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
              <label
                className="block"
                htmlFor="LastName"
                style={{ fontFamily: "MarkGEO" }}
              >
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
            <label
              className="text-gray-700"
              htmlFor="Location"
              style={{ fontFamily: "MarkGEO" }}
            >
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
            <label
              className="block"
              htmlFor="Country"
              style={{ fontFamily: "MarkGEO" }}
            >
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
            <label
              className="block"
              htmlFor="CurrentCompany"
              style={{ fontFamily: "MarkGEO" }}
            >
              <span className="text-gray-700 font-semibold">
                &#x10DB;&#x10D8;&#x10DB;&#x10D3;&#x10D8;&#x10DC;&#x10D0;&#x10E0;&#x10D4;/&#x10D1;&#x10DD;&#x10DA;&#x10DD;
                &#x10D3;&#x10D0;&#x10DB;&#x10E1;&#x10D0;&#x10E5;&#x10DB;&#x10D4;&#x10D1;&#x10D4;&#x10DA;&#x10D8;
                &#xD;&#xA;&lt;small
                class=&quot;hint-text&quot;&gt;&#x10DB;&#x10D8;&#x10E3;&#x10D7;&#x10D8;&#x10D7;&#x10D4;&#x10D7;
                &quot;N/A&quot; &#x10D7;&#x10E3; &#x10D0;&#x10E0;
                &#x10D2;&#x10D0;&#x10E5;&#x10D5;&#x10D7;
                &#x10E1;&#x10D0;&#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10DD;
                &#x10D2;&#x10D0;&#x10DB;&#x10DD;&#x10EA;&#x10D3;&#x10D8;&#x10DA;&#x10D4;&#x10D1;&#x10D0;&lt;/small&gt;
              </span>
              <span className="req-mark"></span>
              <Input
                value={lastHire}
                onChange={(e) => setLastHire(e.target.value)}
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
            <label
              className="block"
              htmlFor="CurrentTitle"
              style={{ fontFamily: "MarkGEO" }}
            >
              <span className="text-gray-700 font-semibold">
                &#x10DB;&#x10D8;&#x10DB;&#x10D3;&#x10D8;&#x10DC;&#x10D0;&#x10E0;&#x10D4;/&#x10D1;&#x10DD;&#x10DA;&#x10DD;
                &#x10DE;&#x10DD;&#x10D6;&#x10D8;&#x10EA;&#x10D8;&#x10D0;
                &#xD;&#xA;&lt;small
                class=&quot;hint-text&quot;&gt;&#x10DB;&#x10D8;&#x10E3;&#x10D7;&#x10D8;&#x10D7;&#x10D4;&#x10D7;
                &quot;N/A&quot; &#x10D7;&#x10E3; &#x10D0;&#x10E0;
                &#x10D2;&#x10D0;&#x10E5;&#x10D5;&#x10D7;
                &#x10E1;&#x10D0;&#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10DD;
                &#x10D2;&#x10D0;&#x10DB;&#x10DD;&#x10EA;&#x10D3;&#x10D8;&#x10DA;&#x10D4;&#x10D1;&#x10D0;&lt;/small&gt;
              </span>
              <span className="req-mark"></span>
            </label>
            <Input
              value={lastPosition}
              onChange={(e) => setLastPosition(e.target.value)}
              props={{
                className: "form-input required",
                maxLength: 150,
                required: true,
                type: "text",
              }}
            />
          </div>

          <div className="mt-4">
            <label
              className="block"
              htmlFor="Email"
              style={{ fontFamily: "MarkGEO" }}
            >
              <span className="text-gray-700 font-semibold">
                &#x10DE;&#x10D8;&#x10E0;&#x10D0;&#x10D3;&#x10D8;
                &#x10D4;&#x10DA;-&#x10E4;&#x10DD;&#x10E1;&#x10E2;&#x10D0;
              </span>
              <span className="req-mark"></span>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                props={{
                  className: "form-input required",
                  maxLength: 150,
                  required: true,
                  type: "email",
                }}
              />
            </label>
          </div>

          <div className="mt-4">
            <label
              className="block"
              htmlFor="Phone"
              style={{ fontFamily: "MarkGEO" }}
            >
              <span className="text-gray-700 font-semibold">
                &#x10E2;&#x10D4;&#x10DA;&#x10D4;&#x10E4;&#x10DD;&#x10DC;&#x10D8;
                (&#x10E4;&#x10DD;&#x10E0;&#x10DB;&#x10D0;&#x10E2;&#x10D8;:
                9955XXXXXXXX)
              </span>
              <Input
                value={mobilePhone}
                onChange={(e) => setMobilePhone(e.target.value)}
                props={{
                  className: "form-input",
                  maxLength: 100,
                  type: "text",
                }}
              />
            </label>
          </div>

          <div className="mt-4">
            <label
              className="block"
              htmlFor="cvUpload"
              style={{ fontFamily: "MarkGEO" }}
            >
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
            <span
              className="text-red-500 font-normal text-sm"
              style={{ display: "none" }}
              id="icloud-error"
            >
              iCloud files currently not available
            </span>
          </div>

          <div className="mt-4">
            <label
              className="block"
              htmlFor="CoverLetter"
              style={{ fontFamily: "MarkGEO" }}
            >
              <span className="text-gray-700 font-semibold">
                &#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10E2;&#x10D8;&#x10D5;&#x10D0;&#x10EA;&#x10D8;&#x10DD;
                &#x10EC;&#x10D4;&#x10E0;&#x10D8;&#x10DA;&#x10D8; &lt;small
                class=&quot;hint-text&quot;&gt;&#x10E1;&#x10D0;&#x10DB;&#x10DD;&#x10E2;&#x10D8;&#x10D5;&#x10D0;&#x10EA;&#x10D8;&#x10DD;
                &#x10EC;&#x10D4;&#x10E0;&#x10D8;&#x10DA;&#x10D8;&#x10E1;
                &#x10E8;&#x10D4;&#x10D5;&#x10E1;&#x10D4;&#x10D1;&#x10D0;
                &#x10D0;&#x10E3;&#x10EA;&#x10D8;&#x10DA;&#x10D4;&#x10D1;&#x10D4;&#x10DA;&#x10D8;
                &#x10D0;&#x10E0; &#x10D0;&#x10E0;&#x10D8;&#x10E1;&lt;/small&gt;
              </span>
              <Textarea
                value={motivationMessage}
                onChange={(e: any) => setMotivationMessage(e.target.value)}
                props={{
                  className: "form-textarea resize-y",
                  rows: 3,
                }}
              />
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
            <span
              className="text-gray-700 font-semibold"
              style={{ fontFamily: "MarkGEO" }}
            >
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
                  style={{ fontFamily: "MarkGEO", fontWeight: 600 }}
                >
                  <Input
                    value="62143"
                    onChange={() => "123"}
                    props={{
                      className: "form-checkbox h-5 w-5",
                      required: true,
                      type: "checkbox",
                      id: "question_73795_62143",
                    }}
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
          <h4
            className="font-semibold text-gray-700 mb-1"
            style={{ fontFamily: "MarkGEO" }}
          >
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
          <h4
            className="font-semibold text-gray-700 mb-1"
            style={{ fontFamily: "MarkGEO" }}
          >
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
            style={{ fontFamily: "MarkGEO" }}
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
