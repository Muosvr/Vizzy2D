import React, { Component } from 'react';
import { Stage, Layer, Shape } from 'react-konva';
import DimForm from './Form';
import Room from './Room';
import Layout from './Layout';


class App extends Component {
  componentDidMount() {

  }
  state={
    coords:[
      [50, 80],
      [800, 80],
      [800, 400],
      [300, 400],
      [300,500],
      [50, 500]
    ],
    shape: (
        <Shape
        sceneFunc={this.drawShape}
        fill="#00D2FF"
        stroke="black"
        strokeWidth={4}
        draggable
        />
      )
  }

  drawShape = (context, shape) => {
    context.beginPath();
    context.moveTo(this.state.coords[0][0], this.state.coords[0][1]);
    for ( var i =1; i< this.state.coords.length; i++){
      context.lineTo(this.state.coords[i][0], this.state.coords[i][1])
    }
    context.closePath();
    context.fillStrokeShape(shape);
  }

  updateDim = (width, height) => {
    width = parseInt(width)
    height = parseInt(height)
    this.setState({
      coords:[
        [50,80],
        [50 + width, 80],
        [50 + width, 80 + height],
        [50, 80 + height]
      ],
      test: "This is a test"
    }, ()=> {
      this.setState({
        shape: (
          <Shape
          sceneFunc={this.drawShape}
          fill="#00D2FF"
          stroke="black"
          strokeWidth={4}
          draggable
          />
                )
      })
    })

  }



  // onClick = (event) => {

  //   console.log(event.evt.layerX, event.evt.layerY)
  //   this.setState({
  //     coords:[...this.state.coords, [event.evt.layerX, event.evt.layerY]]
  //   })

  //   console.log(this.state.coords);

    // this.setState({
    //   shape: (
    //       <Shape
    //       sceneFunc={this.drawShape}
    //       fill="#00D2FF"
    //       stroke="black"
    //       strokeWidth={4}
    //       draggable
    //       />
    //           )
    // })
  // }


  render() {
    return(
      <Layout>
        <h1>Vizzy</h1>
        <DimForm updateDim={this.updateDim}/>
        <Stage width={window.innerWidth} height={window.innerHeight} onMouseDown={this.onClick}>
          <Layer>
            <Room coords={this.state.coords}/>
          </Layer>
            
        </Stage>
      </Layout>
      
     
    )
      
  }
}

export default App;
