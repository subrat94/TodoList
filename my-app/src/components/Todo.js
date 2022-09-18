import React, { useEffect, useState } from "react";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  const addItems = () => {
    if (!inputData) {
      alert("add something")

    } else {
      const allInputdata={id: new Date().toString(),name:inputData}  //we create this for uniqe id
      setItem([...item,allInputdata]); // use array and spred (...) for multiple input
      setInputData(""); //two way binding after clicking on plus to clear the input
    }
  };
  //for delete item
  const deletItem=(index)=>{
   
    const updateItems=item.filter((elem)=>{
      return  index!==elem.id

    })
    setItem(updateItems)

  }
  //delet all items
  const deletAll=()=>{
    setItem([])
  }

  //add to local storage
  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(item))
  },[item])
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src="https://th.bing.com/th/id/R.f005a91de46df0bdf1da26cb86502a95?rik=h8y%2fPoIn%2bgvC2A&riu=http%3a%2f%2fanimated-gifs.org%2fwp-content%2fuploads%2f2012%2f02%2fhelicopter-004.gif&ehk=HXCWz8qttYK0Qm7pq6YpLrl6Q4NrTjWANuA%2bC%2bUZrtc%3d&risl=&pid=ImgRaw&r=0"
              alt="file image"
            />
            <figcaption>add your list</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="add items..."
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            ></input>
            
            <i
              className="fa fa-plus add-btn"
              title="add item"
              onClick={addItems}
            ></i>
          </div>
          <div className="showItems">
            {item.map((elem)=>{
                return(
                    <div className="eachItem" key={elem.id}>
              <h3>{elem.name}</h3>
              <i className="far fa-trash-alt add-btn" title="Delet items" onClick={()=>deletItem(elem.id)}></i>
            </div>

                )
            })}
            
          </div>
          {/* delete botto */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={deletAll}>
              <span>check list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
