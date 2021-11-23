import Actions from 'actions/modules/index';
import React, { useState, useEffect } from 'react';

export default function IndexModules({ data, setData }: any) {
  const [search, setSearch] = useState<string>('');
  const [result, setResult] = useState<any>(data?.item);

  function identificationSearch(): void {
    if (search.length == 0) {
      setData(result);
    } else {
      setData(
        result.filter((val: any) => {
          if (search == '') {
            return val;
          } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }),
      );
    }
  }

  useEffect(() => {
    identificationSearch();
  }, [search]);

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
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <Form searchValue={searchValue} setSearchValue={setSearchValue} /> */}
            </div>

            {data.map((item: any) => {
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
