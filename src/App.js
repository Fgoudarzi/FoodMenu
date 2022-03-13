import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
let catList =['all',...new Set(items.map(item=>item.category)) ]

function App() {
  const [data, setData] = useState(items)
  function clickHandler(cat) {
    if (cat === 'all') { setData(items) }
    else {
      const filteredItems = items.filter((item) => item.category === cat)
      setData(filteredItems)
    }
  }
  return (
    <main>
      <section className='section menu'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories clickHandler={clickHandler} catList={catList}></Categories>
        <Menu menuItems={data} ></Menu>
      </section>
    </main>
  )
}

export default App;
