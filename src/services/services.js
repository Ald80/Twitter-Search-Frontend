import AlertModal from '../AlertModal/AlertModal';
import Alert from 'react-bootstrap/Alert'

const baseUrl = "http://localhost:8080";

// export const fetchTweets = async (query) => {
//     let response = null;
//     fetch(`${baseUrl}/twitter/get/${query}`)
//     .then((res) => res.json())
//     .then((res) => {
//         response = res;
//     })
//     .catch((err, res) => {
//         // alert("Error in search twitter");
//         console.log(err);
//         console.log(res);
//         return (
//         <AlertModal variant='primary' message={err} show={true}>
//         </AlertModal>
//         )
//         // return (<AlertMessage variant="danger" message={err} />);
//         // throw err;
//     }
//     );
//     return response;
// }

export const fetchTweets = async (query) => {
    let data = null;
    let response = await fetch(`${baseUrl}/twitter/get/${query}`).then((response) => {
        data = response.json();
        // if (!response.ok) {
            // return response.json() || null;
        // } else {
            // let responseJson = response.json();
            // const error = (responseJson && responseJson.message) || responseJson.status;
            // Promise.reject(error);
            // return error;
        // }
    }).catch(error => {
        throw new Error(error);
        // https://stackoverflow.com/questions/74150375/javascript-fetch-use-status-code-more-than-one-time
        // https://jasonwatmore.com/post/2021/10/09/fetch-error-handling-for-failed-http-responses-and-network-errors
    });
    return data;
}