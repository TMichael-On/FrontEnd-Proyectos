class Biologica_Peticiones {
    // LISTAR BIOLOGICA biologica 
    async fetchResultListar() {
        console.log("biologica")
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/biologica/listbiologica/76905898', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR BIOLOGICA
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/biologica/createbiologica', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "DNI": data.IDHistoria,
                    "APETITO": data.bioApetito,
                    "DEPOSICION": data.bioDeposicion,
                    "SED": data.bioSed,
                    "ORINA": data.bioOrina,
                    "SUENO": data.bioSueno
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR BIOLOGICA
    async fetchResultActualizar(data) {
        debugger
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/biologica/updatebiologica/${data.IDBiologica}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({                
                    APETITO: data.bioApetito,
                    DEPOSICION: data.bioDeposicion,
                    SED: data.bioSed,
                    ORINA: data.bioOrina,
                    SUENO: data.bioSueno
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR BIOLOGICA
    async fetchResultEliminar(IDBiologica) {
        try {
            debugger
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/biologica/deletebiologica/${IDBiologica}`, {
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
export default Biologica_Peticiones;