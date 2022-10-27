import { getAllPosts } from "./requests.js";


function createPostLi (notice) {
    let liPostCard = document.createElement('li')
    liPostCard.className = `card ${notice.category}`
    liPostCard.id = `${notice.id}`
    liPostCard.insertAdjacentHTML('beforeend', `
        <img src="${notice.image}">
        <div>
            <h2>${notice.title}</h2>
            <p>${notice.description}</p>
            <a href="/pages/post/post.html">Acessar conteúdo</a>
        </div>
    `)
    return liPostCard
}

async function renderPostsCards () {
    const ulMainList = document.querySelector('.main-list')
    ulMainList.innerHTML = ''

    const news = await (await getAllPosts()).news
    // console.log(news)
    news.forEach(( notice ) => {
        let li = createPostLi(notice)
        ulMainList.appendChild(li)
    });

}
renderPostsCards()