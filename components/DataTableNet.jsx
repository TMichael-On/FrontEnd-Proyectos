"use client"

// MyDataTable.js

import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';

const DataTableNet = () => {
  console.log("DataTableNet")
  const tableRef = useRef(null);

  useEffect(() => {
    // Inicializar DataTable en el componente
    const dataTable = $(tableRef.current).DataTable({
      ajax: {
        url: 'data/array.txt',
        dataSrc: 'data', // Indica que los datos se encuentran en el nivel superior del objeto JSON
      },
      columns: [
        { data: 'name' }, // Reemplaza 'name' con el nombre de la propiedad en tu JSON
        { data: 'age' },  // Reemplaza 'age' con el nombre de la propiedad en tu JSON
        { data: 'city' }, // Reemplaza 'city' con el nombre de la propiedad en tu JSON
      ],
    });

    // Importante: destruir la instancia de DataTable al desmontar el componente
    return () => {
      dataTable.destroy();
    };
  }, []); // Se ejecutará solo una vez al montar el componente

  return (
    <table ref={tableRef}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {/* No necesitas agregar filas aquí, DataTables lo manejará automáticamente */}
      </tbody>
    </table>
  );
};

export default DataTableNet;
