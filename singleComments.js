import React from 'react'

const SingleComment=(props)=>{
    return(
        <div className='comment'>
                <a href='/' className='avatar'>
                <img src={props.picture} alt='Propfile picture'></img>
                </a>
            <div className='innerDiv'>
                <a href='/' className='author'> {props.name} </a>
                <div className='metadata'>
                <span className='date'> {props.date} </span>
                </div>
                <div className='text'> <p>{props.comment}</p></div>
            </div>

      </div>
    )
}

export default SingleComment