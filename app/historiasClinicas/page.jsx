
async function loadCitas(){
  const res = await fetch('https://desplieguebackend-production.up.railway.app/citas/listCita')
  const data = await res.json()
  return data
}

export default async function historiasClinicas() {
  const citas = await loadCitas();
  console.log(citas)

  return (
    <div>historiasClinicas</div>
  )
}
