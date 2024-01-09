import React, { useState } from 'react'
import './style.css'

const Todo = () => {




    const[inputdata,setinputdata] = useState("")
    const[item,setitem] = useState([])


    const addItem = ()=>{
        if(!inputdata){
            alert('fill the input data')
        }

        else{
            setitem([...item,inputdata])
        }
        }
    






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
                            className='form-control'
                                value ={inputdata}
                                onChange={(event)=>setinputdata(event.target.value)}
                        />
                        <i className="fa fa-plus add-btn" onClick={addItem} ></i>
                        <div className='showItems'>
                            <div className='eachItem'>
                                <h3>mango</h3>
                                <div className='todo-btn'>
                                    <i className="far fa-edit add-btn"></i>
                                    <i className="far fa-trash-alt add-btn"></i>
                                </div>
                            </div>

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
