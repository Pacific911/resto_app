import React from 'react';
import { Icon } from 'react-icons-kit';
import { edit } from 'react-icons-kit/feather/edit';
import { trash } from 'react-icons-kit/feather/trash';
import { Link } from 'react-router-dom';

function viewing({ food }) {
  const style = { color: 'orange', fontSize: '25px' };
  const removeItem = (fname) => {
    const fd = food.filter((f) => f.name !== fname);
    localStorage.setItem('food', JSON.stringify(fd));
  };
  return food.map((foods, i) => (
    <tr key={i}>
      <td>{i}</td>
      <td>{foods.name}</td>
      <td>{foods.description}</td>
      <td>
        <Link to={`/edit-product/${foods.name}`}>
          <Icon icon={edit} style={style} />
        </Link>
      </td>
      <td>
        <Link to="/type/all">
          <Icon icon={trash} onClick={() => removeItem(foods.name)} style={style} />
        </Link>
      </td>
      {/* <td className="delete-btn">
        <Icon icon={trash} onClick={() => removeItem(foods.name)} />
      </td> */}
    </tr>
  ));
}

export default viewing;
