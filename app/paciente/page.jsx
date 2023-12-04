"use client"
import Link from "next/link"
import { useState, useRef, useEffect } from 'react';
import Paciente_Peticiones from "@/peticiones/paciente.peticiones";
import TablePaciente from "@/components/TablePaciente";

const pacienteobj = new Paciente_Peticiones()

function Paciente() {

    const [loading, setLoading] = useState(true);
    const [dataPaciente, setDataPaciente] = useState({
        IDPaciente: 0, pacNombre: '', pacApellido: '',
        pacDNI: '', pacSexo: '', pacReligion: '',
        pacRaza: '', pacEdad: '', pacLugar: '',
        pacResidencia: '', pacGradoI: '', pacOcupacion: '',
        pacEstadoC: '', pacCorreo: '', pacTelef: '',
        pacEstado: '1',
    });

    var Paciente = {
        IDPaciente: 0, pacNombre: '', pacApellido: '',
        pacDNI: '', pacSexo: '', pacReligion: '',
        pacRaza: '', pacEdad: '', pacLugar: '',
        pacResidencia: '', pacGradoI: '', pacOcupacion: '',
        pacEstadoC: '', pacCorreo: '', pacTelef: '',
        pacEstado: '1',
    };

    const openModal = () => {
        document.getElementById("mensajeError").style.display = "none";
    };

    return (
        <>
            <ol className="breadcrumb mb-4 mt-4">
                <li className="breadcrumb-item"><Link href="/">Opciones</Link></li>
                <li className="breadcrumb-item active">Paciente</li>
            </ol>
            {/* Modal */}
            <div id="ModalPaciente2" className="modal" aria-labelledby="exampleModalLabel" data-bs-backdrop="static">
                <div className="modal-dialog modal-lg ">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title" id="exampleModalLabel">pacas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input id="IDPaciente" type="hidden" />
                            <div className="row g-1">
                                <div className="col-sm-4">
                                    <label htmlFor="pacNombre" className="form-label">Nombre</label>
                                    <input id="pacNombre" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacApellidos" className="form-label">Apellidos</label>
                                    <input id="pacApellidos" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacDNI" className="form-label">DNI</label>
                                    <input id="pacDNI" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacSexo" className="form-label">Sexo</label>
                                    <input id="pacSexo" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacReligion" className="form-label">Religión</label>
                                    <input id="pacReligion" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacRaza" className="form-label">Raza</label>
                                    <input id="pacRaza" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacFechaNacimiento" className="form-label">Fecha de nacimiento</label>
                                    <input id="pacFechaNacimiento" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacEdad" className="form-label">Edad</label>
                                    <input id="pacEdad" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacLugar" className="form-label">Lugar</label>
                                    <input id="pacLugar" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacResidencia" className="form-label">Residencia</label>
                                    <input id="pacResidencia" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacGradoInstruccion" className="form-label">Grado de instrucción</label>
                                    <input id="pacGradoInstruccion" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacOcupacion" className="form-label">Ocupación</label>
                                    <input id="pacOcupacion" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacEstadoCivil" className="form-label">Estado civil</label>
                                    <input id="pacEstadoCivil" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacCorreo" className="form-label">Correo</label>
                                    <input id="pacCorreo" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="pacTelefono" className="form-label">Teléfono</label>
                                    <input id="pacTelefono" type="text" className="form-control" autoComplete="off" />
                                </div>
                                <div className="col-sm-4 offset-sm-4" >
                                    <label htmlFor="detEstado" className="form-label">Estado</label>
                                    <select id="detEstado" className="form-select">
                                        <option value="0" disabled={true}>Seleccionar una opción</option>
                                        <option value="1">Activo</option>
                                        <option value="2">Inactivo</option>
                                    </select>
                                </div>
                                <div className="col-sm-12" >
                                    <label htmlFor="Ectoscopia" className="form-label">Ectoscopia</label>
                                    <textarea id="Ectoscopia" className="form-control"></textarea>
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
            {/* Tabla */}
            <div className="card">
                <div className="card-header">
                    <i className="fas fa-users me-1"></i> Paciente
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#ModalPaciente2" onClick={openModal} >Crear Nuevo</button>
                        </div>
                    </div>
                    <hr />
                    <TablePaciente data={dataPaciente} setData={setDataPaciente} loading={loading} setLoading={setLoading} />
                </div>
            </div>
        </>
    )
}

export default Paciente