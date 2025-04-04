import React, { useState } from 'react'
import TopSections from './components/TopSections'
import Categories from '../Categories'
import Politics from './components/hero/Politics'

function PoliticsPage() {

  const [categorieName, setCategorieName] = useState(null)
  const handleCName = (name) => {
    setCategorieName(name.name)
    
  }
  return (
    <>
    <TopSections/>
    <div className='w-11/12 mx-auto py-10 flex gap-8'>
      <Categories handleCName={handleCName}/>
      <Politics categorieName={categorieName}/>
    </div>
    </>
  )
}

export default PoliticsPage