import 'aframe'
import React, {Component} from 'react'

class App extends Component {
  render () {
    return (
      <a-scene>

<a-entity gltf-model={require("./EricGtlf/eric.gltf")} rotation="270 0 0" scale="0.01 0.01 0.01" 
                                position="0 2.25 0"></a-entity>
      </a-scene>
    );
  }
}

export default App;
