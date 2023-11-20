"use client"

function ModalE() {
    return (
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
                                <label htmlFor="txtdescripcion" className="form-label">Descripcion</label>
                                <input className="form-control" id="txtdescripcion" autoComplete="off"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="cboactivo" className="form-label">Activo</label>
                                <select id="cboactivo" className="form-select">
                                    <option value="1">Si</option>
                                    <option value="0">No</option>
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
  )
}

export default ModalE