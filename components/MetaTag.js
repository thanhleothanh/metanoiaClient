import Head from 'next/head';

export default function MetaTag({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
    </Head>
  );
}
