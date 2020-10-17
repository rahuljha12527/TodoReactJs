import React, { Component } from 'react'
import Todos from './components/Todos'

class App extends Component {
   state={
     todos:[
       {
         id:1,
         title:'Take out the trash',
         completed:false
       }
     ]
   }
  render() {
    return (
      <div>
       <Todos />
      </div>
    )
  }
}


export default App;