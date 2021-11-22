import React from 'react';
import Header from 'ui/header';
import Head from 'next/head';
import JobHeader from './components/job-header';
import JobDescription from './components/job-description';
import JobForm from './components/job-form';

export default function JobModules({ data }: any) {
  return (
    <>
      <Head>
        <title>{data?.title} | JSC Bank of Georgia</title>
      </Head>
      <Header />
      <div className="flex flex-1 ie-no-flex1 max-w-screen-xl mx-auto w-full">
        <div className=" flex-1 flex flex-wrap" id="job-83543">
          <article className="w-full md:w-7/12 pl-4 pr-6 p-6">
            <JobHeader data={data} />
            <JobDescription data={data} />
          </article>
          <div className="border-l-2 flex-1 flex-col h-auto opacity-0 md:opacity-100 hidden md:block"></div>
          <JobForm />
        </div>
      </div>
    </>
  );
}
