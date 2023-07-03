import React from 'react'
import Two from './Two'

function One(props) {

  return (
   <>
   <Two wish={props.wish}/>
   </>
  )
}

export default One