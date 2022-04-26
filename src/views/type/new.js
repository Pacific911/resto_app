import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import '../../assets/styles/addFoodType.css';
// import Viewing from '../../components/viewing';

function foodtype() {
  const [food, setFood] = useState([]);

  const [foodtypename, setFoodtypename] = useState('');
  const [foodtypedescription, setFoodtypedescription] = useState('');
  useEffect(() => {
    const foods = JSON.parse(localStorage.getItem('food'));
    if (foods) {
      setFood(foods);
    }
  }, []);
  const handleAddFoodSubmit = (e) => {
    e.preventDefault();
    const foods = {
      name: foodtypename,
      description: foodtypedescription
    };
    // const new = [...food];
    setFood([...food, foods]);
    console.log(food);
    localStorage.setItem('food', JSON.stringify(food));
    setFoodtypename('');
    setFoodtypedescription('');
  };
  // useEffect(() => {
  // }, [food]);
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
      {/* <div className="table">
        {food.length > 0
          && (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Food-type Name</th>
                    <th>Food-type Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <Viewing food={food} />
                </tbody>
              </table>
            </div>
          )}
        {food.length < 1 && <div>No food are added yet</div>}
      </div> */}
    </div>
  );
}

export default foodtype;
