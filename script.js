let section1 = document.querySelector(".section1");
let main = document.querySelector("main");
let btn1 = document.createElement("button")

btn1.textContent = 'Push me!';
main.appendChild(btn1);
main.appendChild(section1);

btn1.addEventListener("click", async function () {

    btn1.disabled = true;

    while (section1.firstChild) {
        section1.removeChild(section1.firstChild);
    }

    try {
        const response = await fetch("https://thatsthespir.it/api");
        if (!response.ok) {
            throw new Error("Failed to fetch data from the API.");
        }
        const json = await response.json();

        console.log(json);

        let author = document.createElement('h1')
        let photo = document.createElement('img')
        let quote = document.createElement('p')

        author.textContent = json.author;
        photo.src = json.photo;
        photo.alt = json.author;
        quote.textContent = json.quote;

        section1.appendChild(author)
        section1.appendChild(photo)
        section1.appendChild(quote)

        async function resolveAfter1Seconds() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('resolved');
                }, 500);
            });
        }
        
        await resolveAfter1Seconds();

    } 
    catch (error) {
        const errormessage = document.createElement('p');
        errormessage.textContent = "Please try again later.";
        section1.appendChild(errormessage);
    } 
    finally {
        btn1.disabled = false;
    }
});
btn1.click();