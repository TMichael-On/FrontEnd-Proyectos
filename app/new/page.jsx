"use client"
import ModalOdontograma from '@/components/ModalOdontograma'
import MyComponent from '@/components/MyComponent';
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';



function page() {
    // "DNI": "76905898",
    // "NUMERO": 1,
    // "COLOR": "Prueba",
    // "FORMA": "Prueba",
    // "TAMANO": "Prueba",
    // "DIASTEMA": "Prueba",
    // "EDENTULA": "Prueba",
    // "POSANORMAL": "Prueba",
    // "FACDESGASTE": "Prueba",
    // "LINMEDIA": "Prueba",
    // "OTROS": "Prueba"

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


    const openModal = () => {
        document.getElementById("IDOdontograma").value = 0
        document.getElementById("Tratamiento").value = 0
        document.getElementById("dntCara").value = 0
        document.getElementById("mensajeError").style.display = "none";
    };

    return (
        <>
            <ol className="breadcrumb mb-4 mt-4">
                <li className="breadcrumb-item"><Link href="/new">Opciones</Link></li>
                <li className="breadcrumb-item active">New</li>
            </ol>
            {/* Modal */}
            <div id="ModalDiente" className="modal"  aria-labelledby="exampleModalLabel" data-bs-backdrop="static">
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
            {/* -- MODAL ANTECEDENTE */}
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


        </>
    )
}

export default page