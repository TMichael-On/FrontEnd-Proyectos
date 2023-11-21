"use client"
import { useState, useEffect } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel
} from '@tanstack/react-table';

function MyDataTable() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://desplieguebackend-production.up.railway.app/citas/listCita');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { header: 'ID', accessorKey: 'IDCita' },
        { header: 'Paciente', accessorKey: 'Paciente'},
        { header: 'Medico', accessorKey: 'Medico' },  
        { header: 'Motivo de la consulta', accessorKey: 'citMotivo' },
        { header: 'Fecha', accessorKey: 'citFecha' },
        { header: 'Hora', accessorKey: 'citHora' },              
        // { header: 'Estado', accessorKey: 'citEstado' },
        {
            id: 'citEstado',
            header: () => null,
            cell: row => (                
                <div style={{ width: '75px'}}>
                    <button type="button" className="btn btn-primary btn-sm btn-editar" onClick={() => handleEdit(row.getValue)}>
                        <i className="fas fa-pen"></i>
                    </button>
                    <button type="button" className="btn btn-danger btn-sm ms-2 btn-eliminar" onClick={() => handleDelete(row.getValue)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            )
        }
        //cell: info => dayjs(info.getValue()).format(DD/MM/YYYY)
    ];

    // Configuración de la tabla
    const table = useReactTable(
        {
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel()
        }
    );

    //#region Botones
    const handleEdit = (id) => {
        // Lógica para manejar la edición
    };

    const handleDelete = (id) => {
        // Lógica para manejar la eliminación
    };
    //#endregion 

    return (
        <>
            {loading ? (
                <p>Cargando datos...</p>
            ) : (
                <>
                    <div className='table-responsive'>
                        <table className="table table-bordered" style={{ borderCollapse: 'collapse', width: '100%'}} >
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

export default MyDataTable;
