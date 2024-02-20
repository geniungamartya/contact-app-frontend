import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';

function ContactItem({ imageUrl, name, tag,  id, onDelete }) {
  return (
    <div className="p-4 flex items-center justify-between border border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center">
        <ContactItemImage imageUrl={imageUrl} />
        <ContactItemBody name={name} tag={tag} />
      </div>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default ContactItem;
