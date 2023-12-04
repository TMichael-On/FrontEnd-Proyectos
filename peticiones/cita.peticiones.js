class Citas_Peticiones {
    // LISTAR CITA
    async fetchResultListar() {
        console.log("Cita")
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/citas/listCita', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR CITA
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/citas/createCita', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "IDHistoria": data.IDHistoria,
                    "IDMedico": data.IDMedico,
                    "citFecha": data.citFecha, //YYYY-MM-DD "2023-11-22"
                    "citHora": data.citHora, //23:54:00
                    "citMotivo": data.citMotivo,
                    "citEstado": data.citEstado,
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR CITA
    async fetchResultActualizar(data) {
        debugger
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/citas/updateCita/${data.IDCita}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "IDMedico": data.IDMedico,
                    "citFecha": "2023-11-22", //YYYY-MM-DD
                    "citHora": data.citHora, //23:54:00
                    "citMotivo": data.citMotivo,
                    "citEstado": data.citEstado,
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR CITA
    async fetchResultEliminar(idCita) {
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/citas/deleteCita/${idCita}`, {
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
export default Citas_Peticiones;