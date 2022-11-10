export const consultarAutos = async (ruta) => {
    const promise = await fetch (ruta)
    const vehiculos = await promise.json()
    return vehiculos
}