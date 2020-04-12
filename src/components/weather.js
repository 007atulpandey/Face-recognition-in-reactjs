import React from 'react';


class weather extends React.Component{

    render(){
        return(
<div>
    {this.props.city && <p class="text"> City :{this.props.city}</p> }
    {this.props.country && <p>country:{this.props.country}</p> }
    {this.props.temperature && <p>temperature: {(this.props.temperature-273.14)} Celcius </p> }
    {this.props.humidity && <p>Humidity :{this.props.humidity}</p> }
    {this.props.description && <p>Description: {this.props.description}</p> }
    {this.props.error && <p> City :{this.props.city}</p> }






    
</div>

        );

    }
}

export default weather;