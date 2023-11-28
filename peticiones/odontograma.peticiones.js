class odontograma_Peticiones {
    // LISTAR odontograma  
    async fetchResultListar() {
        console.log("odontograma")
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/odontograma/listodontograma/76905898', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR odontograma
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/odontograma/createodontograma', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({     
                    "DNI": "76905898",
                    "FASE": "Prueba",
                    "ESPECIF": "Prueba",
                    "OBSERV": "Prueba"
                  
              
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR odontograma
    async fetchResultActualizar(data) {
        debugger
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/odontograma/updateodontograma/14`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "FASE": "Prueba 100",
                    "ESPECIF": "Prueba",
                    "OBSERV": "Prueba"
                  
                               
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR odontograma
    async fetchResultEliminar(IDodontograma) {
        try {
            debugger
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/odontograma/deleteodontograma/14`, {
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
export default odontograma_Peticiones;