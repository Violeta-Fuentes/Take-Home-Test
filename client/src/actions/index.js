export const SHOW_COMMITS = 'SHOW_COMMITS'

export function getCommits(){
    return function(dispatch){
        return fetch("http://localhost:3001/commits")
        .then(response => response.json())
        .then((response) => {
            dispatch({
                type: SHOW_COMMITS,
                payload: response
            })
        })
        .catch(err => console.log(err))
    }
}