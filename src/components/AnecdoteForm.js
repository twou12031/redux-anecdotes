import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import { createItem } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const [ newContent, setNewContent ] = useState('')

    const addPerson = ev => {
        ev.preventDefault()
        // createPerson({
        //     newName,
        //     newNumber,
        // })
        dispatch(createItem({
            newContent
        }))

        setNewContent('')
    }

    const disableAddBtn = newContent.length <= 0

    return (
        <div className="formDiv">
            <h2>Create a new Abecdote</h2>
            <form onSubmit={addPerson}>
                <div>
                    content: <input value={newContent} onChange={ev => {
                        setNewContent(ev.target.value)
                    }}/>
                </div>
                <div>
                    <button disabled={disableAddBtn} type="submit">CREATE ONE</button>
                </div>
            </form>
        </div>
    )
}

export default AnecdoteForm
