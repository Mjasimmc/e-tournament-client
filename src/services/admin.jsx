import { ApiCall, adminURL } from "../ApiCall"


export const adminLoginWithEmailAndPassword = async (userData) => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.post(adminURL + '/sign-in', userData)
                .then((res) => {
                    localStorage.setItem('admintoken', res.data.token)
                    resolve(res)
                }).catch((err) => {
                    console.log(err)
                    reject(err?.response?.data?.message)
                })
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}
export const getAllUsersData = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.get(adminURL + '/get-user-data')
                .then((res) => {
                    resolve(res)
                }).catch((err) => {
                    console.log(err)
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })
}

export const blockPlayer = async (playerId) =>{
    try {
        const result = await ApiCall.post(adminURL + '/block-player',{playerId})
        return result
    } catch (error) {
        throw error
    }
}

export const unBlockPlayer = async (playerId) =>{
    try {
        const result = await ApiCall.post(adminURL + '/unblock-player',{playerId})
        return result
    } catch (error) {
        throw error
    }
}

export const deletePlayer = async (playerId) =>{
    try {
        const result = await ApiCall.post(adminURL + '/delete-player',{playerId})
        return result
    } catch (error) {
        throw error
    }
}
export const revivePlayer = async (playerId) =>{
    try {
        const result = await ApiCall.post(adminURL + '/revive-player',{playerId})
        return result
    } catch (error) {
        throw error
    }
}

// gamemaster



export const blockGamemaster = async (userId) =>{
    try {
        const result = await ApiCall.post(adminURL + '/block-gamemaster',{userId})
        return result
    } catch (error) {
        throw error
    }
}

export const unBlockGamemaster = async (userId) =>{
    try {
        const result = await ApiCall.post(adminURL + '/unblock-gamemaster',{userId})
        return result
    } catch (error) {
        throw error
    }
}

export const deleteGamemaster = async (userId) =>{
    try {
        const result = await ApiCall.post(adminURL + '/delete-gamemaster',{userId})
        return result
    } catch (error) {
        throw error
    }
}
export const reviveGamemaster = async (userId) =>{
    try {
        const result = await ApiCall.post(adminURL + '/revive-gamemaster',{userId})
        return result
    } catch (error) {
        throw error
    }
}
