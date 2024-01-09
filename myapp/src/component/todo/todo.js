import React from 'react'
import './style.css'

const Todo = () => {
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src='./images/todo.svg' alt='logo'>
                        </img>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input
                            type='text'
                            placeholder='add your task here'
                            className='form-control'>
                        </input>
                        <i className="fa fa-plus add-btn"></i>
                        <div className='showItems'>
                            <button className='btn effect04' data-sm-link-text='Remove All'>
                                <span>
                                    Check list
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
