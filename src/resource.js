export function useResource() {
    return {
        posts: wrapPromise(fetchPosts())
    }
}
function wrapPromise(promise) {
    let status = 'pending'
    let result
    const suspender = promise
        .then(r => {
            result = r
            status = 'success'
        }, e => {
            result = e
            status = 'error'
        })
    return {
        read() {
            if ( status === 'pending') {
               throw suspender
            } else if (status === 'error') {
                throw result
            } else if ( status === 'success') {
                return result
            }
        }
    }
}

function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => res.json())
}
