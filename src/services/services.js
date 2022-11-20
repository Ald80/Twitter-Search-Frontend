const baseUrl = "http://localhost:8080";

export const fetchTweets = async (query) => {
    response = null;
    fetch(`${baseUrl}/twitter/get/${query}`)
    .then((res) => res.json())
    .then((res) => {
        response = res;
    })
    .catch((err) => {
        alert("Error in search twitter");
        throw err;
    })
    return response;
}