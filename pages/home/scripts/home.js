import { getAllPosts } from "/requests.js";

let page = 0
let counter = 0
let numberPosts = 12

// async (entry) => entry.isIntersecting
const observer = new IntersectionObserver((entries) => {
    entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
            if (counter < numberPosts) {
                page++
                let { news, count } = await getAllPosts(page)
                numberPosts = count
                renderPostsCards(news)
                console.log(count);
                   
            }
        }
    })
})

const divObserved = document.querySelector('.observed')

observer.observe(divObserved)


function createPostLi (notice) {
    let liPostCard = document.createElement('li')
    liPostCard.className = `card ${notice.category}`
    liPostCard.id = `${notice.id}`
    liPostCard.insertAdjacentHTML('beforeend', `
        <img src="${notice.image}">
        <div>
            <h2>${notice.title}</h2>
            <p>${notice.description}</p>
            <a href="/pages/post/post.html" class="link-post">Acessar conteúdo</a>
        </div>
    `)
    
    
    return liPostCard
}


// const news = await (await getAllPosts(page)).news
const ulMainList = document.querySelector('.main-list')

export async function renderPostsCards (array) {


    
    array.forEach(( notice ) => {
        let li = createPostLi(notice)
        counter++

        ulMainList.appendChild(li)
    });


    let linksPosts = document.querySelectorAll('.link-post')
    linksPosts.forEach((link) => {
        link.addEventListener('click', (event) => {
            localStorage.setItem('postId', event.path[2].id)
        })
    })

}
renderPostsCards(await (await getAllPosts(page)).news)



function filterByCategory() {
    const ulFilterButtons = document.querySelector('.filter-buttons').children
    
    const categoriesList = [...ulFilterButtons]
    categoriesList.forEach((category) => {

        category.addEventListener('click', async () => {
            category.classList.toggle('emphasis')
            page = 0
            counter = 0
            let { news } = await getAllPosts(page)
            
            if (category.innerText == 'Todos') {
                ulMainList.innerHTML = ''
                renderPostsCards(news)
            } else {
                ulMainList.innerHTML = ''
                let filteredNews = news.filter((notice) => notice.category == category.innerText)
    
                renderPostsCards(filteredNews)
            }
        })
    })
}
filterByCategory()


