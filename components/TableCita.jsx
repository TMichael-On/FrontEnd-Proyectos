"use client"
import { useState, useEffect, useRef } from 'react';
import Citas_Peticiones from '@/peticiones/cita.peticiones';
import Swal from 'sweetalert2';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel
} from '@tanstack/react-table';

const citasObj = new Citas_Peticiones();

function TableCita({ data, setData, loading, setLoading }) {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await citasObj.fetchResultListar();
                setData(jsonData);
            } catch (error) {
                console.error('Error al obtener datos: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [setData]);

    //#region Botones
    const MostrarDatos = async (rowFila) => {
        const dataFilaSelec = rowFila.row.original
        document.getElementById("IDCita").value = dataFilaSelec.IDCita
        document.getElementById("IDHistoria").value = dataFilaSelec.IDHistoria
        document.getElementById("IDMedico").value = dataFilaSelec.IDMedico
        document.getElementById("citFecha").value = dataFilaSelec.citFecha
        document.getElementById("citHora").value = dataFilaSelec.citHora
        document.getElementById("citMotivo").value = dataFilaSelec.citMotivo
        document.getElementById("citEstado").value = dataFilaSelec.citEstado
        document.getElementById("mensajeError").style.display = "none";
        document.getElementById("citEstado").disabled = false;
        // citEstadoRef.current.setAttribute('aria-disabled', 'true');
    };

    const EliminarCita = (rowFila) => {
        Swal.fire({
            title: '¡Alerta!',
            text: '¿Estás seguro de querer eliminar la cita?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                debugger
                const indexFilaSelec = rowFila.row.index;
                const idCita = rowFila.row.original.IDCita;
                try {
                    const result = await citasObj.fetchResultEliminar(idCita);
                    const affectedRows = result.result.affectedRows;
                    const message = result.result.message;
                    if (affectedRows == 1) {
                        const updatedData = [...data];
                        updatedData.splice(indexFilaSelec, 1);
                        setData(updatedData);
                    } else {
                        console.error('Error al eliminar cita');
                    }
                } catch (error) {
                    console.error('Error al eliminar cita:', error);
                }
            }
        });
    };

    function estadoStructHash(parametro) {
        const OPCIONES = {
            "1": 'activo',
            "2": 'cancelado',
            "3": 'finalizado'
        }
        const OPCIONES_DEFAULT = 'Desconocido'
        let valor = OPCIONES[parametro] || OPCIONES_DEFAULT
        return valor
    }

    const columns = [
        // { header: 'ID', accessorKey: 'IDCita' },
        { header: 'Paciente', accessorKey: 'Paciente' },
        { header: 'Médico', accessorKey: 'Medico' },
        { header: 'Motivo de la consulta', accessorKey: 'citMotivo' },
        { header: 'Fecha', accessorKey: 'citFecha' },
        { header: 'Hora', accessorKey: 'citHora' },
        { header: 'Estado', accessorKey: 'citEstado', cell: info => estadoStructHash(info.getValue()) },
        {
            accessorKey: 'IDCita',
            header: () => null,
            cell: row => (
                <div style={{ width: '75px' }}>
                    <button type="button" className="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#ModalCita" onClick={() => MostrarDatos(row)}>
                        <i className="fas fa-pen"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm ms-2 btn-eliminar" onClick={() => EliminarCita(row)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )
        }
        //cell: info => dayjs(info.getValue()).format(DD/MM/YYYY)
    ];

    //#endregion
    // Configuración de la tabla
    const table = useReactTable(
        {
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel()
        }
    );
    // console.log(table.getRowModel().rows)

    // const AgregarNuevaFila = () => {
    //     const nuevaFila = {
    //         IDHistoria: 1,
    //         IDMedico: 1,
    //         citFecha: "2023-11-22",
    //         citHora: "23:54:00",
    //         citMotivo: "motivo",
    //         citEstado: "1",
    //     };
    //     // Agregar la nueva fila al estado de datos
    //     setData((prevData) => [...prevData, dataAdd]);
    // };
    return (
        <>
            {/* <button className="btn btn-success btn-sm ms-2" onClick={() => AgregarNuevaFila()}>
                Agregar Nueva Fila
            </button> */}
            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                <>
                    <div className='table-responsive'>
                        <table className="table table-bordered" style={{ borderCollapse: 'collapse', width: '100%' }} >
                            <thead>
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id} >
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody >
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())
                                                }
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="h-2" />
                    <div className="d-flex align-items-center gap-2">
                        <button
                            className="border rounded p-1"
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                        >
                            {'<<'}
                        </button>
                        <button
                            className="border rounded p-1"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            {'<'}
                        </button>
                        <button
                            className="border rounded p-1"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            {'>'}
                        </button>
                        <button
                            className="border rounded p-1"
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}
                        >
                            {'>>'}
                        </button>
                        <span className="d-flex align-items-center gap-1">
                            <div>Page</div>
                            <strong>
                                {table.getState().pagination.pageIndex + 1} of{' '}
                                {table.getPageCount()}
                            </strong>
                        </span>
                        <span className="flex items-center gap-1">
                            | Go to page:
                            <input
                                type="number"
                                defaultValue={table.getState().pagination.pageIndex + 1}
                                onChange={e => {
                                    const page = e.target.value ? Number(e.target.value) - 1 : 0
                                    table.setPageIndex(page)
                                }}
                                className="border p-1 rounded w-16"
                            />
                        </span>
                        <select
                            value={table.getState().pagination.pageSize}
                            onChange={e => {
                                table.setPageSize(Number(e.target.value))
                            }}
                        >
                            {[10, 20, 30, 40, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}
        </>
    );
};

export default TableCita;
