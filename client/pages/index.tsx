import Actions from 'actions/pages/index';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { AdminContactsInterface } from 'types/pages/admin/contacts';

const Home: NextPage = ({
  response,
  secondResponse,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [data, setData] = Actions.useState(response?.item);
  const [secResponse, setSecResponse] =
    Actions.useState<AdminContactsInterface>(secondResponse?.item);

  return (
    <>
      <Actions.IndexModules
        data={data}
        setData={setData}
        email={secResponse.email}
        phone={secResponse.phone}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const request = await fetch(`${process.env.SERVER_API_URL}/api/get/posts`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });

  const response = await request.json();

  const secondRequest = await fetch(
    `${process.env.SERVER_API_URL}/api/get/contacts/user`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    },
  );

  const secondResponse = await secondRequest.json();

  return { props: { response, secondResponse } };
};

export default Home;
