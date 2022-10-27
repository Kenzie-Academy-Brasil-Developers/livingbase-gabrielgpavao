import { getAllPosts } from "../../../requests.js"
import { renderPostsCards } from "../../home/scripts/home.js"

const allNews = (await getAllPosts()).news

function filterByCategory() {
    const ulFilterButtons = document.querySelector('.filter-buttons').children
    
    const categoriesList = [...ulFilterButtons]
    categoriesList.forEach((category) => {

        category.addEventListener('click', async () => {
            category.classList.toggle('emphasis')
            
            if (category.innerText == 'Todos') {
                renderPostsCards(allNews)
            } else {
                let filteredNews = (await getAllPosts()).news.filter((notice) => notice.category == category.innerText)
    
                renderPostsCards(filteredNews)
            }
        })
    })
}
filterByCategory()