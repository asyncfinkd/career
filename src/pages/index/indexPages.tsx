import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import Navbar from "../../components/navbar/Navbar";
import Notification from "../../components/notification/Notification";
import { ApplicationContext } from "../../context/ApplicationContext";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import IndexList from "../../components/index/components/IndexList";
import IndexFooter from "../../components/index/components/IndexFooter";
import { isArrayEmpty } from "../../utils";
import SearchAlert from "../../components/search/alert/SearchAlert";

const IndexPages: React.FC = () => {
  const { jobs } = React.useContext(ApplicationContext);
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState<string>("");
  const [data, setData] = useState<any>(jobs);

  const identificationSearch = () => {
    if (searchValue.length == 0) {
      setData(jobs);
    } else {
      setData(
        jobs.filter((val: any) => {
          if (searchValue == "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return val;
          }
        })
      );
    }
  };

  useEffect(() => {
    identificationSearch();
  }, [searchValue]);

  useEffect(() => {
    if (isArrayEmpty(data)) {
      setData(jobs);
    }
  }, [jobs]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      {console.log(data)}
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
              <Form searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>

            {data.map((item: any) => {
              return (
                <>
                  <IndexList item={item} />
                </>
              );
            })}
            {data.length == 0 && (
              <>
                <SearchAlert
                  setSearchValue={setSearchValue}
                  jobs={jobs}
                  setData={setData}
                />
              </>
            )}
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
