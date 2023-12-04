
import { useState, useRef, useEffect } from 'react';

function DetallesPaciente({ dataPaciente }) {
    // { dataPaciente, setDataPaciente }    

    return (
        <>
            <div className="row g-0">
                <input id="IDPaciente" type="show" value={dataPaciente.IDPaciente} />
                <div className="col-md-6 mb-2">
                    <div className="row g-0">
                        <label htmlFor="" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }} ><b>Apellidos y Nombres:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="Apellidos_Nombres">{`${dataPaciente.pacApellido} ${dataPaciente.pacNombre}`}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-lg-1 mb-2" />
                <div className="col-md-2  mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtnombres1" className="col-auto font-weight-bold g-0" style={{ paddingRight: '10px' }}><b>Edad:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtnombres1">{dataPaciente.pacEdad}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-lg-3 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtprofesion1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Sexo:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtprofesion1">{dataPaciente.pacSexo}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcolegiatura1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Fecha de Nacimiento:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcolegiatura1">{dataPaciente.pacFechaN}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-lg-1 mb-2" />
                <div className="col-md-4 col-lg-5 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtClab1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Lugar:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtClab1">{dataPaciente.pacLugar}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcargo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Religión:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcargo1">{dataPaciente.pacReligion}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-0 col-lg-1 mb-2" />
                <div className="col-md-3 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtdireccion1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Raza:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtdireccion1">{dataPaciente.pacRaza}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txttelefono1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Estado Civil:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txttelefono1">{dataPaciente.pacEstadoC}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Domicilio:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacEdad}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-lg-1 mb-2" />
                <div className="col-md-4 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Residencia:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacResidencia}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Teléfono:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacTelef}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Grado de Instrucción:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacGradoI}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-lg-1 mb-2" />
                <div className="col-lg-5 col-md-4 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Ocupación:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacOcupacion}</label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-md-6 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>En caso necesario comunicar a:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacEdad}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Parentesco:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacEdad}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Domicilio:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacEdad}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Teléfono:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacEdad}</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    <div className="row g-0">
                        <label htmlFor="txtcorreo1" className="col-auto g-0" style={{ paddingRight: '10px' }}><b>Acompañante:</b></label>
                        <div className="row col-auto">
                            <label className="g-0" id="txtcorreo1">{dataPaciente.pacEdad}</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetallesPaciente