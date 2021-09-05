import separateBrTag from '@/utils/separateBrTag';

export default function CollectionInformation({ name, description }) {
  return (
    <>
      <h1 className='text-4xl font-medium text-left font-dancingScript lg:text-5xl 2xl:text-6xl 3xl:text-7xl'>
        {name}
      </h1>
      <h2 className='pt-3 space-y-1 text-justify lg:w-4/5 xl:text-lg 2xl:text-xl 3xl:text-2xl 2xl:space-y-2'>
        {separateBrTag(description).map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
      </h2>
    </>
  );
}
