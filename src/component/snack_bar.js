import React from 'react';

const Snackbar = ({ message }) => {
  return (
    <div class='absolute bottom-20 left-1/2 bg-#333 text-white px-10 py-2O rounded-md shadow-black shadow-md z-50 '>
      <p>{message}</p>
    </div>
  );
};

export default Snackbar;

