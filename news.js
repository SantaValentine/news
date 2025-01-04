const newsContainer = document.getElementById("newsContainer");
const loadingIndicator = document.getElementById("loading");


const newsData = [
    {
        title: "Онлайн-обучение сегодня",
        content: "Онлайн-обучение стало удобным способом получения знаний. Технологии позволяют студентам учиться в любое время. ".repeat(20)
    },
    {
        title: "Гибкость онлайн-курсов",
        content: "Гибкий график позволяет совмещать учебу с работой. Вы можете изучать материалы в любое время и из любой точки мира. ".repeat(20)
    },
    {
        title: "Образование для всех",
        content: "Современные образовательные технологии делают знания доступными для школьников, студентов и пенсионеров. ".repeat(20)
    },
    {
        title: "Мобильные приложения для обучения",
        content: "Мобильные технологии позволяют учиться в любом месте. Курсы включают интерактивные задания, тесты и видеолекции. ".repeat(20)
    },
    {
        title: "Программы для профессионалов",
        content: "Профессионалы могут улучшить свои навыки благодаря современным образовательным программам. ".repeat(20)
    },
    {
        title: "Будущее образования",
        content: "Виртуальная реальность и искусственный интеллект станут стандартом в онлайн-обучении. ".repeat(20)
    },
    {
        title: "Перспективы образования",
        content: "Онлайн-обучение будет развиваться, предоставляя доступ к знаниям для всех категорий граждан. ".repeat(20)
    }
];

let currentNewsIndex = 0;


function addNews(index) {
    if (index >= newsData.length) {
        loadingIndicator.textContent = "Все новости загружены";
        loadingIndicator.style.display = "block";
        return;
    }

    const news = newsData[index];
    const newsCard = document.createElement("div");
    newsCard.classList.add("news-card");

    const newsTitle = document.createElement("div");
    newsTitle.classList.add("news-title");
    newsTitle.textContent = news.title;

    const newsContent = document.createElement("div");
    newsContent.classList.add("news-content");
    newsContent.textContent = news.content;

    newsCard.appendChild(newsTitle);
    newsCard.appendChild(newsContent);

    newsContainer.appendChild(newsCard);
}


function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = newsContainer;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        if (currentNewsIndex < newsData.length) {
            loadingIndicator.style.display = "block";

            setTimeout(() => {
                addNews(currentNewsIndex);
                currentNewsIndex++;
                loadingIndicator.style.display = "none";
            }, 1000);
        } else {
            loadingIndicator.textContent = "Все новости загружены";
            loadingIndicator.style.display = "block";
        }
    }
}


addNews(currentNewsIndex);
currentNewsIndex++;

newsContainer.addEventListener("scroll", handleScroll);
