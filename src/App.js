import React from 'react';
import List from './List.js'
// import Content from './Content.js'
import Main from './Main.js'

class App extends React.Component{
  render (){
    return (
      <div>
      <Main/>
      <List/>
      {/* <Content/> */}
      </div>
    )
  }
}

export default App;