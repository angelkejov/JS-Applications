async function getInfo() {
    
    const userInputElement = document.getElementById('stopId');  
    const urlGetBusInfo = `http://localhost:3030/jsonstore/bus/businfo/${userInputElement.value}`

    const stopNameElement = document.getElementById('stopName');
    const busList = document.getElementById('buses') 

    busList.innerHTML = ""; 
    userInputElement.value = "";

    try{ 
        const response = await fetch(urlGetBusInfo); 
       
        const data = await response.json();

        stopNameElement.textContent = data.name; 

        Object.entries(data.buses).forEach(([busNumber, timeArrive]) =>{ 

            const li = document.createElement('li');
            li.textContent = `Bus ${busNumber} arrives in ${timeArrive} minutes`
            busList.appendChild(li);
        })


    }
    catch(error) {

        stopNameElement.textContent = "Error";
    }
}