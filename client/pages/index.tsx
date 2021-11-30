import Actions from 'actions/pages/index';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

const Home: NextPage = ({
  response,
  secondResponse,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [data, setData] = Actions.useState(response?.item);

  return (
    <>
      {console.log(secondResponse)}
      <Actions.IndexModules
        data={data}
        setData={setData}
        email={secondResponse.item.email}
        phone={secondResponse.item.phone}
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
