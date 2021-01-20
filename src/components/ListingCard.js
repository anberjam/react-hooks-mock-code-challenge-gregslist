import React, {useState} from "react";

function ListingCard({item, deleteItem}) {
  const [likeState, setLikeState] = useState(false)

  function handleLikeClick () {
    setLikeState(!likeState)
  }

  function handleDeleteClick (event) {
    event.preventDefault()

    fetch(`http://localhost:6001/listings/${item.id}`, {method: "DELETE"})
    deleteItem(item)
    }
  

  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {likeState ? (
          <button className="emoji-button favorite active" onClick = {handleLikeClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick = {handleLikeClick}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick = {handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
