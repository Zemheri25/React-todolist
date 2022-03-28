import React from 'react'

function Item({item}) {
  const {Task, Date} = item

  const handleClick = (e) => {
    const target = e.currentTarget.parentElement.parentElement;
    target.remove();
  }



  return (

    
    
    <div className='item'>
      <div>
      <h3>{Task}</h3>
      <h4>{Date}</h4>
      </div>

      <div>
        <button onClick={handleClick}>Delete</button>
      </div>
    </div>
  )
}

export default Item