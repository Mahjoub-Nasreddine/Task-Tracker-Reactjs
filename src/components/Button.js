import React from 'react'

const Button = ({btn1,func1}) => {
    
    return (
        <div>
            <button className='btn' onClick={func1}>{btn1}</button>
        </div>
    )
}
Button.defaultProps={
    btn1 :'***'
}
export default Button
