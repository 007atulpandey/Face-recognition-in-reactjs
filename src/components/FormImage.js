import React from 'react';


function ImageForm({onInputChange,onSubmit}){
return (
    <div >
   <p className='f3'>
   {'This Magic Brain will detect faces in your pictures give it a try '} 
       </p>
<div className='center'>
<div className='pa4 br3 shadow-5'>
    <input className = 'f3 pa2 w-70 center' type='tex' onChange = {onInputChange} />
    <button  className ='w-30 grow f3 link ph3 pv2  dib white bg-light-purple center' onClick={onSubmit}>  Detect   </button>
    </div>
</div>

        </div>
)

}

export default ImageForm