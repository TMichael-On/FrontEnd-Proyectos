class familiar_Peticiones {
    // LISTAR familiar  
    async fetchResultListar() {
        console.log("familiar")
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/familiar/listFamiliar/76905898', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR familiar
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/familiar/createFamiliar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({    
                    "DNI":"76905898",
                    "nombres":"Prueba",
                    "apellidos":"Prueba",
                    "DNIF":"78963254",
                    "parentezco":"Prueba",
                    "ocupacion":"Prueba",
                    "correo":"Prueba",
                    "telefono":"Prueba",
              
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR familiar
    async fetchResultActualizar(data) {
        debugger
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/familiar/updateFamiliar/5`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "nombres":"Prueba 100",
                    "apellidos":"Prueba",
                    "DNIF":"78963254",
                    "parentezco":"Prueba",
                    "ocupacion":"Prueba",
                    "correo":"Prueba",
                    "telefono":"Prueba",
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR familiar
    async fetchResultEliminar(IDfamiliar) {
        try {
            debugger
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/familiar/deleteFamiliar/5`, {
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
export default familiar_Peticiones;