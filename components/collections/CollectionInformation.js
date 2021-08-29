export default function CollectionInformation({ name, description }) {
  return (
    <>
      <h1 className='text-4xl font-medium text-left font-dancingScript lg:text-5xl'>
        {name}
      </h1>
      <h2 className='pt-3 text-left lg:w-3/4'>{description}</h2>
    </>
  );
}
