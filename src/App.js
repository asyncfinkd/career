import React from "react";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import Notification from "./components/notification/Notification";
import axios from "axios";
import env from "./application/environment/env.json";
import { ApplicationContext } from "./application/context/ApplicationContext";

export default function App() {
  const [jobs, setJobs] = React.useState([]);
  axios.post(`${env.host}/api/getalljob`).then((res) => {
    setJobs(res.data.data);
  }, []);
  return (
    <>
      <ApplicationContext.Provider value={{ jobs }}>
        <Navbar />
        <section className="flex-1 ie-no-flex1">
          <Banner />
          <div
            id="jobs"
            className="bg-gray-200 border-t-2 p-4 md:py-10 md:px-0 hh-job-listings"
          >
            <div className="fade-in animate-slow max-w-screen-md mx-auto">
              <div className="bg-white p-4 rounded shadow-md">
                <Form />
              </div>

              <div class="hh-jobs-openings">
                <a
                  href="/job/83543/-"
                  class="bg-white border-1 border-gray-400 p-4 block mt-3 first:mt-0 rounded hh-job-row transition-shadow duration-200 shadow-none hover:shadow-md"
                >
                  <h3 class="font-semibold text-xl leading-8 hh-job-row-title">
                    <span class="user-color text-secondary">
                      &#x10E1;&#x10D0;&#x10D9;&#x10E0;&#x10D4;&#x10D3;&#x10D8;&#x10E2;&#x10DD;
                      &#x10DD;&#x10DE;&#x10D4;&#x10E0;&#x10D0;&#x10EA;&#x10D8;&#x10D4;&#x10D1;&#x10D8;&#x10E1;
                      &#x10D9;&#x10DD;&#x10DC;&#x10E2;&#x10E0;&#x10DD;&#x10DA;&#x10D8;&#x10E1;
                      &#x10E1;&#x10D0;&#x10DB;&#x10E1;&#x10D0;&#x10EE;&#x10E3;&#x10E0;&#x10D8;&#x10E1;
                      &#x10E3;&#x10E4;&#x10E0;&#x10DD;&#x10E1;&#x10D8;
                    </span>
                  </h3>
                  <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-row-location">
                      <inline-svg>
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="flex-shrink-0 mr-1 h-5 w-5 text-gray-500"
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
                      </inline-svg>
                      &#x10D7;&#x10D1;&#x10D8;&#x10DA;&#x10D8;&#x10E1;&#x10D8;,
                      &#x10E1;&#x10D0;&#x10E5;&#x10D0;&#x10E0;&#x10D7;&#x10D5;&#x10D4;&#x10DA;&#x10DD;
                    </div>

                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-row-experience">
                      <inline-svg>
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          class="flex-shrink-0 mr-1 h-5 w-5 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </inline-svg>
                      &#x10E1;&#x10E0;&#x10E3;&#x10DA;&#x10D8;
                      &#x10D2;&#x10D0;&#x10DC;&#x10D0;&#x10D9;&#x10D5;&#x10D4;&#x10D7;&#x10D8;
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="bg-white p-5 sm:py-10 sm:px-0 hh-text-section border-t-2">
            <div class="ql-editor max-w-screen-md mx-auto">
              <p class="ql-align-justify">
                <span style={{ color: "rgb(113, 111, 114)" }}>
                  თუ ამჟამად გამოცხადებული ვაკანსიების ჩამონათვალში ვერ
                  აღმოაჩინეთ თქვენთვის საინტერესო პოზიცია, შეგიძლიათ სამომავლოდ
                  განსახილველად გამოგვიგზავნოთ თქვენი რეზიუმე{" "}
                </span>
                <a
                  href="https://my.hirehive.io/jsc-bank-of-georgia/jobs/35823/"
                  target="_blank"
                >
                  ბმულზე.
                </a>
                <span style={{ color: "rgb(113, 111, 114)" }}>
                  {" "}
                  მიღებული ინფორმაცია აისახება საქართველოს ბანკის აპლიკანტების
                  ბაზაში და ტალანტების მოზიდვის გუნდი დაგიკავშირდებათ თქვენი
                  ინტერესების, ცოდნისა და გამოცდილების შესაბამისი ვაკანსიის
                  არსებობის შემთხვევაში.
                </span>
              </p>
            </div>
          </div>
          <Notification />
        </section>

        <Footer />
      </ApplicationContext.Provider>
    </>
  );
}
