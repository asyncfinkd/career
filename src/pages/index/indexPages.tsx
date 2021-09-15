import React, { useEffect } from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import Navbar from "../../components/navbar/Navbar";
import Notification from "../../components/notification/Notification";
import { ApplicationContext } from "../../context/ApplicationContext";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { JOB } from "../../constants/Routes";
import IndexList from "../../components/index/components/IndexList";
import IndexFooter from "../../components/index/components/IndexFooter";

const IndexPages: React.FC = () => {
  const { jobs } = React.useContext(ApplicationContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
                  <IndexList item={item} />
                </>
              );
            })}
          </div>
        </div>
        <IndexFooter />
        <Notification />
      </section>

      <Footer />
    </>
  );
};

export default IndexPages;
