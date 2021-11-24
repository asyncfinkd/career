import React from 'react';

export default function IndexNotFound({setSearchValue}: any) {
  return (
    <>
      <div className="fade-in animate-slow max-w-screen-md mx-auto mt-3">
        <div
          className="hh-no-search-results bg-white rounded p-4 flex items-center justify-center"
          style={{ fontFamily: 'MarkGEO' }}
        >
          <h3 className="font-semibold text-xl">
            თქვენს მიერ მითითებული მონაცემებით არ იძებენება მიმდინარე ვაკანსია
          </h3>
          <a
            className="ml-4 px-4 py-1 font-medium text-blue-500 text-sm rounded shadow-sm button border-blue-500 border-2 hover:text-white hover:bg-blue-500"
            href="#jobs"
            onClick={() => {
                setSearchValue('');
            }}
          >
            ნახე ყველა სამუშაო
          </a>
        </div>

        <div className="hh-jobs-openings"></div>
      </div>
    </>
  );
}
