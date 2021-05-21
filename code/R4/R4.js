/** 
 *@name getWeather by Whisgel Gonzalez
 *@version 1.0
 *@brief "Conecta con el servico rest"
 *@return 
 */

const getWeather = () => {
    fetch('http://api.weatherstack.com/forecast?access_key=e7adfa20c109b3df3a70c421a08c2eeb&query=New%20York')
        .then(res => res.json())
        .then(datos => {
            table(datos);
        })
}


/** 
 *@name table by Whisgel Gonzalez
 *@version 1.0
 *@brief "Obtiene datos del servicio Weather y imprime en la tabla los datos obtenidos"
 *@return 
 */

const table = (datos) => {
    let bodyTable = document.getElementById('bodyTable');
    if (datos.location != null) {
        bodyTable.innerHTML += `
        <tr>
        <td>${datos.location.country}</td>
        <td>${datos.location.region}</td>
        <td>${datos.location.name}</td>
        <td>${datos.location.localtime}</td>
        <td>${datos.location.lat}</td>
        <td>${datos.location.lon}</td>
        </tr>
        `
    } else {
        alert('El Servidor tardo demasiado en responder')
    }


}
getWeather()