import axios from 'axios'

const IP = `https://clonecarousel.herokuapp.com`
export const getUser = (username) => {
    return {
        type: 'GET_USER',
        payload: axios.get(`${IP}/users?username=${username}`)
    }
}

export const getSeller = (username) => {
    return {
        type: 'GET_SELLER',
        payload: axios.get(`${IP}/users?username=${username}`)
    }
}
export const updateSeller = (id,data) => {
    return {
        type: 'UPDATE_SELLER',
        payload: axios.patch(`${IP}/users/${id}`,data)
    }
}

export const postPhotoSeller = (data) => {
       
    let Data = new FormData();
    Data.append('image', {
       'name' : data.image.fileName,
       'uri' : data.image.uri,
       'type' : 'image/jpeg'
    });
    console.log(data)
    console.log(Data)
return {
    type: 'UPDATE_PHOTO_SELLER',
    payload: axios.post(`${IP}/users/${id}`,Data)
        
}
}