import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, deleteItem}) {

  const renderEachItem = items.map((item) => <ListingCard deleteItem = {deleteItem} key = {item.id} item = {item}/> )


  return (
    <main>
      <ul className="cards">
        {renderEachItem}
      </ul>
    </main>
  );
}

export default ListingsContainer;
