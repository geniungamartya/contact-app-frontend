import React from 'react';

function ContactItemImage({ imageUrl }) {
  return (
    <div className="p-4">
      <img src={imageUrl} alt="contact avatar" className="rounded-full h-16 w-16" />
    </div>
  );
}

export default ContactItemImage;
