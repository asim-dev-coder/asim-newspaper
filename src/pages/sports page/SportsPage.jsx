import React, { useState } from 'react'
import TopSections from './components/TopSections'
import Categories from '../Categories'
import Sports from './components/hero/Sports'

function SportsPage() {

  const [categorieName, setCategorieName] = useState(null)
  const handleCName = (name) => {
    setCategorieName(name.name)
    
  }
  return (
    <>
    <TopSections/>
    <div className='w-11/12 mx-auto py-10 flex gap-8'>
      <Categories handleCName={handleCName}/>
      <Sports categorieName={categorieName}/>
    </div>
    </>
  )
}

export default SportsPage