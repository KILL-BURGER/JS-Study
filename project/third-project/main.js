// 37adb3634d1c43a0849376c502f6d629

const API_KEY = `37adb3634d1c43a0849376c502f6d629`;
let newsList = [];
const menus = document.querySelectorAll('.menus button');
menus.forEach(menu => menu.addEventListener('click', (event) => {
    getNewsByCategory(event);
}));

let url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);
let totalResult = 0;
let page = 1;
const pageSize = 10;
const groupSize = 5;

const getNews = async () => {
    try {
        url.searchParams.set("page", page); // => &page=page
        url.searchParams.set("pageSize", pageSize);

        const response = await fetch(url);
        const data = await response.json();
        if (response.status === 200) {
            if (data.articles.length === 0) {
                throw new Error("No result for this search");
            }
            newsList = data.articles;
            totalResult = data.totalResults;
            render();
            paginationRender();
        } else {
            throw new Error(data.message);
        }

    } catch (error) {
        errorRender(error.message);
    }
}

const getLatestNews = async () => {
    url = new URL(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`
    );
    getNews(url);
}

const getNewsByCategory = async (event) => {
    const category = event.target.textContent.toLowerCase();
    url = new URL(
        `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${API_KEY}`
    );
    getNews(url);
}

const getNewsByKeyword = async () => {
    const keyword = document.getElementById('search-input').value;
    url = new URL(
        `https://newsapi.org/v2/top-headlines?q=${keyword}&apiKey=${API_KEY}`
    );
    getNews(url);
}

const render = () => {
    const newsHTML = newsList.map((news) => {
            let urlToImage = news.urlToImage;
            if (urlToImage === null) {
                urlToImage = `https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg`;
            }

            let description = news.description;
            if (description !== null && description.length > 200) {
                description = description.substring(0, 200) + '...';
            } else if (description === null) {
                description = '내용없음';
            }

            let source = news.source.name;
            if (source === null) {
                source = 'no source';
            }

            return `<div class="row news">
                        <div class="col-lg-4">
                            <img class="news-img-size" src='${urlToImage}' />
                        </div>
                        <div class="col-lg-8">
                            <h2>${news.title}</h2>
                            <p>
                                ${description}
                            </p>
                            <div>
                                ${source} ${moment(`${news.publishedAt}`, "YYYYMMDD").fromNow()}
                            </div>
                        </div>
                   </div>`
        }
    ).join("");

    document.getElementById('news-board').innerHTML = newsHTML;
}

const errorRender = (errorMessage) => {
    const errorHTML = `<div class="alert alert-danger" role="alert">${errorMessage}</div>`;
    document.getElementById('news-board').innerHTML = errorHTML;
}

const paginationRender = () => {
    const totalPages = Math.ceil(totalResult / pageSize);
    const pageGroup = Math.ceil(page / groupSize);

    let lastPage = pageGroup * groupSize;
    if (lastPage > totalPages) {
        lastPage = totalPages;
    }

    const firstPage = lastPage - (groupSize - 1) <= 0 ? 1 : lastPage - (groupSize - 1);

    let paginationHTML = `<li class="page-item" onclick="moveToPage(${page - 1})"><a class="page-link">Previous</a></li>`;

    for (let i = firstPage; i <= lastPage; i++) {
        paginationHTML += `<li class="page-item ${i === page ? "active" : ""}" onclick="moveToPage(${i})"><a class="page-link">${i}</a></li>`;
    }
    paginationHTML += `<li class="page-item" onclick="moveToPage(${page + 1})"><a class="page-link">Next</a></li>`

    document.querySelector(".pagination").innerHTML = paginationHTML;
};

const moveToPage = (pageNum) => {
    page = pageNum;
    getNews();
};

getLatestNews();