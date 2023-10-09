

let section1 = document.querySelector(".section1");
let btn1 = document.createElement("button");
btn1.textContent = 'Push me!';
section1.appendChild(btn1);

btn1.addEventListener("click", function () {

    const fetchName = () => fetch("https://api.agify.io/?name=kelian");
    fetchName()
        .then((response) => response.json())
        .then((json) => {        
                console.log(json);

            	let name = document.createElement('ul')
                let age = document.createElement('li')
                let count = document.createElement('li')

                name.textContent = json.name ;
                age.textContent = json.age ;
                count.textContent = json.count ;

                section1.appendChild(name)
                name.appendChild(age)
                name.appendChild(count)
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
    });