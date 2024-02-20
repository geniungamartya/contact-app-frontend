import React from 'react';

function ContactItemBody({ name, tag }) {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">@{tag}</p>
    </div>
  );
}

export default ContactItemBody;
