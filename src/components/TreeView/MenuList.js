import MenuItem from "./MenuItem"

export default function MenuList({ list = [] }) {
  // console.log(list);
  return (
    <ul className="menu-list">
      {
        list && list.length ? 
        list.map((listItem, index) => (
          <MenuItem key={index} item={listItem}/>
        ))
        : null
      }
    </ul>
  )
}
