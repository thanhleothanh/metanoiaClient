export default function CollectionInformation({ name, description }) {
  return (
    <>
      <h1 className='font-dancingScript text-4xl lg:text-5xl font-medium text-left'>
        {name}
      </h1>
      <h2 className='text-left lg:w-3/4 pt-3'>{description}</h2>
    </>
  );
}
