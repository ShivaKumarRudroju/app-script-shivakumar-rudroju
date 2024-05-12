import "./index.css";

const Filtersection = () => {
  return (
    <>
      <ul className="filter-section">
        <li>
          <h2>3425 ITEMS</h2>
        </li>
        <li>
          <select className="select">
            <option>Show Filter</option>
            <option>Hide Filter</option>
          </select>
        </li>
        <li>
          <select className="select">
            <option>RECOMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </li>
      </ul>
    </>
  );
};
export default Filtersection;
