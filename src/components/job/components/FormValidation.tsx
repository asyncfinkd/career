import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../helpers/Input/Input";
import CountrySelect from "./select/CountrySelect";
import env from "../../../application/environment/env.json";
import Swal from "sweetalert2";

type Inputs = {
  firstName: string;
  lastName: string;
  cityOrRegion: string;
  lastHired: string;
  lastPosition: string;
  email: string;
  phone: string;
  motivationMessage: string;
  checked: boolean;
};

const FormValidation: React.FC<any> = ({ title, location, time }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [ipAddress, setIpAddress] = useState<string | null>("");
  useEffect(() => {
    if (!ipAddress || ipAddress.length == 0) {
      fetch("http://api.ipify.org/?format=json")
        .then((data) => data.json())
        .then((result) => {
          setIpAddress(result.ip);
        });
    }
  });
  const onSubmit: SubmitHandler<Inputs | any> = (data: any) => {
    const application = {
      applicationTitle: title,
      aplicationLocation: location,
      aplicationTime: time,
    };
    axios
      .post(`${env.host}/api/add/users`, {
        firstName: data.firstName,
        lastName: data.lastName,
        cityOrRegion: data.cityOrRegion,
        // country
        lastHired: data.lastHired,
        lastPosition: data.lastPosition,
        email: data.email,
        mobilePhone: data.phone,
        motivationMessage: data.motivationMessage,
        checked: false,
        ipAddress: ipAddress,
        applicationTitle: title,
        applicationLocation: location,
        applicationTime: time,
      })
      .then((res: any) => {
        if (res.data.success) {
          Swal.fire(
            "გილოცავთ!",
            "თქვენი განაცხადი წარმატებით გაიგზავნა!",
            "success"
          ).then(() => {
            window.location.href = "/";
          });
        }
      });
    console.log(application);
  };
  console.log(watch("firstName"));

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="hh-application-form"
      >
        <h3
          className="font-semibold text-2xl text-center"
          style={{ fontFamily: "MarkGEO" }}
        >
          გამოაგზავნეთ განაცხადი
        </h3>
        <fieldset className="my-6">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label
                className="block"
                htmlFor="FirstName"
                style={{ fontFamily: "MarkGEO" }}
              >
                <span className="text-gray-700 font-semibold">სახელი</span>
                <span className="req-mark"></span>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  className={
                    errors.firstName
                      ? "form-input required red__signed"
                      : "form-input required"
                  }
                  maxLength={100}
                />
              </label>
              {errors.firstName && (
                <p
                  className="form-error-txt"
                  style={{
                    marginTop: "3px",
                    fontFamily: "MarkGEO",
                    fontSize: "14px",
                  }}
                >
                  სავალდებულო ველი
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block"
                htmlFor="LastName"
                style={{ fontFamily: "MarkGEO" }}
              >
                <span className="text-gray-700 font-semibold">გვარი</span>
                <span className="req-mark"></span>
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  maxLength={100}
                  className={
                    errors.lastName
                      ? "form-input required red__signed"
                      : "form-input required"
                  }
                />
              </label>
              {errors.lastName && (
                <p
                  className="form-error-txt"
                  style={{
                    marginTop: "3px",
                    fontFamily: "MarkGEO",
                    fontSize: "14px",
                  }}
                >
                  სავალდებულო ველი
                </p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label
              className="text-gray-700"
              htmlFor="Location"
              style={{ fontFamily: "MarkGEO" }}
            >
              <span className="text-gray-700 font-semibold">
                ქალაქი/რეგიონი
              </span>
              <span className="req-mark"></span>
              <input
                type="text"
                {...register("cityOrRegion", { required: true })}
                maxLength={150}
                className={
                  errors.cityOrRegion
                    ? "form-input required red__signed"
                    : "form-input required"
                }
              />
            </label>
            {errors.cityOrRegion && (
              <p
                className="form-error-txt"
                style={{
                  marginTop: "3px",
                  fontFamily: "MarkGEO",
                  fontSize: "14px",
                }}
              >
                სავალდებულო ველი
              </p>
            )}
          </div>

          <div className="mt-4">
            <label
              className="block"
              htmlFor="Country"
              style={{ fontFamily: "MarkGEO" }}
            >
              <span className="text-gray-700 font-semibold">ქვეყანა</span>
              <span className="req-mark"></span>
              <CountrySelect />
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
              <input
                type="text"
                maxLength={150}
                className={
                  errors.lastHired
                    ? "form-input required red__signed"
                    : "form-input required"
                }
                {...register("lastHired", { required: true })}
              />
            </label>
            {errors.lastHired && (
              <p
                className="form-error-txt"
                style={{
                  marginTop: "3px",
                  fontFamily: "MarkGEO",
                  fontSize: "14px",
                }}
              >
                სავალდებულო ველი
              </p>
            )}
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
            <input
              type="text"
              maxLength={150}
              {...register("lastPosition", { required: true })}
              className={
                errors.lastPosition
                  ? "form-input required red__signed"
                  : "form-input required"
              }
            />
            {errors.lastPosition && (
              <p
                className="form-error-txt"
                style={{
                  marginTop: "3px",
                  fontFamily: "MarkGEO",
                  fontSize: "14px",
                }}
              >
                სავალდებულო ველი
              </p>
            )}
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
              <input
                type="email"
                {...register("email", { required: true })}
                maxLength={150}
                className={
                  errors.email
                    ? "form-input required red__signed"
                    : "form-input required"
                }
              />
            </label>
            {errors.email && (
              <p
                className="form-error-txt"
                style={{
                  marginTop: "3px",
                  fontFamily: "MarkGEO",
                  fontSize: "14px",
                }}
              >
                სავალდებულო ველი
              </p>
            )}
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
              <input
                type="text"
                className={
                  errors.phone
                    ? "form-input required red__signed"
                    : "form-input required"
                }
                maxLength={100}
                {...register("phone", { required: true })}
              />
            </label>
            {errors.phone && (
              <p
                className="form-error-txt"
                style={{
                  marginTop: "3px",
                  fontFamily: "MarkGEO",
                  fontSize: "14px",
                }}
              >
                სავალდებულო ველი
              </p>
            )}
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
              <textarea
                rows={3}
                {...register("motivationMessage", { required: true })}
                className={
                  errors.motivationMessage
                    ? "form-textarea resize-y red__signed"
                    : "form-textarea resize-y"
                }
              ></textarea>
            </label>
            {errors.motivationMessage && (
              <p
                className="form-error-txt"
                style={{
                  marginTop: "3px",
                  fontFamily: "MarkGEO",
                  fontSize: "14px",
                }}
              >
                სავალდებულო ველი
              </p>
            )}
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
            onClick={handleSubmit(onSubmit)}
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
