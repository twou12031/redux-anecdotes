import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { voteItem } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteItem(id))
    }

    return (
        <div className="anecdote-list">
            {anecdotes.sort((a,b) => {
                return b.votes - a.votes
            }).map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList
