import Actions from 'actions/modules/index/components/index-map';
import React from 'react';

export default function IndexMap({ item }: any) {
  const { _id, title, location, time } = item;

  return (
    <>
      <div className="hh-jobs-openings">
        <Actions.Link href={`job/${_id}`}>
          <a className="bg-white border-1 border-gray-400 p-4 block mt-3 first:mt-0 rounded hh-job-row transition-shadow duration-200 shadow-none hover:shadow-md">
            <h3 className="font-semibold text-xl leading-8 hh-job-row-title">
              <span
                className="user-color text-secondary"
                style={{ fontFamily: 'MarkGEO' }}
                dangerouslySetInnerHTML={{ __html: title }}
              ></span>
            </h3>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
              <div
                className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-row-location"
                style={{ fontFamily: 'MarkGEO' }}
                // dangerouslySetInnerHTML={{ __html: location }}
              >
                <Actions.SVG src={Actions.s.LOCATION_SVG} />
                {location}
              </div>

              <div
                className="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6 hh-job-row-experience"
                style={{ fontFamily: 'MarkGEO' }}
              >
                <Actions.SVG src={Actions.s.INFO_SVG} />
                {time}
              </div>
            </div>
          </a>
        </Actions.Link>
      </div>
    </>
  );
}
