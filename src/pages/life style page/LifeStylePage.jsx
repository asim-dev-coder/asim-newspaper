import React, { useState } from 'react'
import TopSections from './components/TopSections'
import Categories from '../Categories'
import LifeStyle from './components/hero/LifeStyle'

function LifeStylePage() {

  const [categorieName, setCategorieName] = useState(null)
  const handleCName = (name) => {
    setCategorieName(name.name)
    
  }
  return (
    <>
    <TopSections/>
    <div className='w-11/12 mx-auto py-10 flex gap-8'>
      <Categories handleCName={handleCName}/>
      <LifeStyle categorieName={categorieName}/>
    </div>
    </>
  )
}

export default LifeStylePage