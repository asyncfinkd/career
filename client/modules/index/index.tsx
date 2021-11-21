import React from 'react';
import Header from 'ui/header';
import Hero from 'ui/hero';
import Notification from 'ui/notification';
import Footer from 'ui/footer';
import IndexMap from './components/index-map';

export default function IndexModules({ data }: any) {
  return (
    <>
      {console.log(data)}
      <Header />
      <section className="flex-1 ie-no-flex1">
        <Hero />
        {/* <Banner /> */}
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
                  <IndexMap item={item} />
                </>
              );
            })}
          </div>
        </div>
        <Notification />
      </section>
      <Footer />
    </>
  );
}
