import PropTypes from "prop-types";
function List({ category = "Category", items = [] }) {
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
  //fruits.sort((a, b) => b.calories - a.calories); // descending
  //fruits.sort((a, b) => a.calories - b.calories); // ascending

  //   const lowCalFruits = fruits.filter((fruits) => fruits.calories <= 150);
  //   const hightCalFruits = fruits.filter((fruits) => fruits.calories >= 150);
  // const category = props.category;
  // const itemList = props.items;

  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

// List.defaultProps = {
//   category: "Category",
//   item: [],
// };
export default List;
