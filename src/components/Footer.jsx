import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {increment, decrement, incrementByAmount} from '../features/counterslice'

function Footer() {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(increment())}>+c</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <button onClick={()=> dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}

export default Footer