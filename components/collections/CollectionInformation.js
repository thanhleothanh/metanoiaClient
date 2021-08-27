export default function CollectionInformation({
  name,
  description,
  season,
  designers,
  photographers,
  models,
}) {
  return (
    <>
      <h2 className='font-dancingScript text-4xl lg:text-5xl font-medium text-left'>
        {name}
      </h2>
      <h3 className='text-left md:w-3/4 pt-3'>{description}</h3>

      <h4 className='text-left md:w-3/4 pt-3'>
        Mùa: {season || new Date().getFullYear()}
      </h4>
      <h4 className='text-left md:w-3/4 pt-1'>
        Thiết kế: {designers.join(', ')}
      </h4>
      <h4 className='text-left md:w-3/4 pt-1'>
        Chụp ảnh: {photographers.join(', ')}
      </h4>
      <h4 className='text-left md:w-3/4 pt-1'>Mẫu: {models.join(', ')}</h4>
    </>
  );
}
