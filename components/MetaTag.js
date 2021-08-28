import Head from 'next/head';

export default function MetaTag({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, viewport-fit=cover'
      />
      <meta name='description' content={description}></meta>
      <meta property='og:title' content={title} />
    </Head>
  );
}
