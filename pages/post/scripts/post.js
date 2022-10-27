import { getPostById } from "/requests.js";

const logoImg = document.querySelectorAll('.logo')
logoImg.forEach((img) => {img.addEventListener('click', () => location.assign('/index.html'))})

async function renderPostPage() {
    const post = await getPostById(localStorage.getItem('postId'))
    
    const h1 = document.querySelector('h1')
    h1.innerText = post.title

    const pDescription = document.querySelector('.description')
    pDescription.innerText = post.description

    const noticeImg = document.querySelector('.notice-img')
    noticeImg.src = post.image
}

renderPostPage()