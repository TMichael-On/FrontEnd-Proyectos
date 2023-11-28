"use client"
import DetallesCliente from '@/components/DetallesCliente'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import { useState } from 'react';

function historiasClinicas() {

  const [mostrarCard1, setMostrarCard1] = useState(true);
  const [mostrarCard2, setMostrarCard2] = useState(false);
  const [mostrarCard3, setMostrarCard3] = useState(false);
  const [mostrarCard4, setMostrarCard4] = useState(false);
  const [mostrarCard5, setMostrarCard5] = useState(false);


  const mostarParte1 = () => {
    setMostrarCard1(!mostrarCard1);
  };
  const mostarParte2 = () => {
    setMostrarCard2(!mostrarCard2);
  };
  const mostarParte3 = () => {
    setMostrarCard3(!mostrarCard3);
  };
  const mostarParte4 = () => {
    setMostrarCard4(!mostrarCard4);
  };
  const mostarParte5 = () => {
    setMostrarCard5(!mostrarCard5);
  };

  return (
    <>
      <ol className="breadcrumb mb-4 mt-4">
        <li className="breadcrumb-item"><Link href="/">Opciones</Link></li>
        <li className="breadcrumb-item active">Historias clinica</li>
      </ol>

      <div className="row mb-2">
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={mostarParte1} checked={mostrarCard1} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Parte 1
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={mostarParte2} />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Parte 2
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={mostarParte3} />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Parte 3
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={mostarParte4} />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Parte 4
            </label>
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={mostarParte5} />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Parte 5
            </label>
          </div>
        </div>
      </div>

      {mostrarCard1 && (
        <>
          <div className="card mb-4">
            <div className="modal-header d-flex justify-content-between">
              <label className="fw-bold">ESTORPIA:</label>
              <div style={{ width: '75px' }}>
                <button type="button" className="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#ModalCita" onClick={() => MostrarDatos(row)}>
                  <i className="fas fa-pen"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm ms-2 btn-eliminar" onClick={() => EliminarCita(row)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="card-body">
              <label htmlFor="Descripción" className="form-label" ></label>
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header text-center">
              <label className="fw-bold">1. ANAMNESIS </label>
            </div>
            <div className="card-body">
              <DetallesCliente />
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-header bg-white text-dark">
              <p className="card-text fw-bold mb-0">MOTIVO DE LA CONSULTA:</p>
              <label className="mb-0"></label>
            </div>
            <div className="card-body">
              <p className="card-text fw-bold mb-0">ENFERMEDAD ACTUAL:</p>
              <label style={{ height: '200px' }}></label>
            </div>
          </div>
        </>
      )}

      {mostrarCard2 && (
        <>
          <div className={`${styles.card} mb-4 `}>
            <div className='col-12 d-flex justify-content-between'>
              <p className="card-text fw-bold mb-0 g-0 mb-2 ">FUNCIONES BIOLOGICAS:</p>
              <div style={{ width: '75px' }}>
                <button type="button" className="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#ModalCita" onClick={() => MostrarDatos(row)}>
                  <i className="fas fa-pen"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm ms-2 btn-eliminar" onClick={() => EliminarCita(row)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="col-12">
              <div className="row g-0">
                <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ marginRight: '10px' }}><b>-APETITO:</b></label>
                <div className="col">
                  <label className="g-0" id="txtnombres2"></label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row g-0">
                <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ marginRight: '10px' }}><b>-DEPOSICIONES:</b></label>
                <div className="col">
                  <label className="g-0" id="txtnombres2"></label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row g-0">
                <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ marginRight: '10px' }}><b>-SED:</b></label>
                <div className="col">
                  <label className="g-0" id="txtnombres2"></label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row g-0">
                <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ marginRight: '10px' }}><b>-ORINA:</b></label>
                <div className="col">
                  <label className="g-0" id="txtnombres2"></label>
                </div>
              </div>
            </div>
            <div className="col-12 mb-2">
              <div className="row g-0">
                <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ marginRight: '10px' }}><b>-SUEÑO:</b></label>
                <div className="col">
                  <label className="g-0" id="txtnombres2"></label>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.card} mb-4 `}>
            <p className="card-text fw-bold mb-0 g-0">ANTECEDENTES</p>
            <div className="col-12 mb-2">
              <div className="row g-0">
                <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ marginRight: '10px' }}><b>PERSONALES:</b></label>
                <div className="col-12" style={{ height: '150px' }}>
                  <label className="g-0" id="txtnombres2"></label>
                </div>
              </div>
            </div>
            <div className="col-12 mb-2">
              <div className="row g-0">
                <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ marginRight: '10px' }}><b>PATOLOGICOS:</b></label>
                <div className="col-12" style={{ height: '80px' }}>
                  <label className="g-0" id="txtnombres2"></label>
                </div>
              </div>
            </div>
            <div className="col-12 mb-2">
              <div className="row g-0">
                <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ marginRight: '10px' }}><b>ALEREGIAS:</b></label>
                <div className="col-12" style={{ height: '80px' }}>
                  <label className="g-0" id="txtnombres2"></label>
                </div>
              </div>
            </div>
            <div className="col-12 mb-2">
              <div className="row g-0">
                <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ marginRight: '10px' }}><b>FAMILIARES:</b></label>
                <div className="col-12" style={{ height: '160px' }}>
                  <label className="g-0" id="txtnombres2"></label>
                </div>
              </div>
            </div>

          </div>
        </>
      )}

      {mostrarCard3 && (
        <>
          <div className="card">
            <div className="card-header text-center d-flex justify-content-between">
              <span>2. EXAMEN CLINICO GENERAL</span>
              <div style={{ width: '75px' }}>
                <button type="button" className="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#ModalCita" onClick={() => MostrarDatos(row)}>
                  <i className="fas fa-pen"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm ms-2 btn-eliminar" onClick={() => EliminarCita(row)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <div className={`${styles.card2} col-12`} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>PESO:</b></label>
                  <div className="col">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
                <div className="row g-0">
                  <div className="col row g-0">
                    <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>TALLA:</b></label>
                    <div className="col-auto">
                      <label className="g-0" id="txtnombres2"></label>
                    </div>
                  </div>
                  <div className="col row g-0">
                    <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>IMC:</b></label>
                    <div className="col">
                      <label className="g-0" id="txtnombres2"></label>
                    </div>
                  </div>
                  <div className="col row g-0">
                    <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>BIOTIPO:</b></label>
                    <div className="col">
                      <label className="g-0" id="txtnombres2"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>PIEL:</b></label>
                  <div className="col">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
                <label className="col-12 g-0" id="txtnombres2"></label>
                <label className="col-12 fw-bold g-0" id="txtnombres2">ANEXOS(CABELLO):</label>
                <label className="col-12 g-0" style={{ height: '60px' }} id="txtnombres2"></label>
                <label className="col-12 fw-bold g-0" id="txtnombres2">ANEXOS(UÑAS):</label>
                <label className="col-12 g-0" style={{ height: '60px' }} id="txtnombres2"></label>
              </div>
              <div className={`${styles.card2} col-12`} >
                <label className="col-12 fw-bold g-0" id="txtnombres2">SIGANOS VITALES:</label>
                <label className="col-12 g-0" id="txtnombres2"></label>
                <div className="row g-0">
                  <div className="col row g-0">
                    <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>-Presión Arterial:</b></label>
                    <div className="col-auto">
                      <label className="g-0" id="txtnombres2"></label>
                    </div>
                  </div>
                  <div className="col row g-0">
                    <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>-Frecuencia Respiratoria:</b></label>
                    <div className="col">
                      <label className="g-0" id="txtnombres2"></label>
                    </div>
                  </div>
                </div>
                <div className="row g-0 mb-2">
                  <div className="col row g-0">
                    <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>-Pulso:</b></label>
                    <div className="col-auto">
                      <label className="g-0" id="txtnombres2"></label>
                    </div>
                  </div>
                  <div className="col row g-0">
                    <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>-Temperatura:</b></label>
                    <div className="col">
                      <label className="g-0" id="txtnombres2"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {mostrarCard4 && (
        <>
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between">
              EXAMEN INTRABUCAL
              <div style={{ width: '75px' }}>
                <button type="button" className="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#ModalCita" onClick={() => MostrarDatos(row)}>
                  <i className="fas fa-pen"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm ms-2 btn-eliminar" onClick={() => EliminarCita(row)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <div className={`${styles.card2} col-12`} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>-TEJIDOS BLANDOS</b></label>
                  <div className="col">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '80px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Labios y Comisura labial:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '80px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Paladar Duro y Blando:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '80px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Carrillos:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Piso de boca:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '80px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Lengua:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '80px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Orofaringe:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '80px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Frenillos:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Saliva:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </>
      )}

      {mostrarCard5 && (
        <>
          <div className="card mb-4">
            <div className="card-header text-center d-flex justify-content-between">
              DIENTES
              <div style={{ width: '75px' }}>
                <button type="button" className="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#ModalCita" onClick={() => MostrarDatos(row)}>
                  <i className="fas fa-pen"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm ms-2 btn-eliminar" onClick={() => EliminarCita(row)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <div className={`${styles.card2} col-12`} >
                <div className="row g-0">
                  <div className="col row g-0">
                    <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Numero:</b></label>
                    <div className="col-auto">
                      <label className="g-0" id="txtnombres2"></label>
                    </div>
                  </div>
                  <div className="col row g-0">
                    <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Color:</b></label>
                    <div className="col">
                      <label className="g-0" id="txtnombres2"></label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Forma:</b></label>
                  <div className="col">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '60px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Tamaño:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '60px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Diastemas:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '80px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Zonas edentulas y reborde alveolar:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '80px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Posición anormal dentaria:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} style={{ height: '80px' }} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Facetas de desgaste:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Línea media:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>
              <div className={`${styles.card2} col-12`} >
                <div className="row g-0">
                  <label htmlFor="txtnombres1" className="col-12 font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Otros:</b></label>
                  <div className="col-12">
                    <label className="g-0" id="txtnombres2"></label>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </>
      )}

    </>
  )
}

export default historiasClinicas