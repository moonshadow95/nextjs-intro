import Head from 'next/head';
import React from 'react';

const Seo = ({ title }: { title: string }) => (
  <Head>
    <title>{title} | Next Movies</title>
  </Head>
);

export default Seo;
