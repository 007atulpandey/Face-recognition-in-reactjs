import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';
function Logo(){

    return (
    <div >
<Tilt className="Tilt br-2 shadow-2"  options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner  "> <img style={{paddingTop:'30px', paddingLeft:'30px'}} src={brain}></img> </div>
</Tilt>
        </div>
 
    )

}
export default Logo