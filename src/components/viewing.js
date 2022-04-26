import React from 'react';

function viewing({ food, index }) {
  return food.map((foods) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{foods.foodtypename}</td>
      <td>{foods.foodtypedescription}</td>
    </tr>
  ));
}

export default viewing;
