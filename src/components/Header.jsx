import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../features/themeslice'
import {increment, decrement} from '../features/counterslice'

function Header() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        Count: {count}
        <button onClick={()=> dispatch(changeTheme())}> Change Theme</button>
    </div>
  )
}

export default Header