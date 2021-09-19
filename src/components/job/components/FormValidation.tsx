import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CountrySelect from "./select/CountrySelect";
import env from "../../../application/environment/env.json";
import { ToastContainer, toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";
import dompurify from "dompurify";

type Inputs = {
  firstName: string;
  lastName: string;
  cityOrRegion: string;
  lastHired: string;
  lastPosition: string;
  email: string;
  phone: string;
  motivationMessage: string;
  acceptTerms: boolean;
};

const FormValidation: React.FC<any> = ({
  title,
  location,
  time,
  data,
}: any) => {
  const sanitizer = dompurify.sanitize;
  const [country, setCountry] = useState<string>("GE");
  const {
    register,
    handleSubmit,
    setValue,
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
  const onSubmit: SubmitHandler<Inputs | any> = async (data: any) => {
    let promise = (state: string) => {
      const result = new Promise((resolve: any, reject: any) => {
        setTimeout(state == "resolve" ? resolve : reject, 0);
      });
      toast.promise(result, {
        pending: "გთხოვთ დაელოდოთ...",
        success: "თქვენი განაცხადი წარმატებით გაიგზავნა!",
        error: "თქვენი განაცხადი ვერ გაიგზავნა!",
      });
    };
    try {
      await axios
        .post(`${env.host}/api/add/users`, {
          firstName: data.firstName,
          lastName: data.lastName,
          cityOrRegion: data.cityOrRegion,
          country: country,
          lastHired: data.lastHired,
          lastPosition: data.lastPosition,
          email: data.email,
          mobilePhone: data.phone,
          motivationMessage: data.motivationMessage,
          checked: data.acceptTerms,
          ipAddress: ipAddress,
          applicationTitle: title,
          applicationLocation: location,
          applicationTime: time,
        })
        .then((res: any) => {
          if (res.data.success) {
            promise("resolve");
            window.scrollTo(0, 0);
            const value: Array<string> = [
              "firstName",
              "lastName",
              "cityOrRegion",
              "lastHired",
              "lastPosition",
              "email",
              "phone",
              "motivationMessage",
            ];
            value.map((item: any) => {
              setValue(item, "");
            });
            setValue("acceptTerms", false);
          }
        });
    } catch (err) {
      promise("reject");
    }
  };

  return (
    <>
      <ToastContainer />
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
                  className="form-input required"
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
                  className="form-input required"
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
          {data?.map((input: any) => {
            return (
              <>
                {input.inputs.map((secondInput: any) => {
                  return (
                    <>
                      {secondInput.type == "text" && (
                        <>
                          <div className="mt-4">
                            <label
                              className="text-gray-700"
                              htmlFor={secondInput.name}
                              style={{ fontFamily: "MarkGEO" }}
                            >
                              <span className="text-gray-700 font-semibold">
                                {secondInput.text}
                              </span>
                              <span className="req-mark"></span>
                              <input
                                type={secondInput.type}
                                {...register(secondInput.name, {
                                  required: "სავალდებულო ველი",
                                })}
                                maxLength={
                                  secondInput.maxLength != "" &&
                                  secondInput.maxLength
                                }
                                className="form-input required"
                              />
                            </label>
                            <ErrorMessage
                              errors={errors}
                              name={secondInput.name}
                              render={({ message }) => (
                                <p
                                  className="form-error-txt"
                                  style={{
                                    marginTop: "3px",
                                    fontFamily: "MarkGEO",
                                    fontSize: "14px",
                                  }}
                                >
                                  {message}
                                </p>
                              )}
                            />
                          </div>
                        </>
                      )}
                      {secondInput.type == "select" && (
                        <>
                          <div className="mt-4">
                            <label
                              className="block"
                              htmlFor="Country"
                              style={{ fontFamily: "MarkGEO" }}
                            >
                              <span
                                className="text-gray-700 font-semibold"
                                dangerouslySetInnerHTML={{
                                  __html: sanitizer(secondInput.text),
                                }}
                              ></span>
                              <span className="req-mark"></span>
                              <CountrySelect
                                countrySelect={country}
                                setCountrySelect={(e: any) =>
                                  setCountry(e.target.value)
                                }
                              />
                            </label>
                          </div>
                        </>
                      )}
                      {secondInput.type == "email" && (
                        <>
                          <div className="mt-4">
                            <label
                              className="text-gray-700"
                              htmlFor={secondInput.name}
                              style={{ fontFamily: "MarkGEO" }}
                            >
                              <span className="text-gray-700 font-semibold">
                                {secondInput.text}
                              </span>
                              <span className="req-mark"></span>
                              <input
                                type={secondInput.type}
                                {...register(secondInput.name, {
                                  required: "სავალდებულო ველი",
                                })}
                                maxLength={
                                  secondInput.maxLength != "" &&
                                  secondInput.maxLength
                                }
                                className="form-input required"
                              />
                            </label>
                            <ErrorMessage
                              errors={errors}
                              name={secondInput.name}
                              render={({ message }) => (
                                <p
                                  className="form-error-txt"
                                  style={{
                                    marginTop: "3px",
                                    fontFamily: "MarkGEO",
                                    fontSize: "14px",
                                  }}
                                >
                                  {message}
                                </p>
                              )}
                            />
                          </div>
                        </>
                      )}
                      {secondInput.type == "textarea" && (
                        <>
                          <div className="mt-4">
                            <label
                              className="block"
                              htmlFor={secondInput.name}
                              style={{ fontFamily: "MarkGEO" }}
                            >
                              <span className="text-gray-700 font-semibold">
                                {secondInput.text}
                              </span>
                              <textarea
                                rows={3}
                                {...register(secondInput.name, {
                                  required: "სავალდებულო ველი",
                                })}
                                className="form-input required"
                              ></textarea>
                            </label>
                            <ErrorMessage
                              errors={errors}
                              name={secondInput.name}
                              render={({ message }) => (
                                <p
                                  className="form-error-txt"
                                  style={{
                                    marginTop: "3px",
                                    fontFamily: "MarkGEO",
                                    fontSize: "14px",
                                  }}
                                >
                                  {message}
                                </p>
                              )}
                            />
                          </div>
                        </>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
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
              {data?.map((item: any) => {
                return (
                  <>
                    {item.inputs.map((secondItem: any) => {
                      return (
                        <>
                          {secondItem.type == "checkbox" && (
                            <>
                              <div className="mb-1">
                                <label
                                  className="inline-flex items-center font-normal"
                                  htmlFor={secondItem.name}
                                  style={{
                                    fontFamily: "MarkGEO",
                                    fontWeight: 600,
                                  }}
                                >
                                  <input
                                    type="checkbox"
                                    {...register(secondItem.name, {
                                      required:
                                        'გთხოვთ დააჭიროთ "ვეთანხმები" ღილაკს თუ გსურთ პროცესის გაგრძელება',
                                    })}
                                    id={secondItem.name}
                                    className="form-checkbox h-5 w-5"
                                    name={secondItem.name}
                                  />
                                  <span className="ml-2 text-gray-700 leading-tight">
                                    {secondItem.text}
                                  </span>
                                </label>
                                <ErrorMessage
                                  errors={errors}
                                  name={secondItem.name}
                                  render={({ message }) => (
                                    <p
                                      className="form-error-txt"
                                      style={{
                                        marginTop: "3px",
                                        fontFamily: "MarkGEO",
                                        fontSize: "14px",
                                      }}
                                    >
                                      {message}
                                    </p>
                                  )}
                                />
                              </div>
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
                );
              })}
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
