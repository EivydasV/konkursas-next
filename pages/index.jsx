import { URL, KEY } from '../constants'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import Card from '../components/Card'
import dataj from '../data.json'
import Pagination from '../components/Pagination'
import { useRouter } from 'next/router'
import { Rovers } from '../context/Rovers'
// import Link from 'next/link'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)

  const { rovers, setRovers } = useContext(Rovers)

  // const {
  //   query: { page },
  // } = useRouter()

  const getData = async () => {
    let res
    try {
      res = await axios.get(
        `${URL}?earth_date=2022-2-1&api_key=${KEY}&page=${currentPage}`
      )
      setRovers(res.data)
    } catch (e) {
      setRovers([])
    }
  }

  useEffect(() => {
    getData()
  }, [currentPage])

  return (
    <>
      <div className='container px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {rovers.photos &&
          rovers.photos.map((dat, index) => (
            <Card
              key={index}
              img={dat.img_src}
              landingDate={dat.rover.landing_date}
              title={dat.rover.name}
              id={dat.id}
            />
          ))}
      </div>
      <nav aria-label='Page navigation' className='flex justify-center mt-8'>
        <ul className='inline-flex'>
          <li>
            {/* <Link href={{ pathname: '/', query: { page:  } }}>
              <a>path</a>
            </Link> */}
            <button
              disabled={currentPage <= 1}
              className='h-10 px-5 text-white transition-colors duration-150 bg-gray-600 border border-r-0 border-slate-600 rounded-l-lg focus:shadow-outline hover:bg-gray-500'
              onClick={() =>
                setCurrentPage((prev) => (prev > 0 ? prev - 1 : (prev = 1)))
              }
            >
              Prev
            </button>
          </li>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className='h-10 px-5 text-white transition-colors duration-150 bg-gray-600 border border-slate-600 rounded-r-lg focus:shadow-outline hover:bg-gray-500'
          >
            Next
          </button>
        </ul>
      </nav>
    </>
  )
}
