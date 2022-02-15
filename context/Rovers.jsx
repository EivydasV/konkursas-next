import React, { createContext, useState } from 'react'

export const Rovers = createContext([])

export function RoversProvider({ children }) {
  const [rovers, setRovers] = useState([])
  // const [data, setData] = useState([])
  // const getData = async () => {
  //   let res
  //   try {
  //     res = await axios.get(`${URL}?earth_date=2022-2-1&api_key=${KEY}`)
  //     setData(res.data.photos)
  //   } catch (e) {
  //     //   setError(e.message)
  //     setData([])
  //   }
  // }

  // useEffect(() => {
  //   getData()
  // }, [])
  return (
    <Rovers.Provider value={{ rovers, setRovers }}>{children}</Rovers.Provider>
  )
}
