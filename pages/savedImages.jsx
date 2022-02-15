import { IoHeart, IoCloseCircleSharp } from 'react-icons/io5'
import { useState, useEffect } from 'react'

export default function SavedImages() {
  const [rovers, setRovers] = useState([])
  useEffect(() => {
    const rovers = JSON.parse(localStorage.getItem('rovers')) || []
    setRovers(rovers)
  }, [])
  const handleRemove = (rover) => {
    const left = rovers.filter((rov) => rov.id !== rover.id)
    setRovers(left)
    localStorage.setItem('rovers', JSON.stringify(left))
  }
  return (
    <div className='container mx-auto px-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
      {rovers.map((rover) => (
        <div key={rover.id} className='relative'>
          <IoCloseCircleSharp
            onClick={() => handleRemove(rover)}
            size={26}
            className='absolute top-2 right-2 cursor-pointer'
          />
          <img src={rover.img_src} className='w-full h-72' alt='' />
        </div>
      ))}
    </div>
  )
}
