
"use client"
import React from 'react';
import Odonto from '@/components/odonto'
import styles from './page.module.css'
import Link from 'next/link';
import DetallesPaciente from '@/components/DetallesPaciente';
import { useState, useRef, useEffect } from 'react';
import TableDetOdonto from '@/components/TableDetOdonto';
import detodontograma_Peticiones from '@/peticiones/detodontograma.peticiones';
import ModalPaciente, { mostrarDatos } from '@/components/ModalPaciente';

export default function odontrograma() {

  const [dataPaciente, setDataPaciente] = useState({
    IDPaciente: 0, pacNombre: '', pacApellido: '',
    pacDNI: '', pacSexo: '', pacReligion: '',
    pacRaza: '', pacFechaN: '', pacEdad: '', pacLugar: '',
    pacResidencia: '', pacGradoI: '', pacOcupacion: '',
    pacEstadoC: '', pacCorreo: '', pacTelef: '',
    pacEstado: '1',
  });
  const [dataFamiliar, setDataFamiliar] = useState({
    IDFamiliar:0,IDPaciente:0,famNombre:'',
    famApellido:'',famDNI:'',famParentezco:'',
    famOcupacion:'',famCorreo:'',famTelefono:''
  });

  const [dataDet, setDataDet] = useState([]);
  const [loadingDet, setLoadingDet] = useState(true);

  const [opciones, setOpciones] = useState([]);
  const [seleccion, setSeleccion] = useState('0');

  useEffect(() => {
    const datosDelServidor = ['AM', 'CE', 'IN'];

    setOpciones(['0', ...datosDelServidor]);
  }, []);

  const handleSeleccion = (e) => {
    setSeleccion(e.target.value);
  };

  const IDDetalleRef = useRef(null);
  const IDOdontogramaRef = useRef(null);
  const PiezaDentalRef = useRef(null);
  const IDTratamientoRef = useRef(null);
  const detSectorRef = useRef(null);
  const detEstadoRef = useRef(null);
  const detNotasRef = useRef(null);

  // function generateOptions(start, end) {
  //   const options = [];
  //   for (let i = start; i <= end; i++) {
  //     options.push(<option key={i} value={i}>{i}</option>);
  //   }
  //   return options;
  // }
  function generateOptions(start, end) {
    const options = [];
    for (let i = start; i <= end; i++) {
      // Convierte el número i en una cadena y obtén sus dígitos
      const digits = i.toString().split('');

      // Combina los dígitos en una cadena para el valor
      const combinedValue = digits.join('');

      options.push(<option key={i} value={combinedValue}>{i}</option>);
    }
    return options;
  }

  const openModal = () => {
    document.getElementById("IDDetalle").value = 0
    document.getElementById("PiezaDental").value = 0
    document.getElementById("IDTratamiento").value = 0
    document.getElementById("detSector").value = 0
    document.getElementById("detNotas").value = 0
    document.getElementById("mensajeError").style.display = "none";
  };


  const Guardar = async () => {
    const detalleOdontObj = new detodontograma_Peticiones();
    // "CODIGO":"5", //codigo del odontograma
    //                 "tratamient":1,
    //                 "cuadrante":1,
    //                 "diente":1,
    //                 "sector":"inferior",
    //                 "estado":"Roto",
    //                 "notas":"AM"
    // var dataDetallesO2 =
    // {
    //   "IDDetalle": 3,
    //   "IDOdontograma": 5, //selecciona al paciente
    //   "IDTratamiento": 1,
    //   "detCuadrante": 1,
    //   "detDiente": 1,
    //   "detSector": "inferior",
    //   "detEstado": "Roto",
    //   "detNotas": "AM",
    // }
    debugger
    var dataDetallesO = {
      IDDetalle: parseInt(IDDetalleRef.current.value),
      IDOdontograma: String(dataPaciente.IDPaciente),
      IDTratamiento: parseInt(IDTratamientoRef.current.value),
      Tratamieto: IDTratamientoRef.current.options[IDTratamientoRef.current.selectedIndex].text,
      detCuadrante: parseInt(PiezaDentalRef.current.value.charAt(0)),
      detDiente: parseInt(PiezaDentalRef.current.value.charAt(1)),
      detSector: detSectorRef.current.value,
      detEstado: detEstadoRef.current.value,
      detNotas: detNotasRef.current.value
    };

    try {
      var affectedRows
      var message
      var newRow
      if (dataDetallesO.IDDetalle == 0) {
        // CREAR CITA
        debugger
        const resultCrear = await detalleOdontObj.fetchResultCrear(dataDetallesO);
        affectedRows = resultCrear.result.affectedRows
        message = resultCrear.result.message
        newRow = resultCrear.result.row

        if (affectedRows == 1) {

          const updatedData = [...dataDet, newRow];
          setDataDet(updatedData);

          document.getElementById("ModalDetOdontograma").classList.remove("show");
          document.getElementById("ModalDetOdontograma").style.display = "none";
          // document.body.classList.remove("modal-open");
          const modalBackdrop = document.querySelector(".modal-backdrop");
          modalBackdrop && modalBackdrop.parentNode.removeChild(modalBackdrop);
          document.body.style.overflowY = 'auto';
        } else {
          // setModalVisible(false);
          document.getElementById("mensajeError").innerText = message;
          document.getElementById("mensajeError").style.display = "block";
        }

      } else {
        // ACTUALIZAR CITA
        debugger
        const resultActualizar = await detalleOdontObj.fetchResultActualizar(dataDetallesO);
        affectedRows = resultActualizar.result.affectedRows;
        message = resultActualizar.result.message;
        if (affectedRows == 1) {
          const updatedDataDet = dataDet.map(item => {
            // Actualizar la cita específica
            if (item.IDDetalle === dataDetallesO.IDDetalle) {
              return dataDetallesO;
            }
            return item;
          });
          setDataDet(updatedDataDet);

          document.getElementById("ModalDetOdontograma").classList.remove("show");
          document.getElementById("ModalDetOdontograma").style.display = "none";
          // document.body.classList.remove("modal-open");
          const modalBackdrop = document.querySelector(".modal-backdrop");
          modalBackdrop && modalBackdrop.parentNode.removeChild(modalBackdrop);
          document.body.style.overflowY = 'auto';
        } else {
          document.getElementById("mensajeError").innerText = message;
          document.getElementById("mensajeError").style.display = "block";
        }
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }


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
      <div id="ModalDetOdontograma" className="modal" aria-labelledby="exampleModalLabel" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="exampleModalLabel">Tratamientos</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input id="IDDetalle" type="hidden" ref={IDDetalleRef} />
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
                  <label htmlFor="IDTratamiento" className="form-label">Tratamiento</label>
                  <select id="IDTratamiento" className="form-select" ref={IDTratamientoRef}>
                    <option value="0" disabled={true}>Seleccionar una opción</option>
                    <option value="2">Curación</option>
                    <option value="2">Limpieza</option>
                    <option value="2">Extracción</option>
                    <option value="1">Endodoncia</option>
                  </select>
                </div>
                <div className="col-sm-12" >
                  <label htmlFor="detSector" className="form-label">Cara</label>
                  <select id="detSector" className="form-select" ref={detSectorRef}>
                    <option value="0" disabled={true}>Seleccionar una opción</option>
                    <option value="1">Vesticular</option>
                    <option value="2">Lingual</option>
                    <option value="3">Palatino</option>
                    <option value="3">Mesial</option>
                    <option value="3">Distal</option>
                    <option value="3">Oclusal</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="detEstado" className="form-label">Estado</label>
                  <input id="detEstado" type="text" className="form-control" autoComplete="off" ref={detEstadoRef} />
                </div>
                <div className="col-sm-6" >
                  <label htmlFor="detNotas" className="form-label">Enfermedad(siglas)</label>
                  <select id="detNotas" className="form-select" ref={detNotasRef} value={seleccion} onChange={handleSeleccion}>
                    <option value="0" disabled={true}>Seleccionar una opción</option>
                    {opciones.map((opcion) => (
                      <option key={opcion} value={opcion}>{opcion}</option>
                    ))}
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
      <ModalPaciente setDataPaciente={setDataPaciente} setDataDet={setDataDet} setDataFamiliar={setDataFamiliar}/>
      <div className="card">
        <div className="card-header">
          <i className="fas fa-users me-1"></i> Odontograma
        </div>
        <div className="card-body" style={{ maxWidth: '100%' }}>
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#ModalPaciente" >Seleccionar paciente</button>
            </div>
          </div>
          <hr />
          <DetallesPaciente dataPaciente={dataPaciente} dataFamiliar={dataFamiliar} />
          <hr/>
          <div className='table-responsive'>
            <Odonto columns={columns} data={data} styles={styles} />
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalDetOdontograma" onClick={openModal}>Añadir Tratamiento</button>
            </div>
          </div>
          <hr />
          <TableDetOdonto dataDet={dataDet} setDataDet={setDataDet} loadingDet={loadingDet} setLoadingDet={setLoadingDet} dataPaciente={dataPaciente} />
        </div>
      </div>
    </>
  )
}
