import React, { useState } from 'react'
import TopSections from './components/TopSections'
import Categories from '../Categories'
import Crime from './components/hero/Crime'

function CrimePage() {

  const [categorieName, setCategorieName] = useState(null)
  const handleCName = (name) => {
    setCategorieName(name.name)
    
  }
  return (
    <>
    <TopSections/>
    <div className='w-11/12 mx-auto py-10 flex gap-8'>
      <Categories handleCName={handleCName}/>
      <Crime categorieName={categorieName}/>
    </div>
    </>
  )
}

export default CrimePage