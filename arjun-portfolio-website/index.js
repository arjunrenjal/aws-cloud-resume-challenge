const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://j3hcut2rwfzz4y2s3dx65z65xu0uhchp.lambda-url.ap-southeast-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();