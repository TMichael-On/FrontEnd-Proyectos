
"use client"
import TableBiologica from "@/components/TableBiologica";
import Biologica_Peticiones from "@/peticiones/biologica.peticiones";
import Link from "next/link"
import { useState, useRef, useEffect } from 'react';

export default function historiasClinicas() {

  const IDBiologicaRef = useRef(null);
  const IDHistoriabRef = useRef(null);
  const bioApetitoRef = useRef(null);
  const bioDeposicionRef = useRef(null);
  const bioSedRef = useRef(null);
  const bioOrinaRef = useRef(null);
  const bioSuenoRef = useRef(null);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const openModal = () => {
    document.getElementById("IDBiologica").value = 0
    document.getElementById("IDHistoriab").value = "76905898"
    document.getElementById("bioApetito").value = "Apetito"
    document.getElementById("bioDeposicion").value = "Deposición"
    document.getElementById("bioSed").value = "Sed"
    document.getElementById("bioOrina").value = "Orina"
    document.getElementById("bioSueno").value = "Sueño"
    document.getElementById("mensajeError").style.display = "none";
  };

  const Guardar = async () => {
    const biologicaObj = new Biologica_Peticiones();

    debugger
    var dataBiologica = {
      IDBiologica: parseInt(IDBiologicaRef.current.value),
      IDHistoria: IDHistoriabRef.current.value,
      bioApetito: bioApetitoRef.current.value,
      bioDeposicion: bioDeposicionRef.current.value,
      bioSed: bioSedRef.current.value,
      bioOrina: bioOrinaRef.current.value,
      bioSueno: bioSuenoRef.current.value
    };

    try {
      var affectedRows
      var message
      var newRow
      if (dataBiologica.IDBiologica == 0) {
        // CREAR BIOLOGICA
        debugger
        const resultCrear = await biologicaObj.fetchResultCrear(dataBiologica);
        affectedRows = resultCrear.result.affectedRows
        message = resultCrear.result.message
        // newRow = resultCrear.result.row

        if (affectedRows == 1) {
          newRow = {
            "IDHistoria": "76905898",
            "bioApetito": "Prueba",
            "bioDeposicion": "Prueba",
            "bioSed": "Prueba",
            "bioOrina": "Prueba",
            "bioSueno": "Prueba"
          }

          const updatedData = [...data, newRow];
          setData(updatedData);

          document.getElementById("ModalHistoriaC").classList.remove("show");
          document.getElementById("ModalHistoriaC").style.display = "none";
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
        // ACTUALIZAR BIOLOGICA
        debugger
        const resultActualizar = await biologicaObj.fetchResultActualizar(dataBiologica);
        affectedRows = resultActualizar.affectedRows;
        message = resultActualizar.message;
        if (affectedRows == 1) {
          const updatedData = data.map(item => {
            if (item.IDBiologica === dataBiologica.IDBiologica) {
              return dataBiologica;
            }
            return item;
          });
          setData(updatedData);

          document.getElementById("ModalHistoriaC").classList.remove("show");
          document.getElementById("ModalHistoriaC").style.display = "none";
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



  return (
    <>
      <ol className="breadcrumb mb-4 mt-4">
        <li className="breadcrumb-item"><Link href="/">Opciones</Link></li>
        <li className="breadcrumb-item active">Historias clinica</li>
      </ol>
      {/* Modal */}
      <div id="ModalHistoriaC" className="modal" aria-labelledby="exampleModalLabel" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title" id="exampleModalLabel">Biologica</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input id="IDBiologica" type="show" ref={IDBiologicaRef} />
              <div className="row g-1">
                <div className="col-sm-6">
                  <label htmlFor="IDHistoriab" className="form-label">Paciente</label>
                  <input id="IDHistoriab" className="form-control" ref={IDHistoriabRef} />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="bioApetito" className="form-label">Apetito</label>
                  <input id="bioApetito" className="form-control" ref={bioApetitoRef} />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="bioDeposicion" className="form-label">Deposición</label>
                  <input id="bioDeposicion" type="text" className="form-control" autoComplete="off" ref={bioDeposicionRef} />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="bioSed" className="form-label">Sed</label>
                  <input id="bioSed" type="text" className="form-control" autoComplete="off" ref={bioSedRef} />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="bioOrina" className="form-label">Orina</label>
                  <input id="bioOrina" type="text" className="form-control" autoComplete="off" ref={bioOrinaRef} />
                </div>
                <div className="col-sm-6" >
                  <label htmlFor="bioSueno" className="form-label">Estado</label>
                  <input id="bioSueno" className="form-control" ref={bioSuenoRef} />
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
      <div className="col-sm-3 mb-2">
        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#ModalHistoriaC" onClick={openModal}>Crear Nuevo</button>
      </div>
      <div className="card">
        <div className="card-header">
          <i className="fas fa-users me-1"></i> Biologica
        </div>
        <div className="card-body">
          <div className="row align-items-end text-nowrap col-lg-10">
            <div className="col-sm-3 col-md-3">
              <div className="mb-2">
                <label className="form-label ">Fecha de Inicio:</label>
                <input className="form-control" type="text" id="txtfechainicio" name="fechainicio" />
              </div>
            </div>
            <div className="col-sm-3 col-md-3">
              <div className="mb-2">
                <label className="form-label">Fecha Fin:</label>
                <input className="form-control" type="text" id="txtfechafin" name="fechafin" />
              </div>
            </div>
            <div className="col-sm-3 col-md-3">
              <div className="mb-2">
                <label className="form-label">Id Transaccion:</label>
                <input className="form-control" type="text" id="txtidtransaccion" name="idtransaccion" />
              </div>
            </div>
            <div className="col-sm-3 col-md-3">
              <div className="d-grid mb-2">
                <button className="btn btn-primary" id="btnbuscar" type="button"><i className="fas fa-search"></i> Buscar</button>
              </div>
            </div>
          </div>
          <hr />
          <TableBiologica data={data} setData={setData} loading={loading} setLoading={setLoading} />
        </div>
      </div>
    </>
  )
}
