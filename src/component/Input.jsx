import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from
    'react-redux'
import { addTodoItem } from './Slics'


function Input() {
    let { todoList, todoListTotal } = useSelector((store) => store.todo)


    let inputRef = useRef()

    let dispatch = useDispatch()
    function addButtonClick() {
        let inputValue = inputRef.current.value
        if (inputValue) {
            dispatch(addTodoItem(inputValue))
            // &makinng input value " " again
            // inputRef.current.value = ""
        }
    }

    // & getting input value and storing 

    return (
        <div className="input">
            <div className='totalTask'>
                <h5>Tasks : {todoListTotal}</h5>
            </div>
            <div className="inputSection">
                <input placeholder='Enter Task' ref={inputRef} type="text" />
                <button onClick={addButtonClick} >Add</button>
            </div>

        </div>
    )
}

export default Input