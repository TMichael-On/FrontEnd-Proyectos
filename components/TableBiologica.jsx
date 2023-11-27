"use client"
import { useState, useEffect, useRef } from 'react';
import Biologica_Peticiones from '@/peticiones/biologica.peticiones';
import Swal from 'sweetalert2';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel
} from '@tanstack/react-table';

const biologicaObj = new Biologica_Peticiones();

function TableBiologica({ data, setData, loading, setLoading }) {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await biologicaObj.fetchResultListar();
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
        debugger
        const dataFilaSelec = rowFila.row.original
        document.getElementById("IDBiologica").value = dataFilaSelec.IDBiologica
        document.getElementById("IDHistoriab").value = dataFilaSelec.IDHistoria
        document.getElementById("bioApetito").value = dataFilaSelec.bioApetito
        document.getElementById("bioDeposicion").value = dataFilaSelec.bioDeposicion
        document.getElementById("bioSed").value = dataFilaSelec.bioSed
        document.getElementById("bioOrina").value = dataFilaSelec.bioOrina
        document.getElementById("bioSueno").value = dataFilaSelec.bioSueno
        document.getElementById("mensajeError").style.display = "none";
        // citEstadoRef.current.setAttribute('aria-disabled', 'true');
    };

    const EliminarCita = (rowFila) => {
        Swal.fire({
            title: '¡Alerta!',
            text: '¿Estás seguro de querer eliminar el registro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                debugger
                const indexFilaSelec = rowFila.row.index;
                const IDBiologica = rowFila.row.original.IDBiologica;
                try {
                    const result = await biologicaObj.fetchResultEliminar(IDBiologica);
                    const affectedRows = result.result.affectedRows;
                    const message = result.result.message;
                    if (affectedRows == 1) {
                        const updatedData = [...data];
                        updatedData.splice(indexFilaSelec, 1);
                        setData(updatedData);
                    } else {
                        console.error('Error al eliminar el registro');
                    }
                } catch (error) {
                    console.error('Error al eliminar el registro:', error);
                }
            }
        });
    };

    const columns = [
        // { header: 'ID', accessorKey: 'IDBiologica' },
        { header: 'IDHistoria', accessorKey: 'IDHistoria' },
        { header: 'Apetito', accessorKey: 'bioApetito' },
        { header: 'Deposición', accessorKey: 'bioDeposicion' },
        { header: 'Sed', accessorKey: 'bioSed' },
        { header: 'Orina', accessorKey: 'bioOrina' },
        { header: 'Sueño', accessorKey: 'bioSueno' },
        {
            accessorKey: 'IDBiologica',
            header: () => null,
            cell: row => (
                <div style={{ width: '75px' }}>
                    <button type="button" className="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#ModalHistoriaC" onClick={() => MostrarDatos(row)}>
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

    return (
        <>
            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                <>
                    <div className='table-responsive'>
                        <table className="table table-bordered " style={{ borderCollapse: 'collapse', width: '100%' }} >
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

export default TableBiologica;
