export default async function loadCitas() {
    const res = await fetch('https://desplieguebackend-production.up.railway.app/citas/listCita')
    const data = await res.json()
    console.log(data)
    return data    
}