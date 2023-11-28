class exgeneral_Peticiones {
    // LISTAR exgeneral  
    async fetchResultListar() {
        console.log("exgeneral")
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/exgeneral/listexgeneral/76905898', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR exgeneral
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/exgeneral/createexgeneral', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({    
                    
                    "DNI": "76905898",
                    "PESO": 90,
                    "TALLA": 1.70,
                    "BIOTIPO": "Ectomorfo",
                    "PIEL": "Clara",
                    "CABELLO": "Negro",
                    "UNAS": "Cortas y limpias",
                    "PRESION": "120/80 mmHg",
                    "PULSO": "75 bpm",
                    "FRECUENCIA": "16 rpm",
                    "TEMPERATURA": "37.0°"
           
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR exgeneral
    async fetchResultActualizar(data) {
        debugger
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/exgeneral/updateexgeneral/7`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    
                    "PESO": 60,
                    "TALLA": 1.70,
                    "BIOTIPO": "Ectomorfo",
                    "PIEL": "Clara",
                    "CABELLO": "Negro",
                    "UNAS": "Cortas y limpias",
                    "PRESION": "120/80 mmHg",
                    "PULSO": "75 bpm",
                    "FRECUENCIA": "16 rpm",
                    "TEMPERATURA": "37.0°"               
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR exgeneral
    async fetchResultEliminar(IDexgeneral) {
        try {
            debugger
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/exgeneral/deleteexgeneral/7`, {
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
export default exgeneral_Peticiones;