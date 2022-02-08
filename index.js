import React from 'react'
import ReactDOM from 'react-dom'
import Profile1 from './images/image1.png'
import Profile2 from './images/image2.png'
import Profile3 from './images/image3.png'
import SingleComment from './singleComments'

const App=()=>{
  return(
    <div>
      <SingleComment name='Jagesh' picture={Profile1} comment="its awsome" date="Today 5:00 pm "  ></SingleComment>
      <SingleComment name='Nakul' picture={Profile2} comment="its good" date="today 7:00 pm " ></SingleComment>
      <SingleComment name='Bheem' picture={Profile3} comment="Its ok" date="today 8:00 pm "  ></SingleComment>
    </div>
    
  )
}
ReactDOM.render(
  <App></App>,
  document.querySelector('#root')
)