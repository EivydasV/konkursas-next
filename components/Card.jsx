import Link from 'next/link'
const cameras = {
  curiosity: 7,
  Opportunity: 5,
  Spirit: 5,
}
export default function Card({ img, title, landingDate, id }) {
  console.log(cameras[title.toString()])
  return (
    <Link href={`/${id}`}>
      <div className=' rounded overflow-hidden shadow-lg hover:shadow-blue-800/50 bg-gray-900 transition-all hover:translate-y-[-5px] cursor-pointer'>
        <img alt='' src={img} className='w-full h-72 object-cover' />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{title}</div>
          <p className='text-gray-700 text-base'>landing Date: {landingDate}</p>
          <p className='text-gray-700 text-base'>Camera Count: 1</p>
        </div>
      </div>
    </Link>
  )
}
