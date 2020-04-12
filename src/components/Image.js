import React from 'react';
import  './Facerecog.css';

function Image({box,imgurl}){
return (
    <div  className='center ma'>
        <div className="absolute mt2">
     <img  width='500px' height='500px' id='inputimage' src={imgurl}/>
     <div className='bounding-box' style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}} >
     </div>
    </div>

        </div>
)

}

export default Image