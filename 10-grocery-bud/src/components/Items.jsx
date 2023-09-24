import SingleItem from "./SingleItem"

const Items = ({items, removeItem, editItem}) => {
  return (
    <div className="items">
    {items.map((item) => 
       <SingleItem key={item.id} 
        editItem={editItem}
        item={item}
        removeItem={removeItem} 
       />
        )}
    </div>
  )
}

export default Items