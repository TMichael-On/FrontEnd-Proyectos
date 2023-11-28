class diente_Peticiones {
    // LISTAR diente  
    async fetchResultListar() {
        console.log("diente")
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/diente/listdiente/76905898', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR diente
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/diente/creatediente', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({     
                    "DNI": "76905898",
                    "NUMERO": 1,
                    "COLOR": "Prueba",
                    "FORMA": "Prueba",
                    "TAMANO": "Prueba",
                    "DIASTEMA": "Prueba",
                    "EDENTULA": "Prueba",
                    "POSANORMAL": "Prueba",
                    "FACDESGASTE": "Prueba",
                    "LINMEDIA": "Prueba",
                    "OTROS": "Prueba"
              
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR diente
    async fetchResultActualizar(data) {
        debugger
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/diente/updatediente/6`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "NUMERO": 1,
                    "COLOR": "Prueba 1000",
                    "FORMA": "Prueba",
                    "TAMANO": "Prueba",
                    "DIASTEMA": "Prueba",
                    "EDENTULA": "Prueba",
                    "POSANORMAL": "Prueba",
                    "FACDESGASTE": "Prueba",
                    "LINMEDIA": "Prueba",
                    "OTROS": "Prueba"
                               
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR diente
    async fetchResultEliminar(IDdiente) {
        try {
            debugger
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/diente/deletediente/6`, {
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
export default diente_Peticiones;