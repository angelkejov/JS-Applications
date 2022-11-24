export function formHandler(formId) {
    const formData = new FormData(formId);
    const dataObject = {};
    const emptyFields = [];
    let _false = 0;

    for (const [key, value] of formData.entries()) {
        dataObject[key] = value;
    }

    for (const key in dataObject) {
        if (dataObject[key] == '') {
            dataObject[key] = false;
            _false++;
            emptyFields.push(document.querySelector(`[for=${key}]`).textContent);
        }
    }

    if (emptyFields.length == 0) {
        return dataObject;
    } else {
        if (_false == 1) {
            alert(`Field -> " ${emptyFields.join(', ')} " is mandatory!`);
            return dataObject;
        } else {
            alert(`Fields -> " ${emptyFields.join(', ')} " are mandatory!`);
            return dataObject;
        }
    }
}

// use the following code to stop the execution of the function that use this handler 
/*

const values = Object.values(formData).map(v => {
        if (v == false) {
            throw new Error('Empty fields in the form!')
        }
    })

where formData = object with the collected data

*/