import SingleItem from "./SingleItem"

const Items = ({items, removeItem}) => {
  return (
    <ul>
    {items.map((item) => 
       <SingleItem key={item.id} 
       name={item.name} 
       completed={item.completed}
       removeItem={() => removeItem(item.id)} 
       />
        )}
    </ul>
  )
}

export default Items