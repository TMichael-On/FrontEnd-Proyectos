
"use client"
import React from 'react';
import Odonto from '@/components/odonto'
import styles from './page.module.css'
import "@/app/globals.css"
import Link from 'next/link';
import DetallesCliente from '@/components/DetallesCliente';
import { useState, useRef, useEffect } from 'react';
import TableDetOdonto from '@/components/TableDetOdonto';

export default function odontrograma() {

  const [dataDet, setDataDet] = useState([]);
  const [loadingDet, setLoadingDet] = useState(true);

  const IDOdontogramaRef = useRef(null);
  const PiezaDentalRef = useRef(null);
  const TratamientoRef = useRef(null);
  const dntCaraRef = useRef(null);

  function generateOptions(start, end) {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  }

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
      {/* Modal odontrograma */}
      <div id="ModalOdontograma" className="modal" aria-labelledby="exampleModalLabel" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="exampleModalLabel">Citas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input id="IDOdontograma" type="show" ref={IDOdontogramaRef} />
              <div className="row g-1">
                <div className="col-sm-12">
                  <label htmlFor="PiezaDental" className="form-label">Pieza dental:</label>
                  <select id="PiezaDental" className="form-select" ref={PiezaDentalRef}>
                    <option value="0" disabled={true}>Seleccionar una opción</option>
                    {generateOptions(11, 18)}
                    {generateOptions(21, 28)}
                    {generateOptions(31, 38)}
                    {generateOptions(41, 48)}
                    {generateOptions(51, 54)}
                    {generateOptions(61, 64)}
                    {generateOptions(71, 74)}
                    {generateOptions(81, 84)}
                  </select>
                </div>
                <div className="col-sm-12">
                  <label htmlFor="Tratamiento" className="form-label">Tratamiento</label>
                  <select id="Tratamiento" className="form-select" ref={TratamientoRef}>
                    <option value="0" disabled={true}>Seleccionar una opción</option>
                    <option value="2">Curación</option>
                    <option value="2">Limpieza</option>
                    <option value="2">Extracción</option>
                    <option value="1">Endodoncia</option>
                  </select>
                </div>
                <div className="col-sm-12" >
                  <label htmlFor="dntCara" className="form-label">Cara</label>
                  <select id="dntCara" className="form-select" ref={dntCaraRef}>
                    <option value="0" disabled={true}>Seleccionar una opción</option>
                    <option value="1">Vesticular</option>
                    <option value="2">Lingual</option>
                    <option value="3">Palatino</option>
                    <option value="3">Mesial</option>
                    <option value="3">Distal</option>
                    <option value="3">Oclusal</option>
                  </select>
                </div>
              </div>
              <div className="col-12 mt-2" >{/* style={{display:'none'}} */}
                <div id="mensajeError" className="alert alert-danger" role="alert">
                  A simple danger alert—check it out!
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" onClick={() => Guardar()} >Guardar</button>
            </div>
          </div>
        </div>
      </div>
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
          <TableDetOdonto dataDet={dataDet} setDataDet={setDataDet} loadingDet={loadingDet} setLoadingDet={setLoadingDet} />
        </div>
      </div>
    </>
  )
}
