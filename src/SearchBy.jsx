const items = [1, 2, 3]

function SearchBy(props) {
  const listItems = items.map((item) => <li key={item.toString()}>{item}</li>)
  const style = {
    top: props.top,
  }
  console.log(props)

  return (
    <div style={style} className="filter__modal">
      <ul>{listItems}</ul>
    </div>
  )
}

export default SearchBy
