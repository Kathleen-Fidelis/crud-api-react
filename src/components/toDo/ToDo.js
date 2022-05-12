
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ToDoForm from './form/ToDoForm'
import ToDoList from './list/ToDoList'
import { baseUrl } from '../../environments'

function ToDo(props) {

    const URL = `${baseUrl}/todo`
    const [tasks, setTasks] = useState([])

    //useEffect carrega o q está dentro dele toda vez q houver uma mudança de estado
    useEffect(() => {
        getTasks()
    },[])

    //metodo get(recebe um parametro, a url)
    const getTasks = () => {
        axios.get(`${URL}`)
        .then((response) => {
            setTasks(response.data)
        })
    }

    //metodo post(recebe dois parametros: a url e o corpo do objeto)
    const registerTask = (descriptionForm) => {
        axios.post(`${URL}`, {description: descriptionForm, status: false}) //nome do atributo: nome da variavel
        .then((response) => {
            getTasks()
        })
    }

    return(
        <>
        {/*O botão cadastrar do form recebe um metodo submit, q recebe uma props register, q é a passada abaixo, q recebe o metodo registerTask(metodo post) */}
            <ToDoForm register={registerTask}/>
            <ToDoList tasks={tasks}/>
        </>
    )
}

export default ToDo