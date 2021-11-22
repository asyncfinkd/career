import React from 'react';

export default function JobHeader({ data }: any) {
  return (
    <>
      <div className="pb-4 border-b-2" role="banner">
        <h1
          className="text-2xl font-semibold leading-7 text-gray-900 sm:text-3xl sm:leading-9 hh-job-title"
          style={{ fontFamily: 'MarkGEO' }}
        >
          {data.title}
        </h1>

        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap hh-job-information">
          <div
            className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-location"
            style={{ fontFamily: 'MarkGEO' }}
          >
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
            {data.location}
          </div>

          <div
            className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-type"
            style={{ fontFamily: 'MarkGEO' }}
          >
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            {data.time}
          </div>
        </div>
      </div>
    </>
  );
}
