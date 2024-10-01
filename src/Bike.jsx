import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { Provider } from 'react-redux';
import { store } from './store';

export const Bike = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Función para manejar cuando estamos en línea
    const handleOnline = () => {
      console.log('Conexión restablecida');
      setIsOnline(true);
      // Aquí puedes agregar lógica adicional para recargar datos o sincronizar el estado si es necesario, sin recargar la página
    };

    // Función para manejar cuando estamos fuera de línea
    const handleOffline = () => {
      console.log('Se ha perdido la conexión');
      setIsOnline(false);
    };

    // Agregar los eventos de escucha para conexión/desconexión
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Limpiar los eventos cuando el componente se desmonta
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        {isOnline ? (
          <AppRouter />
        ) : (
          <div>
            <h1>Sin conexión. Esperando reconexión...</h1>
          </div>
        )}
      </BrowserRouter>
    </Provider>
  );
};
