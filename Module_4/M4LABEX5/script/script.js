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

function addNewArticle(){
  
  let newArticleTitle = document.querySelector('#title-textbox');
  let newArticleContent = document.querySelector('#content-textbox');

  news.push({id:news.length+1,title:newArticleTitle.value,content:newArticleContent.value,});

  populateNews();

}

function populateNews(){
  
  let newsContainer = document.querySelector('#news-list');
  newsContainer.innerHTML='';

  news.forEach((ns)=>{
    addNews(ns);
  })

}

populateNews();