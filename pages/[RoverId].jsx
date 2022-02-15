import React, { useEffect, useContext, useState } from 'react'
import { useRouter } from 'next/router'
// import { Rovers } from '../context/Rovers'
import axios from 'axios'
import { URL, KEY } from '../constants'
import { IoHeart } from 'react-icons/io5'
import _ from 'lodash'

export default function RoverId(props) {
  const data = props.data.photos
  const router = useRouter()
  const { RoverId } = router.query
  //   const { rovers, setRovers } = useContext(rovers)
  //   const [data, setData] = useState([])
  const [cameras, setCameras] = useState([])
  console.log(data)
  //   useEffect(() => {
  //     const getData = async () => {
  //       const res = await axios.get(`${URL}?earth_date=2022-2-1&api_key=${KEY}`)
  //       setData(res.data.photos)
  //     }
  //     getData()
  //   }, [])

  useEffect(() => {
    getCameras()
  }, [])

  const getCameras = () => {
    const current = data.find((rev) => rev.id == RoverId)
    console.log(data)
    const count = data.filter((rev) => {
      return rev.rover.name === current.rover.name
    })
    const unique = [...new Set(count.map((item) => item.camera.name))]
    console.log({ unique })
    setCameras(unique)
  }

  const addToLocalStorage = (item) => {
    const existingRovers = JSON.parse(localStorage.getItem('rovers')) || []
    if (existingRovers.length) {
      const checkIfExists = existingRovers.find((rover) => rover.id == item.id)
      if (checkIfExists) {
        return
      }
    }
    existingRovers.push(item)
    localStorage.setItem('rovers', JSON.stringify(existingRovers))
  }
  return (
    <div className='container mx-auto px-3'>
      {data.length > 0 &&
        data
          .filter((data) => data.id == RoverId)
          .map((data) => (
            <div key={data.id} className='space-y-3'>
              <h1 className='text-4xl font-semibold'>{data.rover.name}</h1>
              <div className='relative'>
                <IoHeart
                  size={36}
                  className='absolute top-2 right-2 shadow-sm cursor-pointer text-red-500'
                  onClick={() => addToLocalStorage(data)}
                />
                <img
                  src={data.img_src}
                  alt=''
                  className='w-full h-[500px] object-cover rounded'
                />
              </div>
            </div>
          ))}
      <h1 className='mt-5 font-semibold text-2xl'>Cameras</h1>
      <ul className='space-y-3 mt-5'>
        {cameras.map((cam) => (
          <li
            key={cam}
            className='bg-slate-800 text-center font-medium text-lg py-1 rounded-md hover:bg-slate-700 cursor-pointer transition-colors'
          >
            {cam}
          </li>
        ))}
      </ul>
    </div>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(`${URL}?earth_date=2022-2-1&api_key=${KEY}`)
  // Pass data to the page via props
  return { props: { data: res.data || [] } }
}
