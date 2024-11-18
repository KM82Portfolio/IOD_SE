let news = [
    { id: 1, title: 'Election Results', 
      content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success', 
      content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning', 
      content: "Residents should prepare..." }
];

function addNews(news){
    const newsTemplate = document.querySelector('#card-template').content.cloneNode(true);
    newsTemplate.querySelector('.card-title').innerText = news.title;
    newsTemplate.querySelector('.card-text').innerText= news.content;
    document.querySelector('#news-list').appendChild(newsTemplate);
}

news.forEach((ns)=>{
    addNews(ns);
})