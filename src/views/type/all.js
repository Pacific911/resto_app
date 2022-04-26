import React, { useEffect } from 'react';
// import { RiEditBoxFill } from 'react-icons/ri';
// import { AiFillDelete } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import '../../assets/styles/viewFoodType.css';
import Viewing from '../../components/viewing';

function all() {
  const food = [];
  // let data;
  const data = JSON.parse(localStorage.getItem('food'));
  const t = Object.entries(data).map(e => e[1]);
  useEffect(() => {
    console.log(data);
  }, []);
  food.push(data);
  console.log(t);
  console.log(food);
  return (
    <div>
      <Sidebar />
      <div className="food-type-list">
        <h1>All Registered Food-types</h1>
        <div className="table">
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
        </div>
      </div>
    </div>
  );
}
export default all;
