import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {
  const [index, setIndex] = useState(1)

  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserData(response.data)


  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h2
    className='text-gray-400 text-s absolute top-1/2 ml-[46%] -translate-x-1 -translate-y-1'>
    Loading....</h2>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white overflow-auto p-5'>

      <div className='flex flex-wrap gap-4 p-2 h-[85%]'>
        {printUserData}
      </div>

      <Button index={index} setIndex={setIndex} />


    </div>
  )
}

export default App