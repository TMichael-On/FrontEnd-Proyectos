"use client"
import Citas_Peticiones from "@/peticiones/cita.peticiones";
import { useRef } from 'react';

function ComponenteCita() {
    const IDHistoriaRef = useRef(null);
    const IDMedicoRef = useRef(null);
    const citFechaRef = useRef(null);
    const citHoraRef = useRef(null);
    const citMotivoRef = useRef(null);
    const citEstadoRef = useRef(null);

    const dataAdd = null
    const Guardar = async () => {
        const citasObj = new Citas_Peticiones();

        const data = {
            IDHistoria: parseInt(IDHistoriaRef.current.value),
            IDMedico: parseInt(IDMedicoRef.current.value),
            citFecha: citFechaRef.current.value,
            citHora: citHoraRef.current.value,
            citMotivo: citMotivoRef.current.value,
            citEstado: parseInt(citEstadoRef.current.value),
        };
        debugger;

        console.log("guardar");
        try {
            const result = await citasObj.fetchResultCrear(data);
            const affectedRows = result.result.affectedRows;
            const message = result.result.message;

            if (affectedRows == 1) {
                const nuevaFila = {
                    IDHistoria: 1,
                    IDMedico: 1,
                    citFecha: "2023-11-22",
                    citHora: "23:54:00",
                    citMotivo: "motivo",
                    citEstado: "1",
                };
                dataAdd = nuevaFila
                document.getElementById("FormModal").classList.remove("show");
                document.getElementById("FormModal").style.display = "none";
                document.body.classList.remove("modal-open");
                const modalBackdrop = document.querySelector(".modal-backdrop");
                if (modalBackdrop) {
                    modalBackdrop.parentNode.removeChild(modalBackdrop);
                }
            } else {
                document.getElementById("mensajeError").innerText = message;
                document.getElementById("mensajeError").style.display = "block";
            }

        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    };
    return (
        <>
            <div className="modal fade" id="FormModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title" id="exampleModalLabel">Citas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input id="txtid" type="hidden" value="0" />
                            <div className="row g-1">
                                <div className="col-sm-6">
                                    <label htmlFor="IDHistoria" className="form-label">Paciente</label>
                                    <select id="IDHistoria" className="form-select" ref={IDHistoriaRef}>
                                        <option value="0" disabled={true}>Seleccionar una opción</option>
                                        <option value="1">Paciente 1</option>
                                        <option value="2">Paciente 2</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="IDMedico" className="form-label">Medico</label>
                                    <select id="IDMedico" className="form-select" ref={IDMedicoRef}>
                                        <option value="0" disabled={true}>Seleccionar una opción</option>
                                        <option value="1">Medico 1</option>
                                        <option value="2">Medico 2</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="citFecha" className="form-label">Fecha</label>
                                    <input id="citFecha" type="text" className="form-control" autoComplete="off" ref={citFechaRef} />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="citHora" className="form-label">Hora</label>
                                    <input id="citHora" type="text" className="form-control" autoComplete="off" ref={citHoraRef} />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="citMotivo" className="form-label">Motivo</label>
                                    <input id="citMotivo" type="text" className="form-control" autoComplete="off" ref={citMotivoRef} />
                                </div>
                                <div className="col-sm-6" >
                                    <label htmlFor="citEstado" className="form-label">Estado</label>
                                    <select id="citEstado" className="form-select" ref={citEstadoRef} disabled={true}>
                                        <option value="1">Activo</option>
                                        <option value="2">Cancelado</option>
                                        <option value="3">Finalizado</option>
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
        </>
    )
}

export default ComponenteCita