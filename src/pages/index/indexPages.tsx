import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import Navbar from "../../components/navbar/Navbar";
import Notification from "../../components/notification/Notification";
import { ApplicationContext } from "../../application/context/ApplicationContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const IndexPages: React.FC = () => {
  const { jobs } = React.useContext(ApplicationContext)!;
  return (
    <>
      <Helmet>
        <title>
          &#x10D9;&#x10D0;&#x10E0;&#x10D8;&#x10D4;&#x10E0;&#x10D0; |
          &#x10E1;&#x10D0;&#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10DD;&#x10D4;&#x10D1;&#x10D8;
          JSC Bank of Georgia
        </title>
      </Helmet>
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

            {jobs.map((item: any) => {
              return (
                <>
                  <div className="hh-jobs-openings">
                    <Link
                      to={"/job/" + item.route}
                      className="bg-white border-1 border-gray-400 p-4 block mt-3 first:mt-0 rounded hh-job-row transition-shadow duration-200 shadow-none hover:shadow-md"
                    >
                      <h3 className="font-semibold text-xl leading-8 hh-job-row-title">
                        <span className="user-color text-secondary">
                          {item.title}
                        </span>
                      </h3>
                      <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-row-location">
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

                        <div className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-row-experience">
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
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          {item.time}
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="bg-white p-5 sm:py-10 sm:px-0 hh-text-section border-t-2">
          <div className="ql-editor max-w-screen-md mx-auto">
            <p className="ql-align-justify">
              <span style={{ color: "rgb(113, 111, 114)" }}>
                თუ ამჟამად გამოცხადებული ვაკანსიების ჩამონათვალში ვერ აღმოაჩინეთ
                თქვენთვის საინტერესო პოზიცია, შეგიძლიათ სამომავლოდ განსახილველად
                გამოგვიგზავნოთ თქვენი რეზიუმე{" "}
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
    </>
  );
};

export default IndexPages;
