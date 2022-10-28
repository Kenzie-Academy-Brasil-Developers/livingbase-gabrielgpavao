const baseUrl = 'https://m2-api-living.herokuapp.com/news'

export async function getAllPosts(currentPage) {
    const requestGetAllPosts = await fetch (`${baseUrl}?page=${currentPage}`, {
        method: 'GET'
    })
    const responseAllPosts = await requestGetAllPosts.json()
    
    return responseAllPosts
}


export async function getPostById(id) {
    const requestGetPost = await fetch(baseUrl + '/' + id, {
        method: 'GET'
    })
    const responsePost = await requestGetPost.json()

    return responsePost
}