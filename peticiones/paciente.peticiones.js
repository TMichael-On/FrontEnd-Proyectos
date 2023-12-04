class Paciente_Peticiones {
    // LISTAR Paciente 
    async fetchResultListar() {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/paciente/listPaciente/1', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // LISTAR OPCIONES Paciente 
    async fetchResultListarOpc() {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/paciente/listPaciente', {
                method: 'GET'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    // CREAR Paciente
    async fetchResultCrear(data) {
        try {
            const response = await fetch('https://desplieguebackend-production.up.railway.app/Paciente/createPaciente', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({                    
                        "NOMBRES":"PRUEBA",
                        "APELLIDOS":"PRUEBA",
                        "DNI":"78963214",
                        "SEXO":"FEMENIMO",
                        "RELIGION":"ATEO",
                        "RAZA":"MESTIZO",
                        "FECHA":"2000-01-01",
                        "LUGAR":"JAUJA",
                        "RESIDENCIA":"CALLE NUEVA",
                        "GRADO":"DOCTOR",
                        "OCUPACION":"FILOSOFO",
                        "CIVIL":"SOLTERO",
                        "CORREO":"PRUEBA1@GMAIL.COM",
                        "TELEFONO":"963214587",
                        "ESTADO":"1",
                        "ECTOSCOPIA":"JOVEN DELGADO"
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ACTUALIZAR Paciente
    async fetchResultActualizar(data) {
        debugger
        try {
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/Paciente/updatePaciente/6`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({                    
                    "NOMBRES":"PRUEBA 1",
                    "APELLIDOS":"PRUEBA 1",
                    "DNI":"78963214",
                    "SEXO":"FEMENIMO",
                    "RELIGION":"ATEO",
                    "RAZA":"MESTIZO",
                    "FECHA":"2000-01-01",
                    "LUGAR":"JAUJA",
                    "RESIDENCIA":"CALLE NUEVA",
                    "GRADO":"DOCTOR",
                    "OCUPACION":"FILOSOFO",
                    "CIVIL":"SOLTERO",
                    "CORREO":"PRUEBA1@GMAIL.COM",
                    "TELEFONO":"963214587",
                    "ESTADO":"1",
                    "ECTOSCOPIA":"JOVEN DELGADO"
                })
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
    //ELIMINAR Paciente
    async fetchResultEliminar(IDPaciente) {
        try {
            debugger
            const response = await fetch(`https://desplieguebackend-production.up.railway.app/paciente/deletePaciente/3`, {
                method: 'PATCH'
            });
            const jsonResult = await response.json();
            return jsonResult;
        } catch (error) {
            console.error('Error al obtener respuesta de la API:', error);
            throw error;
        }
    };
}
export default Paciente_Peticiones;