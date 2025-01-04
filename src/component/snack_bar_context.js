
import React, { createContext, useState, useContext } from 'react';
import Snackbar from './snack_bar';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const showSnackbar = (msg) => {
    setMessage(msg);
    setOpen(true);
    setTimeout(() => setOpen(false), 3000); // Fermer après 3 secondes
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {open && <Snackbar message={message} />}
    </SnackbarContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useSnackbar = () => useContext(SnackbarContext);
