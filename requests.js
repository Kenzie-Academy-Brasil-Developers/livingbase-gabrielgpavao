const baseUrl = 'https://m2-api-living.herokuapp.com/news/'

export async function getAllPosts() {
    const requestGetAllPosts = await fetch (baseUrl, {
        method: 'GET'
    })
    const responseAllPosts = await requestGetAllPosts.json()
    // console.log(requestGetAllPosts, responseAllPosts)
    return responseAllPosts
}

export async function getPostById(id) {
    const requestGetPost = await fetch(baseUrl + '/' + id, {
        method: 'GET'
    })
    const responsePost = await requestGetPost.json()

    return responsePost
}