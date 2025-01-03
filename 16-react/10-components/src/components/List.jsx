function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.map((item) => {
        return (
          <li key={item.id} className="list-group-item">
            {item.purchased ? "✅" : "❌"} {item.name}
          </li>
        );
      })}
    </ul>
  );
}

export default List;