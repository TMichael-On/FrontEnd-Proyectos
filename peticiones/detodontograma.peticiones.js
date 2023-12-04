class detodontograma_Peticiones {
    // LISTAR detodontograma  
    async fetchResultListar(ID) {
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/detalleodontograma/listDetodont/${ID}`, {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR detodontograma
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/detalleodontograma/createDetodont', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({   
                    "CODIGO":data.IDOdontograma, //codigo del odontograma
                    "tratamiento":data.IDTratamiento,
                    "cuadrante":data.detCuadrante,
                    "diente":data.detDiente,
                    "sector":data.detSector,
                    "estado":data.detEstado,
                    "notas":data.detNotas          
              
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR detodontograma
    async fetchResultActualizar(data) {
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/detalleodontograma/updateDetodont/2`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "tratamiento":1,
                    "cuadrante":1,
                    "diente":1,
                    "sector":"CENTRO",
                    "estado":"Roto",
                    "notas":"AM"          
                               
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR detodontograma
    async fetchResultEliminar(IDdetodontograma) {
        try {
            debugger
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/detalleodontograma/deleteDetodont/${IDdetodontograma}`, {
                method: 'DELETE'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
}
export default detodontograma_Peticiones;