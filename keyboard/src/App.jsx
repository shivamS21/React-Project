import React from 'react'
import Row1 from './Rows/Row1.jsx'
import Row2 from './Rows/Row2.jsx'
import Row3 from './Rows/Row3.jsx'
import Row4 from './Rows/Row4.jsx'
import Row5 from './Rows/Row5.jsx'
import Row6 from './Rows/Row6.jsx'

const App = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center bg-gradient-to-br from-gray-200 to-gray-400 my-4 px-16 pt-8 rounded-3xl'>
        <div className='border border-gray-400 rounded-2xl'>
          <div className='flex flex-col justify-center items-center gap-1.5 m-2'>
            <Row1/>
            <Row2/>
            <Row3/>
            <Row4/>
            <Row5/>
            <Row6/>
          </div>
        </div>
        <div className='bg-gradient-to-br from-gray-300 to-gray-350 border border-gray-400 mt-2 w-[500px] h-[300px] rounded-2xl mb-[20px]'></div>
      </div>
    </div>
  )
}

export default App