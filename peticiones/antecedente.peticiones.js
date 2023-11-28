class antecedente_Peticiones {
    // LISTAR antecedente  
    async fetchResultListar() {
        console.log("antecedente")
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/antecedente/listantecedente/76905898', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR antecedente
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/antecedente/createantecedente', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({         
                    "DNI": "76905898",
                    "personal": "Prueba",
                    "patologico": "Prueba",
                    "alergia": "Prueba",
                    "familiar": "Prueba"           
                  
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR antecedente
    async fetchResultActualizar(data) {
        debugger
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/antecedente/updateantecedente/6`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "personal": "Prueba 10",
                    "patologico": "Prueba 10",
                    "alergia": "Prueba 10",
                    "familiar": "Prueba 10"                
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR antecedente
    async fetchResultEliminar(IDantecedente) {
        try {
            debugger
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/antecedente/deleteantecedente/6`, {
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
export default antecedente_Peticiones;