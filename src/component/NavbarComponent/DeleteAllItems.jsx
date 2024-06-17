import React from 'react'
import { deleteAllItems } from '../Slics'
import { useDispatch, useSelector } from 'react-redux'

function DeleteAllItems() {
  let { todoList } = useSelector((store) => store.todo )
  let dispatch = useDispatch()
  return (
    <button className='deleteAllButton' onClick={() => { dispatch(deleteAllItems(todoList)) }}>Delete All</button>
  )
}

export default DeleteAllItems