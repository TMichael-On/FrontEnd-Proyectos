class exintrabucal_Peticiones {
    // LISTAR exintrabucal  
    async fetchResultListar() {
        console.log("exintrabucal")
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/exintrabucal/listexintrabucal/76905898', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR exintrabucal
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/exintrabucal/createexintrabucal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({     
                    "DNI": "76905898",
                    "LABIOS": "Prueba 1",
                    "PALADAR": "Prueba 1",
                    "CARRILLO": "Prueba 1",
                    "PISO": "Prueba 1",
                    "LENGUA": "Prueba 1",
                    "OROFARINGE": "Prueba 1",
                    "FRENILLO": "Prueba 1",
                    "SALIVA": "Prueba 1"
                            
                  
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR exintrabucal
    async fetchResultActualizar(data) {
        debugger
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/exintrabucal/updateexintrabucal/8`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "LABIOS": "Prueba 100",
                    "PALADAR": "Prueba 1",
                    "CARRILLO": "Prueba 1",
                    "PISO": "Prueba 1",
                    "LENGUA": "Prueba 1",
                    "OROFARINGE": "Prueba 1",
                    "FRENILLO": "Prueba 1",
                    "SALIVA": "Prueba 1"
                               
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR exintrabucal
    async fetchResultEliminar(IDexintrabucal) {
        try {
            debugger
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/exintrabucal/deleteexintrabucal/8`, {
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
export default exintrabucal_Peticiones;