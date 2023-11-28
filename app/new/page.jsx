"use client"
import ModalOdontograma from '@/components/ModalOdontograma'
import MyComponent from '@/components/MyComponent';
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
                <li className="breadcrumb-item"><Link href="/new">Opciones</Link></li>
                <li className="breadcrumb-item active">New</li>
            </ol>
            <MyComponent/>
        </>
    )
}

export default page