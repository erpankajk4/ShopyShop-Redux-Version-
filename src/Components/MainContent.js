import React from 'react'
import ItemCard from './ItemCard'

function MainContent() {
  return (
    <div className="flex flex-wrap p-0 md:p-6 w-full p-1">
        <ItemCard />
        <ItemCard />
        <ItemCard />
    </div>
  )
}

export default MainContent;