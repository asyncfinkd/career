import IndexModules from 'modules/index';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { useState } from 'react';

const Home: NextPage = ({
  response,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [data, setData] = useState(response);

  return (
    <>
      <IndexModules data={data} />
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
