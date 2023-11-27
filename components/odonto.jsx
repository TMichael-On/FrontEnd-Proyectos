"use client"
import Image from 'next/image';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel
} from '@tanstack/react-table';

function Odonto({ columns, data, styles }) {

    const table = useReactTable(
        {
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel()
        }
    );

    const theadClick = (cell) => () => {
        console.log(`Clic en la thead con ID ${cell.id}`);
    };
    const tbodyClick = (cell) => () => {
        console.log(`Clic en la tbody con ID ${cell.id}`);
    };
    const tfootClick = (cell) => () => {
        console.log(`Clic en la tfoot con ID ${cell.id}`);
    };

    function StructHash(cell, index) {
        const OPCIONES = {
            "0_col": (cell, index) => {
                let resultado = <td key={cell.id} id={cell.id} >{13 + index}</td>;
                if (index < 8) {
                    resultado = <td key={cell.id} id={cell.id} >{18 - index}</td>;
                }
                return resultado
            },
            "1_col": (cell, index) => {
                let resultado = <th key={cell.id} onClick={tbodyClick(cell)}>
                    <Image
                        src="/image/img4.png" // Ruta relativa desde la carpeta public
                        alt="Imagen 4"
                        width={45}
                        height={77}
                    />
                </th>;
                if (index < 3 || index > 12) {
                    resultado = <th key={cell.id} onClick={tbodyClick(cell)}>
                        <Image
                            src="/image/img1.png" // Ruta relativa desde la carpeta public
                            alt="Imagen 1"
                            width={45}
                            height={76}

                        />
                    </th>
                } else {
                    if (index < 4 || index > 11) {
                        resultado = <th key={cell.id} onClick={tbodyClick(cell)}>
                            <Image
                                src="/image/img2.png" // Ruta relativa desde la carpeta public
                                alt="Imagen 2"
                                width={44}
                                height={75}
                            />
                        </th>
                    }
                    else {
                        if (index < 5 || index > 10) {
                            resultado = <th key={cell.id} onClick={tbodyClick(cell)}>
                                <Image
                                    src="/image/img3.png" // Ruta relativa desde la carpeta public
                                    alt="Imagen 3"
                                    width={44}
                                    height={75}
                                />
                            </th>
                            if (index < 5) {
                                resultado = <th key={cell.id} onClick={tbodyClick(cell)}>
                                    <Image
                                        src="/image/img9.png" // Ruta relativa desde la carpeta public
                                        alt="Imagen 9"
                                        width={44}
                                        height={75}
                                    />
                                </th>
                            }
                        }
                    }
                }
                return resultado
            },
            "2_col": (cell, index) => {
                let cellClass = "";
                if (index < 3 || index > 12) {
                    cellClass = styles.th_sborde;
                } else {
                    cellClass = styles.th_borde;
                }
                return (
                    <th key={cell.id} className={cellClass}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </th>
                );
            },
            "3_col": (cell, index) => {
                let resultado = <td key={cell.id} id={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                if (index > 2 && index < 13) {
                    resultado = <td key={cell.id} id={cell.id}>{53 + index}</td>;
                    if (index < 8) {
                        resultado = <td key={cell.id} id={cell.id}>{58 - index}</td>;
                    }
                }
                return resultado;
            },
            "4_col": (cell, index) => {
                let resultado = <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                if (index > 2 && index < 13) {
                    resultado = <td key={cell.id} onClick={tbodyClick(cell)}>
                        <Image
                            src="/image/img1.png" // Ruta relativa desde la carpeta public
                            alt="Imagen 11"
                            width={45}
                            height={76}
                        />
                    </td>;
                    if (index > 4 && index < 11) {
                        resultado = <td key={cell.id} onClick={tbodyClick(cell)}>
                            <Image
                                src="/image/img4.png" // Ruta relativa desde la carpeta public
                                alt="Imagen 41"
                                width={45}
                                height={77}
                            />
                        </td>;
                    }
                }
                return resultado;
            },
            "5_col": (cell, index) => {
                let resultado = <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                if (index > 2 && index < 13) {
                    resultado = <td key={cell.id} onClick={tbodyClick(cell)}>
                        <Image
                            src="/image/img6.png" // Ruta relativa desde la carpeta public
                            alt="Imagen 6"
                            width={45}
                            height={76}
                        />
                    </td>;
                    if (index > 4 && index < 11) {
                        resultado = <td key={cell.id} onClick={tbodyClick(cell)}>
                            <Image
                                src="/image/img7.png" // Ruta relativa desde la carpeta public
                                alt="Imagen 7"
                                width={45}
                                height={77}
                            />
                        </td>;
                    }
                }
                return resultado;
            },
            "6_col": (cell, index) => {
                let resultado = <td key={cell.id} id={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                if (index > 2 && index < 13) {
                    resultado = <td key={cell.id} id={cell.id}>{63 + index}</td>;
                    if (index < 8) {
                        resultado = <td key={cell.id} id={cell.id}>{88 - index}</td>;
                    }
                }
                return resultado;
            },
            "7_col": (cell, index) => {
                let cellClass = "";
                if (index < 3 || index > 12) {
                    cellClass = styles.th_sborde;
                } else {
                    cellClass = styles.th_borde;
                }
                return (
                    //style={{ marginBottom: '50px !important' }}
                    <th key={cell.id} className={cellClass}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </th>
                );
            },
            "8_col": (cell, index) => {
                let resultado = <th key={cell.id} onClick={tbodyClick(cell)}>
                    <Image
                        src="/image/img7.png" // Ruta relativa desde la carpeta public
                        alt="Imagen 71"
                        width={45}
                        height={77}
                    />
                </th>;
                if (index < 3 || index > 12) {
                    resultado = <th key={cell.id} onClick={tbodyClick(cell)}>
                        <Image
                            src="/image/img6.png" // Ruta relativa desde la carpeta public
                            alt="Imagen 61"
                            width={45}
                            height={76}
                        />
                    </th>
                } else {
                    if (index < 5 || index > 10) {
                        resultado = <th key={cell.id} onClick={tbodyClick(cell)}>
                            <Image
                                src="/image/img8.png" // Ruta relativa desde la carpeta public
                                alt="Imagen 8"
                                width={44}
                                height={75}
                            />
                        </th>
                    }
                }
                return resultado
            },
            "9_col": (cell, index) => {
                let resultado = <td key={cell.id} id={cell.id}>{23 + index}</td>;
                if (index < 8) {
                    resultado = <td key={cell.id} id={cell.id}>{48 - index}</td>;
                }
                return resultado;
            },
        }
        let resultado = <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
        for (const colType in OPCIONES) {
            if (cell.id.startsWith(colType)) {
                resultado = OPCIONES[colType](cell, index);
                break; // Rompe el bucle si encuentra la coincidencia
            }
        }
        return resultado
    }
    return (
        <>
            <div className={styles.tableContainer}  >
                <table className={`${styles.tabla}`} style={{ borderCollapse: 'collapse'}} >
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header, index) => {
                                    let cellClass = "";
                                    if (index < 4) {
                                        cellClass = styles.th_sborde;
                                    } else if (index >= headerGroup.headers.length - 4) {
                                        cellClass = styles.th_sborde;
                                    } else { cellClass = styles.th_borde; }
                                    return (
                                        <th key={header.id} className={cellClass}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody >
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell, index) => (StructHash(cell, index)))}
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        {table.getFooterGroups().map(footerGroup => (
                            <tr key={footerGroup.id}>
                                {footerGroup.headers.map((header, index) => {
                                    let cellClass = "";
                                    if (index < 4) {
                                        cellClass = styles.th_sborde;
                                    } else if (index >= footerGroup.headers.length - 4) {
                                        cellClass = styles.th_sborde;
                                    } else { cellClass = styles.th_borde; }
                                    return (
                                        <th key={header.id} className={cellClass}>
                                            {header.isPlaceholder ? null : flexRender(
                                                header.column.columnDef.footer,
                                                header.getContext())}
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default Odonto