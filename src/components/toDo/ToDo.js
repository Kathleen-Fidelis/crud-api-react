
import React from 'react'
import ToDoForm from './form/ToDoForm'
import ToDoList from './list/ToDoList'

function ToDo(props) {

    return(
        <>
            <ToDoForm/>
            <ToDoList/>
        </>
    )
}

export default ToDo