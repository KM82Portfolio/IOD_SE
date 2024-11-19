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

function addArticle(){
  
  let articleTitle = document.querySelector('#add-article-title');
  articleTitle = articleTitle.value;
  
  let articleContent = document.querySelector('#add-article-title');
  articleContent = articleContent.value;

  let articleID=news.length;

  news.push({id:articleID,title:articleTitle,content:articleContent});
  console.log(news);
  populateCards();//update cards when user adds new article
  
}

function populateCards(){
  
  let newsContainer = document.querySelector('#news-list');
  newsContainer.innerHTML='';

  news.forEach((ns)=>{
    addNews(ns);
  })

}

populateCards();//on page 1st load