import React from 'react'

export default function Pagination() {
  return (
    <nav aria-label='Page navigation' className='flex justify-center mt-8'>
      <ul className='inline-flex'>
        <li>
          <button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'>
            Prev
          </button>
        </li>

        <button className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100'>
          Next
        </button>
      </ul>
    </nav>
  )
}
