import React from 'react';
import Content from './Content.js'
import Header from './Header.js'

class App extends React.Component{
  render (){
    return (
      <div>
      <Header/>
      <Content/>
      </div>
    )
  }
}

export default App;