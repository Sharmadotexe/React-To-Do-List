import React, { useEffect, useState } from 'react'
import './style.css'

//get the local data


const getLocalData = ()=>{
    const list = localStorage.getItem('mytodolist')

    if(list){
        return JSON.parse(list)
    }
    else{
        return []
    }
}

const Todo = () => {

    const [inputdata, setinputdata] = useState("")
    const [item, setitem] = useState(getLocalData())




    /////adddd items functionnn
    const addItem = () => {
        if (!inputdata) {
            alert('fill the input data')
        }

        else {
            const newInputData ={
                id : new Date().getTime().toString(),
                name: inputdata
            }

            setitem([...item,newInputData])
            setinputdata("")
        }
    }


    ///deletee items functionnnn

    const deleteElement = (index)=>{
        const updatedItems = item.filter((curElem)=>{
            return curElem.id !== index
        })
        setitem(updatedItems)
    }


    //remove all function

    const removeAll=()=>{
        setitem([])
    }

    useEffect(()=>{
        localStorage.setItem("mytodolist", JSON.stringify(item))
    }, [item])





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
                            value={inputdata}
                            onChange={(event) => setinputdata(event.target.value)}
                        />
                        <i className="fa fa-plus add-btn" onClick={addItem} ></i>
                        <div className='showItems'>

                            {item.map( (curElem)=>{
                                return(
                                    <div className='eachItem' key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <div className='todo-btn'>
                                        <i className="far fa-edit add-btn"></i>
                                        <i className="far fa-trash-alt add-btn" onClick={()=> deleteElement(curElem.id)}></i>
                                    </div>
                                </div>
                                )
                            })
                            }
                           


                            <button className='btn effect04' data-sm-link-text='Remove All' onClick={()=>removeAll()}>
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
