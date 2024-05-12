import React, { useState } from 'react'


export default function Counter() {

let number = useState(0, 1)

function clicked() {

console.log(number)
}

  return (
    <div>

        <button onClick={clicked}>{number}</button>
        <button onClick={clicked} >{number}</button>

    </div>
  )
}
