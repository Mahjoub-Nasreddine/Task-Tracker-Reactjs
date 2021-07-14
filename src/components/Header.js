import React from 'react'
import Button from './Button'
const Header = ({name, add, etat}) => {
    
    return (
        <header className='header'>
        <h1>{name}</h1>
        <Button btn1={etat}  func1={add}/>
        </header>
    )
}
Header.defaultProps ={
    name: 'Task Tracker'
}
export default Header
