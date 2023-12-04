"use client"
import { useState, useEffect, useRef } from 'react';
import Paciente_Peticiones from '@/peticiones/paciente.peticiones';
import Swal from 'sweetalert2';
import Tabla_Base from './Tabla_Base';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel
} from '@tanstack/react-table';

const pacienteObj = new Paciente_Peticiones();

function TablePaciente({ data, setData, loading, setLoading }) {

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await pacienteObj.fetchResultListar();
                setData(jsonData);
            } catch (error) {
                console.error('Error al obtener datos: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [setData]);

    const EliminarPaciente = (rowFila) => {
        Swal.fire({
            title: '¡Alerta!',
            text: '¿Estás seguro de querer dar de baja el paciente?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                debugger
                const indexFilaSelec = rowFila.row.index;
                const IDPaciente = rowFila.row.original.IDPaciente;
                try {
                    const result = await pacienteObj.fetchResultEliminar(IDPaciente);
                    const affectedRows = result.result.affectedRows;
                    const message = result.result.message;
                    if (affectedRows == 1) {
                        const updatedData = [...data];
                        updatedData.splice(indexFilaSelec, 1);
                        setData(updatedData);
                    } else {
                        console.error('Error al dar de baja el paciente');
                    }
                } catch (error) {
                    console.error('Error al dar de baja el paciente:', error);
                }
            }
        });
    };

    // const MostrarDatos = async (rowFila) => {
    //     const dataFilaSelec = rowFila.row.original
    //     document.getElementById("IDPaciente").value = dataFilaSelec.IDPaciente
    //     document.getElementById("IDHistoria").value = dataFilaSelec.IDHistoria
    //     document.getElementById("IDMedico").value = dataFilaSelec.IDMedico
    //     document.getElementById("citFecha").value = dataFilaSelec.citFecha
    //     document.getElementById("citHora").value = dataFilaSelec.citHora
    //     document.getElementById("citMotivo").value = dataFilaSelec.citMotivo
    //     document.getElementById("citEstado").value = dataFilaSelec.citEstado
    //     document.getElementById("mensajeError").style.display = "none";
    //     document.getElementById("citEstado").disabled = false;
    //     // citEstadoRef.current.setAttribute('aria-disabled', 'true');
    // };
    const columns = [
        // { header: 'ID', accessorKey: 'IDPaciente' },
        { header: 'DNI', accessorKey: 'pacDNI' },
        {
            header: 'Apellidos y Nombres',
            accessorFn: row => `${row.pacApellido} ${row.pacNombre}`
        },
        { header: 'Sexo', accessorKey: 'pacSexo' },
        { header: 'Religion', accessorKey: 'pacReligion' },
        { header: 'Raza', accessorKey: 'pacRaza' },
        { header: 'Edad', accessorKey: 'pacEdad' },
        { header: 'Lugar', accessorKey: 'pacLugar' },
        { header: 'Residencia', accessorKey: 'pacResidencia' },
        { header: 'Grado de instrución', accessorKey: 'pacGradoI' },
        { header: 'Ocupación', accessorKey: 'pacOcupacion' },
        { header: 'Estado civil', accessorKey: 'pacEstadoC' },
        { header: 'Correo', accessorKey: 'pacCorreo' },
        { header: 'Telefono', accessorKey: 'pacTelef' },
        {
            header: 'Estado', accessorKey: 'pacEstado',
            cell: info => {
                const estadoValue = info.getValue();
                const estadoText = estadoValue === 1 ? 'Inactivo' : 'Activo';
                return estadoText;
            }
        },
        {
            accessorKey: 'IDPaciente',
            header: () => null,
            cell: row => (
                <div style={{ width: '75px' }}>
                    <button type="button" className="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#ModalPaciente2">
                        <i className="fas fa-pen"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm ms-2 btn-eliminar" onClick={() => EliminarPaciente(row)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )
        }
    ];
    const table = useReactTable(
        {
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel()
        }
    );

    return (
        <>
            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                <>
                    <div className='table-responsive'>
                        <Tabla_Base table={table} loading={loading} flexRender={flexRender} />
                    </div>
                </>
            )}
        </>
    );
};

export default TablePaciente;
