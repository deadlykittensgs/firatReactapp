import React, { useState } from 'react'
import "./LeftSelectionBar.css"

export default function LeftSelectionBar() {



  let [currentInfo, setNewInfo] = useState('starting text')

  const handleChangeText = (kind) => {
    if (kind == "forloop")
    { setNewInfo("forLoop")}
    if (kind == "whileloop")
    { setNewInfo("this is what a while loop is")}
    if (kind == "map")
    { setNewInfo("this is what a map is")}
    if (kind == "forEach")
    { setNewInfo("this is what a while loop is")}
 

    
    

  }
  
  

  return (
    <section>
      <div className='middle'>
<div className='LeftSelectionBar'>
<button> JavaScript </button>
<button> HTML </button>
<button> CSS </button>
<button> Python </button>
<button> C# </button>
<button> C </button>
</div>
<div className='bodyContent'>

<div className='nameChoices'>
 <h5>Formats</h5>
 <div className='pageOptions'>
<button onClick={() => handleChangeText("forloop")}> for loop </button>
<button onClick={() => handleChangeText("whileloop")} > while loop </button>
<button onClick={() => handleChangeText("map")}> map</button>
<button onClick={() => handleChangeText("forEach")}> forEach </button>
<button> for loop </button>
<button> while loop </button>
<button> map</button>
<button> forEach </button>
<button> for loop </button>
<button> while loop </button>
<button> map</button>
<button> forEach </button>
</div>
</div>
<div className='information'>
  {currentInfo}
</div>

</div>

</div>
    </section>
  
  )


}




