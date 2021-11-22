import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import React, { useState } from 'react';
import Header from 'ui/header';
import Head from 'next/head';
import JobModules from 'modules/job';

export default function JobPages({
  response,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [data, setData] = useState(response.result);

  return (
    <>
      <JobModules data={data} />
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
