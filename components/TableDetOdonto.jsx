"use client"
import detodontograma_Peticiones from '@/peticiones/detodontograma.peticiones';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel
} from '@tanstack/react-table';
import { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

function TableDetOdonto({ dataDet, setDataDet, loadingDet, setLoadingDet }) {

    const detalleOdontObj = new detodontograma_Peticiones();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await detalleOdontObj.fetchResultListar();
                setDataDet(jsonData);
            } catch (error) {
                console.error('Error al obtener datos: ', error);
            } finally {
                setLoadingDet(false);
            }
        };
        fetchData();
    }, [setDataDet]);

    const EliminarDetOdontograma = (rowFila) => {
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
                const IDDetalle = rowFila.row.original.IDDetalle;
                try {
                    const result = await detalleOdontObj.fetchResultEliminar(IDDetalle);
                    const affectedRows = result.result.affectedRows;
                    const message = result.result.message;
                    if (affectedRows == 1) {
                        const updatedData = [...dataDet];
                        updatedData.splice(indexFilaSelec, 1);
                        setDataDet(updatedData);
                    } else {
                        console.error('Error al eliminar registro');
                    }
                } catch (error) {
                    console.error('Error al eliminar registro:', error);
                }
            }
        });
    };

    const columns = [
        // { header: 'ID', accessorKey: 'IDCita' },
        { header: 'Tratamiento', accessorKey: 'Tratamiento' },
        { header: 'Cuadrante', accessorKey: 'detCuadrante' },
        { header: 'Diente', accessorKey: 'detDiente' },
        { header: 'Cara', accessorKey: 'detSector' },
        {
            accessorKey: 'IDCita',
            header: () => null,
            cell: row => (
                <div style={{ width: '75px' }}>
                    <button type="button" className="btn btn-primary btn-sm btn-editar" data-bs-toggle="modal" data-bs-target="#ModalCita" onClick={() => MostrarDatos(row)}>
                        <i className="fas fa-pen"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm ms-2 btn-eliminar" onClick={() => EliminarDetOdontograma(row)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )
        }
        //cell: info => dayjs(info.getValue()).format(DD/MM/YYYY)
    ];

    const table = useReactTable(
        {
            data: dataDet,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel()
        }
    );

    return (
        <>
            {loadingDet ? (
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
    )
}

export default TableDetOdonto