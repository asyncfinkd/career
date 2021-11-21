import Actions from 'actions/modules/index';
import React from 'react';

export default function IndexModules({ data }: any) {
  return (
    <>
      <Actions.Header />
      <section className="flex-1 ie-no-flex1">
        <Actions.Hero />
        <div
          id="jobs"
          className="bg-gray-200 border-t-2 p-4 md:py-10 md:px-0 hh-job-listings"
        >
          <div className="fade-in animate-slow max-w-screen-md mx-auto">
            <div className="bg-white p-4 rounded shadow-md">
              {/* <Form searchValue={searchValue} setSearchValue={setSearchValue} /> */}
            </div>

            {data?.item?.map((item: any) => {
              return (
                <>
                  <Actions.IndexMap item={item} />
                </>
              );
            })}
          </div>
        </div>
        <Actions.Notification />
      </section>
      <Actions.Footer />
    </>
  );
}
