import Actions from 'actions/pages/index';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

const Home: NextPage = ({
  response,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [data, setData] = Actions.useState(response);

  return (
    <>
      <Actions.IndexModules data={data} setData={setData} />
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

  return { props: { response } };
};

export default Home;
