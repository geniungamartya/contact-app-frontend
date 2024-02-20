import React from 'react';
 
function DeleteButton({ id, onDelete }) {
  return <button className="p-4 btn btn-error" onClick={() => onDelete(id)}>X</button>
}
 
export default DeleteButton;
