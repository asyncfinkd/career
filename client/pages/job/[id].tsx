import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import React, { useState } from 'react';
import Header from 'ui/header';

export default function JobPages({
  response,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [data, setData] = useState(response);

  return (
    <>
      <Header />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
  const request = await fetch(
    `${process.env.SERVER_API_URL}/api/get/post/${ctx.query.id}`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    },
  );

  const response = await request.json();

  return { props: { response } };
};
