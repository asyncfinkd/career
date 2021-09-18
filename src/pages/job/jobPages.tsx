import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "../../application/environment/env.json";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import dompurify from "dompurify";
import { useParams } from "react-router-dom";
import JobPagesList from "../../components/job/components/JobPagesList";
import Footer from "../../components/job/components/Footer";
import Header from "../../components/job/components/Header";
import Form from "../../components/job/Form";

type T = any;

const JobPages: React.FC = () => {
  const { id } = useParams<any>();
  const sanitizer = dompurify.sanitize;
  const [data, setData] = useState<any>({});

  useEffect(() => {
    axios.get(`${env.host}/api/job/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>
          {`${data.title} | JSC Bank of Georgia |
          &#x10D7;&#x10D1;&#x10D8;&#x10DA;&#x10D8;&#x10E1;&#x10D8;`}
        </title>
      </Helmet>
      <Navbar />
      <div className="flex flex-1 ie-no-flex1 max-w-screen-xl mx-auto w-full">
        <div className=" flex-1 flex flex-wrap" id="job-83543">
          <article className="w-full md:w-7/12 pl-4 pr-6 p-6">
            <Header data={data} />
            <JobPagesList
              description={data.description}
              lastTime={data.lastTime}
            />
          </article>
          <div className="border-l-2 flex-1 flex-col h-auto opacity-0 md:opacity-100 hidden md:block"></div>
          <Form
            title={data.title}
            location={data.location}
            time={data.time}
            data={data.description}
          />
        </div>
      </div>
      {/* CV Enter a Validation */}
      <Footer />
    </>
  );
};

export default JobPages;
