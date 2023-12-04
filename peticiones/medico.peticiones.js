class Medico_Peticiones {
    // LISTAR Medico 
    async fetchResultListar() {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/Medico/listMedico', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
}
export default Medico_Peticiones;