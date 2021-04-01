window.addEventListener("load", () => {
  const newsItem = document.getElementById("newsItem");
  fetch(
    "https://gnews.io/api/v4/search?q=example&token=6b1fcc9985c0c5fa571eb5af78707282"
  )
    .then((response) => {
      return response.json();
    })
    .then((items) => {
      let articles = items.articles;
      let newsHtml = "";
      articles.map(function (element, index) {
        let news = `<div class="card">
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
                              element["description"]
                            }. <a href="${
          element["url"]
        }" target="_blank"> Read more here</a>
                            </div>
                        </div>
                    </div>`;
        newsHtml += news;
      });
      newsItem.innerHTML = newsHtml;
    });
});
