import Head from 'next/head';

export default function MetaTag({ title, description }) {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0, viewport-fit=cover'
      />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
    </Head>
  );
}
