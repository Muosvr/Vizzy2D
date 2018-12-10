import React, { Component } from 'react';
import { Shape } from 'react-konva';

class Room extends Component{

    drawShape  = (context, shape) => {
        context.beginPath();
        context.moveTo(this.props.coords[0][0], this.props.coords[0][1]);
        for ( var i =1; i< this.props.coords.length; i++){
          context.lineTo(this.props.coords[i][0], this.props.coords[i][1])
        }
        context.closePath();
        context.fillStrokeShape(shape);
    }

    render() {
        return (
            <Shape
            sceneFunc={this.drawShape}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={4}
            draggable
            />
        )
    }
}

export default Room