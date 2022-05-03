import React, { useState } from 'react';
// import Sidebar from './components/Sidebar/Sidebar';

function editproduct({ match }) {
  const foodName = match.params.name;
  // const id = foodtype.i;

  const [foodtypename, setFoodtypename] = useState();
  const [foodtypedescription, setFoodtypedescription] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  let data = [];
  const local = JSON.parse(localStorage.getItem('food'));
  if (local) {
    data = local;
  }
  const Item = () => {
    const fd = data.filter((f) => f.name !== foodName);
    localStorage.setItem('food', JSON.stringify(fd));
  };
  console.log(Item);
  return (
    <div>
      {/* <Sidebar /> */}
      <div className="product-form">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <label>Food Type Name</label>
          <br />
          <input type="text" name="FoodtypeName" value={foodtypename} onChange={(e) => setFoodtypename(e.target.value)} required />
          <br />
          <label>Food Type Description</label>
          <br />
          <input type="text" name="FoodtypeDescription" value={foodtypedescription} onChange={(e) => setFoodtypedescription(e.target.value)} required />
          <br />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default editproduct;
