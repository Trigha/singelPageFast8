import axios from 'axios'

export const fetchAllName = () => {
    return (dispatch) => {
        axios.get('https://randomuser.me/api/?results=28', {
        })
            .then(({ data }) => {
               
                dispatch(setName(data.data.name))
            })
            .catch(err => {
                console.log(err.response);
                
            })
    }
}

export const setName = (payload) => {
    return {
        type: "SET_NAME", payload
    }
}