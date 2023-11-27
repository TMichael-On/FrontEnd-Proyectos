import { useState, useRef, useEffect } from 'react';

function ModalOdontograma() {

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

    return (
        <>
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
        </>
    )
}

export default ModalOdontograma