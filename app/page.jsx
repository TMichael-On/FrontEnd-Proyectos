"use client"
import React, { useState } from "react";
import Link from "next/link"
import MyDataTable from "@/components/MyDataTable"
import ModalE from "@/components/ModalE"

export default function Cita() {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    document.getElementById("IDHistoria").value = "";
    document.getElementById("IDMedico").value = "";

    setModalVisible(true);
    console.log("click")
  };


  return (
    <>
      <ol className="breadcrumb mb-4 mt-4">
        <li className="breadcrumb-item"><Link href="/">Opciones</Link></li>
        <li className="breadcrumb-item active">Citas</li>
      </ol>
      <div className="card">
        <div className="card-header">
          <i className="fas fa-users me-1"></i> Citas
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#FormModal" onClick={openModal}>Crear Nuevo</button>
            </div>
          </div>
          <hr />
          <MyDataTable />
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="FormModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="exampleModalLabel">Marca</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input id="txtid" type="hidden" value="0" />
              <div className="row g-1">
                <div className="col-sm-6">
                  <label htmlFor="IDHistoria" className="form-label">Paciente</label>
                  <select id="IDHistoria" className="form-select">
                  <option value="" disabled={true}>Seleccionar una opción</option>
                    <option value="1">Paciente 1</option>
                    <option value="2">Paciente 2</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="IDMedico" className="form-label">Medico</label>
                  <select id="IDMedico" className="form-select">
                    <option value="" disabled={true}>Seleccionar una opción</option>
                    <option value="1">Medico 1</option>
                    <option value="2">Medico 2</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="citMotivo" className="form-label">Motivo</label>
                  <input type="text" className="form-control" id="citMotivo" autoComplete="off" />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="citFecha" className="form-label">Fecha</label>
                  <input type="text" className="form-control" id="citFecha" autoComplete="off" />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="citHora" className="form-label">Hora</label>
                  <input type="text" className="form-control" id="citHora" autoComplete="off" />
                </div>
                <div className="col-sm-6" >
                  <label htmlFor="citEstado" className="form-label">Estado</label>
                  <select id="citEstado" className="form-select" disabled={true}>
                    <option value="1">Activo</option>
                    <option value="2">Cancelado</option>
                    <option value="3">Finalizado</option>
                  </select>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <div id="mensajeError" className="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" >Guardar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
