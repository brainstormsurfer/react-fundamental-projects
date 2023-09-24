import SingleItem from "./SingleItem"

const Items = ({items, removeItem, save}) => {
  return (
    <div className="items">
    {items.map((item) => 
       <SingleItem key={item.id} 
    //    id={item.id}
    //    name={item.name} 
    //    completed={item.completed}
        save={save}
        item={item}
        removeItem={removeItem} 
       />
        )}
    </div>
  )
}

export default Items