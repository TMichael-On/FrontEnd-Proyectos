import { useState, useEffect } from 'react';
import Tabla_Base from './Tabla_Base';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel
} from '@tanstack/react-table';
import Paciente_Peticiones from '@/peticiones/paciente.peticiones';
import detodontograma_Peticiones from '@/peticiones/detodontograma.peticiones';
import familiar_Peticiones from '@/peticiones/familiar.peticiones';

const pacienteobj = new Paciente_Peticiones()

function ModalPaciente({ setDataPaciente, setDataDet, setDataFamiliar }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const mostrarDatos = (rowFila) => {
        debugger
        const dataFilaSelec = rowFila.row.original
        console.log(dataFilaSelec)
        setDataPaciente(dataFilaSelec)
        const fetchData = async () => {
            debugger
            const detalleOdontObj = new detodontograma_Peticiones();
            const familiarObj = new familiar_Peticiones();
            try {
                const jsonData = await detalleOdontObj.fetchResultListar(dataFilaSelec.IDPaciente);
                const [jsonData2] = await familiarObj.fetchResultListar(dataFilaSelec.pacDNI);
                setDataDet(jsonData);
                setDataFamiliar(jsonData2)
            } catch (error) {
                console.error('Error al obtener datos: ', error);
            }
        };
        fetchData();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jsonData = await pacienteobj.fetchResultListar();
                setData(jsonData);
            } catch (error) {
                console.error('Error al obtener datos: ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [setData]);

    const columns = [
        // { header: 'ID', accessorKey: 'IDCita' },
        {
            accessorKey: 'IDPaciente',
            header: () => null,
            cell: row => (
                <div style={{ width: '25px' }}>
                    <button type="button" className="btn btn-primary btn-sm" data-bs-dismiss="modal" onClick={() => mostrarDatos(row)}>
                        <i className="fas fa-check"></i>
                    </button>
                </div>
            )
        },
        { header: 'DNI', accessorKey: 'pacDNI' },
        {
            header: 'Apellidos y Nombres',
            accessorFn: row => `${row.pacApellido} ${row.pacNombre}`
        },
        //cell: info => dayjs(info.getValue()).format(DD/MM/YYYY)
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
            <div id="ModalPaciente" className="modal" aria-labelledby="exampleModalLabel" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title" id="exampleModalLabel">Lista de pacientes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='table-responsive'>
                                <Tabla_Base table={table} loading={loading} flexRender={flexRender} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ModalPaciente