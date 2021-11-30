import React from 'react';

export default function Notification({ email, phone }: any) {
  return (
    <>
      <div className="bg-white p-5 sm:py-10 sm:px-0 hh-text-section border-t-2">
        <div className="ql-editor max-w-screen-md mx-auto">
          <p className="ql-align-justify">
            <span
              style={{ color: 'rgb(113, 111, 114)', fontFamily: 'MarkGEO' }}
            >
              თუ ამჟამად გამოცხადებული ვაკანსიების ჩამონათვალში ვერ აღმოაჩინეთ
              თქვენთვის საინტერესო პოზიცია, შეგიძლიათ სამომავლოდ განსახილველად
              გამოგვიგზავნოთ თქვენი რეზიუმე{' '}
            </span>
            <a
              href="https://my.hirehive.io/jsc-bank-of-georgia/jobs/35823/"
              target="_blank"
              style={{ fontFamily: 'MarkGEO' }}
            >
              ბმულზე.
            </a>
            <span
              style={{ color: 'rgb(113, 111, 114)', fontFamily: 'MarkGEO' }}
            >
              {' '}
              მიღებული ინფორმაცია აისახება საქართველოს ბანკის აპლიკანტების
              ბაზაში და ტალანტების მოზიდვის გუნდი დაგიკავშირდებათ თქვენი
              ინტერესების, ცოდნისა და გამოცდილების შესაბამისი ვაკანსიის
              არსებობის შემთხვევაში.
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white p-5 sm:py-10 sm:px-0 hh-text-section border-t-2">
        <div className="ql-editor max-w-screen-md mx-auto">
          <h2>
            <br />
          </h2>
          <p className="ql-align-center">
            <span style={{ color: 'rgb(91,91,91)', fontFamily: 'MarkGEO' }}>
              ტალანტების მოზიდვის გუნდი&nbsp;
            </span>
          </p>
          <p className="ql-align-center">
            <span style={{ color: 'rgb(91,91,91)', fontFamily: 'MarkGEO' }}>
              საქართველოს ბანკი
            </span>
          </p>
          <p className="ql-align-center">
            <span style={{ color: 'rgb(91,91,91)', fontFamily: 'MarkGEO' }}>
              ელ.ფოსტა: {email}&nbsp;
            </span>
          </p>
          <p className="ql-align-center">
            <span style={{ color: 'rgb(91,91,91)', fontFamily: 'MarkGEO' }}>
              ტელეფონი: {phone}
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}
