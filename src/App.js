import React from 'react';
import Content from './Content.js'
import Main from './Main.js'

class App extends React.Component{
  render (){
    return (
      <div>
      <Main/>
      <Content/>
      </div>
    )
  }
}

export default App;