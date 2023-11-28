"use client"
import DetallesCliente from '@/components/DetallesCliente'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import { useState, useRef, useEffect } from 'react';

function historiasClinicas() {

  const [mostrarCard1, setMostrarCard1] = useState(true);
  const [mostrarCard2, setMostrarCard2] = useState(false);
  const [mostrarCard3, setMostrarCard3] = useState(false);
  const [mostrarCard4, setMostrarCard4] = useState(false);
  const [mostrarCard5, setMostrarCard5] = useState(false);

  const IDCitaRef = useRef(null);
  const DNIRef = useRef(null);
  const NUMERORef = useRef(null);
  const COLORRef = useRef(null);
  const FORMARef = useRef(null);
  const TAMANORef = useRef(null);
  const DIASTEMARef = useRef(null);
  const EDENTULARef = useRef(null);
  const POSANORMALRef = useRef(null);
  const FACDESGASTERef = useRef(null);
  const LINMEDIARef = useRef(null);
  const OTROSRef = useRef(null);

  // const IDCitaRef = useRef(null);
  // const  DNIRef= useRef(null);
  const  personalRef= useRef(null);
  const  patologicoRef= useRef(null);
  const  alergiaRef= useRef(null);
  const  familiarRef= useRef(null);

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
  const Diente = ()=> {
    // document.getElementById("IDOdontograma").value = 0
    // document.getElementById("Tratamiento").value = 0
    // document.getElementById("dntCara").value = 0
    document.getElementById("mensajeError").style.display = "none";
  };
  const Antecedente = ()=> {
    // document.getElementById("IDOdontograma").value = 0
    // document.getElementById("Tratamiento").value = 0
    // document.getElementById("dntCara").value = 0
    document.getElementById("mensajeError").style.display = "none";
  };
  return (
    <>
      <ol className="breadcrumb mb-4 mt-4">
        <li className="breadcrumb-item"><Link href="/">Opciones</Link></li>
        <li className="breadcrumb-item active">Historias clinica</li>
      </ol>

      <div className="col-12 mb-4">
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#ModalDiente" onClick={()=>Diente()} >Registrar diente</button>
      </div>
      <div className="col-12 mb-4">
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#ModalAntecedente" onClick={()=>Antecedente()} >Registrar antecedentes</button>
      </div>

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

      <div id="ModalDiente" className="modal" aria-labelledby="exampleModalLabel" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="exampleModalLabel">Dientes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input id="IDCita" type="show" ref={IDCitaRef} />
              <div className="row g-1">
                <div className="col-sm-12">
                  <label htmlFor="DNI" className="form-label">Paciente</label>
                  <select id="DNI" className="form-select" ref={DNIRef}>
                    <option value="0" disabled={true}>Seleccionar una opción</option>
                    <option value="1">Paciente 1</option>
                    <option value="2">Paciente 2</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="NUMERO" className="form-label">Numero</label>
                  <input id="NUMERO" type="text" className="form-control" autoComplete="off" ref={NUMERORef} />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="COLOR" className="form-label">Color</label>
                  <input id="COLOR" type="text" className="form-control" autoComplete="off" ref={COLORRef} />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="FORMA" className="form-label">Forma</label>
                  <input id="FORMA" type="text" className="form-control" autoComplete="off" ref={FORMARef} />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="TAMANO" className="form-label">Tamaño</label>
                  <input id="TAMANO" type="text" className="form-control" autoComplete="off" ref={TAMANORef} />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="DIASTEMA" className="form-label">Diastemas</label>
                  <input id="DIASTEMA" type="text" className="form-control" autoComplete="off" ref={DIASTEMARef} />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="EDENTULA" className="form-label">Zonas adentulas y revolve alveolar</label>
                  <input id="EDENTULA" type="text" className="form-control" autoComplete="off" ref={EDENTULARef} />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="POSANORMA" className="form-label">Posición anormal dentaria</label>
                  <input id="POSANORMA" type="text" className="form-control" autoComplete="off" ref={POSANORMALRef} />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="FACDESGASTE" className="form-label">Facetas de desgaste</label>
                  <input id="FACDESGASTE" type="text" className="form-control" autoComplete="off" ref={FACDESGASTERef} />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="LINMEDIA" className="form-label">Línea media</label>
                  <input id="LINMEDIA" type="text" className="form-control" autoComplete="off" ref={LINMEDIARef} />
                </div>
                <div className="col-sm-12">
                  <label htmlFor="OTROS" className="form-label">Otros</label>
                  <input id="OTROS" type="text" className="form-control" autoComplete="off" ref={OTROSRef} />
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
      <div id="ModalAntecedente" className="modal"  aria-labelledby="exampleModalLabel" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title" id="exampleModalLabel">Antecedentes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input id="IDCita" type="show" ref={IDCitaRef} />
                            <div className="row g-1">
                                <div className="col-sm-12">
                                    <label htmlFor="DNI" className="form-label">Paciente</label>
                                    <select id="DNI" className="form-select" ref={DNIRef}>
                                        <option value="0" disabled={true}>Seleccionar una opción</option>
                                        <option value="1">Paciente 1</option>
                                        <option value="2">Paciente 2</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="personal" className="form-label">Personal</label>
                                    <input id="personal" type="text" className="form-control" autoComplete="off" ref={personalRef} />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="patologico" className="form-label">Patologico</label>
                                    <input id="patologico" type="text" className="form-control" autoComplete="off" ref={patologicoRef} />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="alergia" className="form-label">Alergia</label>
                                    <input id="alergia" type="text" className="form-control" autoComplete="off" ref={alergiaRef} />
                                </div>
                                <div className="col-sm-12">
                                    <label htmlFor="familiar" className="form-label">Familiar</label>
                                    <input id="familiar" type="text" className="form-control" autoComplete="off" ref={familiarRef} />
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