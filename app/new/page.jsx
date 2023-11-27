"use client"
import ModalOdontograma from '@/components/ModalOdontograma'
import Link from 'next/link'


function page() {

    const openModal = () => {
        document.getElementById("IDOdontograma").value = 0
        document.getElementById("Tratamiento").value = 0
        document.getElementById("dntCara").value = 0
        document.getElementById("mensajeError").style.display = "none";
      };

    return (
        <>
            <ol className="breadcrumb mb-4 mt-4">
                <li className="breadcrumb-item"><Link href="/">Opciones</Link></li>
                <li className="breadcrumb-item active">Citas</li>
            </ol>
            <ModalOdontograma />
            <div className="card">
                <div className="card-header">
                    <i className="fas fa-users me-1"></i> Citas
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12">
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#ModalOdontograma" onClick={openModal}>Crear Nuevo</button>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default page