//Initialize the news api parameters
let apiKey = `8741c809c4a041518013fc7d349459df`;

// Grab the news container
const newsItem = document.getElementById("newsItem");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,
  true
);

//what to do when resource is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach(function (element, index) {
      news = `<div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button
                                    class="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapse${index}"
                                    aria-expanded="true"
                                    aria-controls="collapse${index}"
                                >
                                   <b>News ${index + 1}:</b> ${element["title"]}
                                </button>
                            </h2>
                        </div>

                        <div
                            id="collapse${index}"
                            class="collapse"
                            aria-labelledby="heading${index}"
                            data-parent="#newsItem"
                        >
                            <div class="card-body">${
                              element["content"]
                            }. <a href="${
        element["url"]
      }" target="_blank"> Read more here</a>
                            </div>
                        </div>
                    </div>`;
      newsHtml += news;
    });
    newsItem.innerHTML = newsHtml;
  } else {
  }
};
xhr.send();
