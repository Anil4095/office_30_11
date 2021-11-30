import React, { useEffect, useState } from 'react'
import '../App.css'


const getLocalItems = () =>{
    let list =localStorage.getItem('lists')
    console.log(list)

    if(list){
        return JSON.parse(localStorage.getItem('lists'))
        
    }else{
        return [];
    }
}

const Todo = () => {


    const [inputData, setInputData] = useState('')
    const [item, setItem] = useState(getLocalItems())
    const [toggleUpdate, setToggleUpdate]=useState(true)
    const [editDone, setEditDone] =useState(null)

    const addItem = () => {

        if (!inputData) {
               alert("fill the data")

            }else if(inputData && !toggleUpdate){
              setItem(
                  item.map((elem)=>{
                      if(elem.id===editDone){
                          return { ...elem, name:inputData}
                      }
                      return elem;
                  })
              )
              setToggleUpdate(true)

              setInputData("")
        
              setEditDone(null)
        } else {
            const allInputData= {id: new Date().getTime().toString(), name:inputData}
            setItem([...item, allInputData])
            setInputData("")
        }

    }
    const deletItem = (index) => {
        const updateItem = item.filter((elem) => {
            return index !== elem.id;
        })

        setItem(updateItem);
    }
    const editItem=(id)=>{
      const newEditItem=item.find((elem)=>{
         return elem.id===id
      })
      console.log(newEditItem)
      setToggleUpdate(false)

      setInputData(newEditItem.name)

      setEditDone(id)
    }

    const removeAll = () => {
        setItem([]);
    }

    useEffect(()=>{
        localStorage.setItem( 'lists', JSON.stringify(item))
    },[item])
    return (


        <div className="">
            <div className="child-div">
                <figure className="title">

                    <figcaption >Add Item Here</figcaption>
                </figure>
                <div className="add-item">
                    <input className="inp-div" type="text" placeholder="add item here..."
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                    />
                     {
                         toggleUpdate ?  <i className="btn-plus" onClick={addItem}>ADD</i>: 
                         <i className="btn-plus" onClick={addItem}>Edit</i>
                     }
                </div>
                <div className="show-item">
                    {
                        item.map((elem) => {
                            return (

                                <div className="each-item" key={elem.id}>
                                    <h3>{elem.name} </h3>
                                    <i className="btn1-plus" onClick={()=>deletItem(elem.id)}>Del</i>
                                    <i className="btn1-plus" onClick={()=>editItem(elem.id)}>Edit</i>
                                    
                                </div>
                            )
                        })
                    }

                </div>
                <div className="show-item1">
                    <button className="btn1-div" onClick={removeAll}><span>CHECK LIST</span></button>
                </div>
            </div>
        </div>





    )
}

export default Todo
