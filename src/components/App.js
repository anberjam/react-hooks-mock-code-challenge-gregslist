import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(itemsArray => setItems(itemsArray))
  }, [])

  function deleteItem (itemToDelete) {
    const updatedItems = items.filter((item) => item.id !== itemToDelete.id)
    setItems(updatedItems)
  }

  const itemsToDisplay = items.filter((item) => item.description.toLowerCase().includes(searchTerm.toLowerCase()))



  return (
    <div className="app">
      <Header searchTerm = {searchTerm} setSearchTerm = {setSearchTerm}/>
      <ListingsContainer items = {itemsToDisplay} deleteItem = {deleteItem}/>
    </div>
  );
}

export default App;
