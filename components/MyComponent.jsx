"use client"
import { useState } from 'react';

function MyComponent(){
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://desplieguebackend-production.up.railway.app/citas/listCita');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Obtener datos</button>

      {data && (
        <div>
          <h2>Datos de la API:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
