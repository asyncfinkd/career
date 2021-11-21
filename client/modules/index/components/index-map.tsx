import React from 'react';
import Link from 'next/link';

export default function IndexMap({ item }: any) {
  const { _id, title, location, time } = item;

  return (
    <>
      <div className="hh-jobs-openings">
        <Link href={_id}>
          <a className="bg-white border-1 border-gray-400 p-4 block mt-3 first:mt-0 rounded hh-job-row transition-shadow duration-200 shadow-none hover:shadow-md">
            <h3 className="font-semibold text-xl leading-8 hh-job-row-title">
              <span
                className="user-color text-secondary"
                style={{ fontFamily: 'MarkGEO' }}
              >
                {title}
              </span>
            </h3>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
              <div
                className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-row-location"
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
                {location}
              </div>

              <div
                className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-row-experience"
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {time}
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
