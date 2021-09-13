import React, { useState } from "react";
import Button from "../../helpers/Button/Button";
import Input from "../../helpers/Input/Input";
import FormElement from "../../helpers/Form/Form";

const Form: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <>
      <FormElement
        props={{
          id: "form",
          name: "form",
          onSubmit: (e: any) => e.preventDefault(),
          className: "flex flex-col hh-search-form",
        }}
      >
        <div className="flex">
          <div className="flex-1 hh-search-bar-container">
            <Input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              props={{
                placeholder: "ძებნა",
                className: "hh-search-bar form-control form-input mt-0",
              }}
            />
          </div>
          <Button
            props={{
              type: "submit",
              className:
                "rounded-r px-4 bg-gray-300 hover:bg-gray-400 loading-button",
              ariaLabel: "Search",
            }}
          >
            <span className="circle-loader dark"></span>
            <span className="button-content flex items-center">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 h-5 w-5 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="ml-2">
                &#x10EB;&#x10D4;&#x10D1;&#x10DC;&#x10D0;
              </span>
            </span>
          </Button>
        </div>
      </FormElement>
    </>
  );
};

export default Form;
