async function loadCommits() {
 
    let username = document.getElementById('username');
    let repo = document.getElementById('repo');

    let array = [];

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
    .then((response) => {
        if(response.ok == false) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return response.json();
    })
    .then(data => {
        document.getElementById('commits').innerHTML = '';
        for(let i of data) {
            array.push(i);

            let li = document.createElement('li');
            let a = document.createElement('a');

            li.appendChild(a);
            document.getElementById('commits').appendChild(li);

            a.textContent = `${commits.commit.author.name}: ${commits.commit.message}`;
        }
    })
    .catch((error) => {
        document.getElementById('commits').value = ''
			let li = document.createElement('li');
			document.getElementById('commits').appendChild(li);
			li.textContent = error
    })

    console.log(array);
    for(let k of array) {
        console.log(k);
    } 
}