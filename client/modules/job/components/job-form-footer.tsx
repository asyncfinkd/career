import React from 'react';

export default function JobFormFooter() {
  return (
    <>
      <div className="options-default checkbox-required mt-4">
        <div className="block">
          <span className="text-gray-700 font-semibold">
            პერსონალური მონაცემების დამუშავება (მათ შორის, სხვა სახელმწიფოსთვის
            გადაცემა) განხორციელდება სს საქართველოს ბანკის მიერ (ს/კ: 204378869)
            (მათ შორის, უფლებამოსილი პირის მეშვეობით), რომელიც მოქმედებს
            მონაცემთა დაცვის საერთაშორისო სტანდარტებთან და მოქმედ
            კანონმდებლობასთან შესაბამისობაში. პერსონალური მონაცემების
            დამუშავების მიზანია კანდიდატის შესაბამისობის დადგენა
            არსებულ/სამომავლო ვაკანსიის მოთხოვნებთან, დასაქმების თაობაზე
            გადაწყვეტილების მიღების მიზნით და შეინახება არაუმეტეს 10 წლის
            ვადისა; პერსონალური მონაცემების ატვირთვა ხდება HireHive LTD-ის (ს/კ:
            380350, ირლანდია, ქორქი.) ღრუბლოვანი ტექნოლოგიის სისტემაში; სისტემის
            შესახებ დამატებით ინფორმაცია იხ. hirehive.com. კანდიდატი
            უფლებამოსილია მიიღოს ინფორმაცია მის შესახებ დამუშავებული პერსონალური
            მონაცემების შესახებ, რომელიც თავად მიაწოდა ბანკს და მოითხოვოს
            აღნიშნული ინფორმაციის გასწორება, განახლება, დამატება, დაბლოკვა,
            წაშლა და/ან განადგურება; ამისთვის გთხოვთ მოგვმართეთ ელ-ფოსტაზე:
            Careers@bog.ge
          </span>
          <span className="req-mark"></span>
          <div className="mt-2">
            <div className="mb-1">
              <label
                className="inline-flex items-center font-normal"
                htmlFor="question_73795_62143"
              >
                <input
                  data-group-name="question_73795_62143"
                  id="question_73795_62143"
                  name="Application.Answers[0].SelectedAnswers"
                  value="62143"
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                />

                <span className="ml-2 text-gray-700 leading-tight">
                  ვეთანხმები
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="options-default  mt-4">
        <h4 className="font-semibold text-gray-700 mb-1">
          * მიუთითეთ თქვენი სახელი და გვარი სრულად, პირადობის მოწმობის იდენტურად
        </h4>
        <p className=""></p>
      </div>
      <div className="options-default  mt-4">
        <h4 className="font-semibold text-gray-700 mb-1">
          * გთხოვთ, სააპლიკაციო ფორმა შეავსოთ ქართული ფონტით
        </h4>
        <p className=""></p>
      </div>
      <div className="options-default checkbox-required mt-4">
        <div className="block">
          <span className="text-gray-700 font-semibold">
            გაცნობებთ, რომ ქვეყანაში Covid-19-ის ეპიდემიური ვითარების ფონზე, სს
            საქართველოს ბანკის მიერ შესაბამისი შიდა რეგულაციებით, დადგენილია,
            რომ ყველა ის თანამშრომელი, რომელიც ფიზიკურად დადის ბანკის სამუშაო
            სივრცეებში და არ არის ვაქცინირებული Covid-19-ის საწინააღმდეგო
            რომელიმე ვაქცინის ერთი დოზით მაინც, კვირაში რამდენჯერმე სამუშაო
            სივრცეში დაშვებამდე მოწმდება Covid-19-ის ანტიგენის ტესტით და სამუშაო
            სივრცეში დაიშვება მხოლოდ ტესტირების შედეგად უარყოფითი პასუხის
            დაფიქსირების შემთხვევაში. ამასთან, ბანკის მიერ წინასწარ განსაზღვრული
            საშეღავათო პერიოდის გასვლის შემდეგ (ასეთის არსებობის შემთხვევაში)
            ანტიგენის ტესტირების ხარჯის სრულად ანაზღაურების ვადლებულება ეკისრება
            თანამშრომელს.
          </span>
          <span className="req-mark"></span>
          <div className="mt-2">
            <div className="mb-1">
              <label
                className="inline-flex items-center font-normal"
                htmlFor="question_151208_126251"
              >
                <input
                  data-group-name="question_151208_126251"
                  id="question_151208_126251"
                  name="Application.Answers[3].SelectedAnswers"
                  value="126251"
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                />

                <span className="ml-2 text-gray-700 leading-tight">
                  ვეთანხმები
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          id="submitBtn"
          type="submit"
          className="btn-color loading-button px-8 py-2 font-medium text-white rounded shadow-sm button"
        >
          <span className="circle-loader text-gray-600"></span>
          <span className="apply-button-text button-content">
            გამოაგზავნეთ განაცხადი
          </span>
        </button>
      </div>
    </>
  );
}
