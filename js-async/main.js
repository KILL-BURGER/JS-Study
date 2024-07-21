const API_KEY = `37adb3634d1c43a0849376c502f6d629`;

async function getNews() {
    const url = new URL(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
    );
    console.log('uuu', url);

    const response = await fetch(url);

    console.log('rrr', response);
}

getNews()
for (let i = 0; i < 20; i++) {
    console.log("after", i);
}