import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import '../../assets/styles/addFoodType.css';
// import Viewing from '../../components/viewing';

function foodtype() {
  let data = [];
  const localy = JSON.parse(localStorage.getItem('food'));
  if (localy) {
    data = localy;
  }
  const [foodtypename, setFoodtypename] = useState('');
  const [foodtypedescription, setFoodtypedescription] = useState('');
  const handleAddFoodSubmit = async (e) => {
    e.preventDefault();
    const foods = {
      name: foodtypename,
      description: foodtypedescription
    };
    data.push(foods);
    await localStorage.setItem('food', JSON.stringify(data));
    // console.log(data);
    setFoodtypename('');
    setFoodtypedescription('');
  };
  return (
    <div>
      <Sidebar />
      <div className="product-form">
        <h2>Add a new food Type</h2>
        <form onSubmit={handleAddFoodSubmit}>
          <label>Food Type Name</label>
          <br />
          <input type="text" name="FoodtypeName" placeholder="Enter Type Name" onChange={(e) => setFoodtypename(e.target.value)} value={foodtypename} />
          <br />
          <label>Food Type Description</label>
          <br />
          <input type="text" name="FoodtypeDescription" placeholder="Enter the food Description" onChange={(e) => setFoodtypedescription(e.target.value)} value={foodtypedescription} />
          <br />
          <button type="submit" value="Submit">
            Add Food Type
          </button>
        </form>
      </div>
    </div>
  );
}

export default foodtype;
