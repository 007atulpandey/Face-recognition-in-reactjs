import React from 'react';
import 'tachyons';
import  Navigation from './components/Navigation';
import  Logo from './components/Logo';
import  FormImage from './components/FormImage';
import  Rank from './components/Rank';
import  Image from './components/Image';
import Particles from 'react-particles-js';
import { constants } from 'buffer';
import  Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'c1e6209f6f9348d3856e8d39e81207f9'
 });
 

const Options =
  
  {
    "particles": {
        "number": {
            "value": 130
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": ""
            }
        }
    }


};

class App extends React.Component{
  constructor(){
super();

this.state={
  input:'',
  imgurl:'',
  box:{}

}
  }
 
  calculateFace=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    console.log(clarifaiFace);
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height=Number(image.height);
    return {
      leftCol:clarifaiFace.left_col * width,
      topRow:clarifaiFace.top_row * height,
      rightCol: width-(clarifaiFace.right_col * width),
      bottomRow: height- (clarifaiFace.bottom_row *height)
    }
    
  }
     
  displayFace=(box)=>{
    this.setState({box:box});
    console.log(box);
  }

  
   onInputChange=(event)=>{
      this.setState({input:event.target.value});
     console.log(event.target.value);
     
   }
   


    onSubmit=()=>{
              this.setState({imgurl:this.state.input});       
              app.models.predict("a403429f2ddf4b49b307e318f00e528b",this.state.input)
              .then(
             response => this.displayFace(this.calculateFace(response)))
             .catch(err=>console.log(err));
                console.log('clickeddd');
    }




  render(){
    return (
      <div className='ma4 mt0 '>
      <Particles className="particle"  
                params={Options} />
           <Navigation/>
            <Logo/>
            <Rank/>
            <FormImage onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
            <Image box={this.state.box} imgurl={this.state.imgurl}  /> 
        </div>
    );

  }
}

export default App;