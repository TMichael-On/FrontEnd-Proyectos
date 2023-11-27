"use client"
import Link from "next/link"
// import MyComponent from "@/components/MyComponent";
import TableCita from "@/components/TableCita";
import Citas_Peticiones from "@/peticiones/cita.peticiones";
import { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// if (typeof window !== 'undefined') {
//   require('bootstrap/dist/js/bootstrap.bundle.min.js');
// }

export default function Cita() {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     require('bootstrap/dist/js/bootstrap.bundle.min.js');
  //   }
  // }, []);
  const IDCitaRef = useRef(null);
  const IDHistoriaRef = useRef(null);
  const IDMedicoRef = useRef(null);
  const citFechaRef = useRef(null);
  const citHoraRef = useRef(null);
  const citMotivoRef = useRef(null);
  const citEstadoRef = useRef(null);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const openModal = () => {
    document.getElementById("IDCita").value = 0
    document.getElementById("IDHistoria").value = 0
    document.getElementById("IDMedico").value = 0
    document.getElementById("citFecha").value = ""
    document.getElementById("citHora").value = "23:54:00"
    document.getElementById("citMotivo").value = ""
    document.getElementById("citEstado").value = 1
    document.getElementById("mensajeError").style.display = "none";
    // document.getElementById("citEstado").disabled = true;
    // document.getElementById("mensajeError").setAttribute('aria-disabled', 'true');
    citEstadoRef.current.setAttribute('disabled', 'true');
    // setModalVisible(true);
  };

  const Guardar = async () => {
    const citasObj = new Citas_Peticiones();

    debugger
    var dataCita = {
      IDCita: parseInt(IDCitaRef.current.value),
      IDHistoria: parseInt(IDHistoriaRef.current.value),
      IDMedico: parseInt(IDMedicoRef.current.value),
      Medico: IDMedicoRef.current.options[IDMedicoRef.current.selectedIndex].text,
      Paciente: IDHistoriaRef.current.options[IDHistoriaRef.current.selectedIndex].text,
      citFecha: citFechaRef.current.value,
      citHora: citHoraRef.current.value,
      citMotivo: citMotivoRef.current.value,
      citEstado: citEstadoRef.current.value
    };

    try {
      var affectedRows
      var message
      var newRow
      if (dataCita.IDCita == 0) {
        // CREAR CITA
        debugger
        const resultCrear = await citasObj.fetchResultCrear(dataCita);
        affectedRows = resultCrear.result.affectedRows
        message = resultCrear.result.message
        newRow = resultCrear.result.row

        if (affectedRows == 1) {
          
          const updatedData = [...data, newRow];
          setData(updatedData);

          document.getElementById("ModalCita").classList.remove("show");
          document.getElementById("ModalCita").style.display = "none";
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
        const resultActualizar = await citasObj.fetchResultActualizar(dataCita);
        affectedRows = resultActualizar.result.affectedRows;
        message = resultActualizar.result.message;
        if (affectedRows == 1) {
          const updatedData = data.map(item => {
            // Actualizar la cita específica
            if (item.IDCita === dataCita.IDCita) {
              return dataCita;
            }
            return item;
          });
          setData(updatedData);

          document.getElementById("ModalCita").classList.remove("show");
          document.getElementById("ModalCita").style.display = "none";
          // document.body.classList.remove("modal-open");
          const modalBackdrop = document.querySelector(".modal-backdrop");
          modalBackdrop && modalBackdrop.parentNode.removeChild(modalBackdrop);
          document.body.style.overflowY = 'auto';
        } else {
          document.getElementById("mensajeError").innerText = message;
          document.getElementById("mensajeError").style.display = "block";
          // Swal.fire({
          //   title: '¡Error!',
          //   text: message,
          //   icon: 'error',
          //   showCancelButton: true,
          //   confirmButtonText: 'Aceptar',
          //   cancelButtonText: 'Cancelar',
          // })
        }
      }
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  }

  return (
    <>
      <ol className="breadcrumb mb-4 mt-4">
        <li className="breadcrumb-item"><Link href="/">Opciones</Link></li>
        <li className="breadcrumb-item active">Citas</li>
      </ol>
      {/* Modal */}
      <div id="ModalCita" className="modal" aria-labelledby="exampleModalLabel" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="exampleModalLabel">Citas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input id="IDCita" type="show" ref={IDCitaRef} />
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
                  <label htmlFor="IDMedico" className="form-label">Médico</label>
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
                  <textarea  id="citMotivo" className="form-control" ref={citMotivoRef}></textarea>
                  {/* <input id="citMotivo" type="text" className="form-control" autoComplete="off" ref={citMotivoRef} /> */}
                </div>
                <div className="col-sm-6" >
                  <label htmlFor="citEstado" className="form-label">Estado</label>
                  <select id="citEstado" className="form-select" ref={citEstadoRef}>
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
      {/* Tabla */}
      <div className="card">
        <div className="card-header">
          <i className="fas fa-users me-1"></i> Citas
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#ModalCita" onClick={openModal}>Crear Nuevo</button>
            </div>
          </div>
          <hr />
          <TableCita data={data} setData={setData} loading={loading} setLoading={setLoading} />
        </div>
      </div>
    </>
  )
}