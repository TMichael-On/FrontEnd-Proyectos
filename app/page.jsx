// import Script from 'next/script'
import Link from "next/link"
import MyDataTable from "@/components/MyDataTable"
import ModalE from "@/components/ModalE"
import MyComponent from "@/components/MyComponent"


export default function Cita() {
  return (
    <>
      <ol className="breadcrumb mb-4 mt-4">
        <li className="breadcrumb-item"><Link href="/">Opciones</Link></li>
        <li className="breadcrumb-item active">Citas</li>
      </ol>
      <div className="card">
        <div className="card-header">
          <i className="fas fa-users me-1"></i> Citas
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-success" >Crear Nuevo</button>
            </div>
          </div>
          <hr />
          <MyDataTable />
        </div>
      </div>
    </>
  )
}
