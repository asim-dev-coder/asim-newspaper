import React, { useState } from 'react'
import TopSections from './components/TopSections'
import Categories from '../Categories'
import Entertainment from './components/hero/Entertainment'

function EntertainmentPage() {

  const [categorieName, setCategorieName] = useState(null)
  const handleCName = (name) => {
    setCategorieName(name.name)
    
  }
  return (
    <>
    <TopSections/>
    <div className='bg-gradient-to-l from-pink-50 via-gray-50 to-green-50'> 
    <div className='w-11/12 mx-auto py-10 flex gap-8'>
      <Categories handleCName={handleCName}/>
      <Entertainment categorieName={categorieName}/>
    </div>
    </div>
    </>
  )
}

export default EntertainmentPage