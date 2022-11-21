function loadRepos() {

    const username = document.getElementById('username').value;
    let array = [];

        fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            if(response.ok == false) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            return response.json();
        })
        .then(data => {
            document.getElementById('repos').value;
            for(let r of data) {
                array.push(r);

                let li = document.createElement('li');
                let a = document.createElement('a');

                li.appendChild(a);
                document.getElementById('repos').appendChild(li);
                a.textContent = r.full_name;
                a.setAttribute('href', `${r.url}`)
            }
        })
        .catch((error) => {
            document.getElementById('repos').value = ''
			let li = document.createElement('li');
			document.getElementById('repos').appendChild(li);
			li.textContent = error
        })
        console.log(array);
        for(let k of array) {
            console.log(k);
        }

}