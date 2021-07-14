import React from 'react'
import { useState } from 'react'
const AddTask = ({onAdd}) => {
    const [text, setText]=useState('')
    const [day, setDay]=useState('')
    const [reminder, setRminder]=useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setRminder(false)

    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task Text' value={text} onChange={(e)=>setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day and time</label>
                <input type='text' placeholder='Add Day and time' value={day} onChange={(e)=>setDay(e.target.value)}></input>
            </div>
            <div className='form-control form-control-check '>
                <label>Set reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setRminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='save task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
