
"use client"
import React from 'react';
import Odonto from '@/components/odonto'
import styles from './page.module.css'
import "@/app/globals.css"
import Link from 'next/link';
import DetallesCliente from '@/components/DetallesCliente';
import ModalOdontograma from '@/components/ModalOdontograma';

export default function odontrograma() {
  const openModal = () => {
    document.getElementById("IDOdontograma").value = 0
    document.getElementById("Tratamiento").value = 0
    document.getElementById("dntCara").value = 0
    document.getElementById("mensajeError").style.display = "none";
  };

  const columns = React.useMemo(
    () =>
      Array.from({ length: 16 }, (_, index) => ({
        header: "", // index < 4 || index >= 14 ? '' : `Columna ${index + 1}`
        accessorKey: `col${index + 1}`,
        footer: "", //index < 2 || index >= 12 ? '' : `Total ${index + 1}`
      })),
    []
  );

  const data = React.useMemo(
    () =>
      Array.from({ length: 10 }, (_, rowIndex) => {
        const rowData = {};
        columns.forEach((column, columnIndex) => {
          rowData[column.accessorKey] = ""; //`Dato ${rowIndex + 1}-${columnIndex + 1}`
        });
        return rowData;
      }),
    [columns]
  );
  return (
    <>
      <ol className="breadcrumb mb-4 mt-4">
        <li className="breadcrumb-item"><Link href="/">Opciones</Link></li>
        <li className="breadcrumb-item active">Odontograma</li>
      </ol>
      <ModalOdontograma />
      <div className="card">
        <div className="card-header">
          <i className="fas fa-users me-1"></i> Odontograma
        </div>
        <div className="card-body" style={{ maxWidth: '100%' }}>
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-success" >Seleccionar paciente</button>
            </div>
          </div>
          <hr />
          <DetallesCliente />
          <hr />          
          <div className='table-responsive'>
            <Odonto columns={columns} data={data} styles={styles} />
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalOdontograma" onClick={openModal}>Añadir Tratamiento</button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  )
}
