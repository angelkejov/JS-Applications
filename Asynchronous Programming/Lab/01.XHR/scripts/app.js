function loadRepos() {
    
    let array = [];

    fetch("https://api.github.com/users/testnakov/repos")
    .then((response) => {
        if(response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
    }).then((data) => {
        document.getElementById('res').value;
            for(let r of data) {
                array.push(r);

                let li = document.createElement('li');
                let a = document.createElement('a');

                li.appendChild(a);
                document.getElementById('res').appendChild(li);
            }
    })

    for(let k of array) {
        console.log(k);
    }

}