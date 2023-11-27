import React, { useState, useEffect } from 'react';
import Biologica_Peticiones from '@/peticiones/biologica.peticiones';
import Swal from 'sweetalert2';
const biologicaObj = new Biologica_Peticiones();

function MyComponent() {
  const [data, setData] = useState(null);
  // const citasObj  = new Citas();

  const fetchData = async () => {
    console.log("fetchData");
    try {
      const result = await biologicaObj.fetchResultCrear();
      setData(result);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };
  const swaps = () => {
    Swal.fire({
      title: '¡Alerta!',
      text: '¿Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Llama a tu función después de hacer clic en "Aceptar"
        console.log('La función se ejecutó después de hacer clic en Aceptar');
      }
    });
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);

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
}

export default MyComponent;