import { ApiCall, gamemasterURL } from "../ApiCall"


export const authenticateGamemaster = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.get(gamemasterURL + '/auth-gamemaster')
                .then((res) => {
                    localStorage.setItem('gamemasterToken', res.data.user.token)
                    resolve(res.data.user)
                }).catch(err => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })

}
export const gamemasterLoginWithEmailAndPassword = async ({ email, password }) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ApiCall.post(gamemasterURL + '/login', { email, password })
                .then((res) => {
                    localStorage.setItem('gamemasterToken', res.data.user.token)
                    resolve(res)
                }).catch((err) => {
                    reject(err.response.data.message)
                })
        } catch (error) {
            reject(error)
        }
    })
}


export const createNewGamemaster = async ({
    name,
    phone,
    email,
    password
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ApiCall.post(gamemasterURL + '/register', {
                name,
                phone,
                email,
                password
            })
                .then((res) => {
                    localStorage.setItem('gamemasterToken', res.data.user.token)
                    resolve(res)
                }).catch((err) => {
                    reject(err.response.data.message)
                })
        } catch (error) {
            reject(error)
        }
    })
}

export const uploadProfileImageGamemaster = async ({ image, index }) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ApiCall.post(gamemasterURL + '/update-image', { image, index })
                .then((res) => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })
}


export const getProfileIImageGamemaster = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await ApiCall.get(gamemasterURL + '/get-profile-image')
                .then((res) => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })
}

export const gamemasterGoogleAuthLogin = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email } = data
            await ApiCall.post(gamemasterURL + '/google-login', { email })
                .then((res) => {
                    localStorage.setItem('gamemasterToken', res.data.user.token)
                    resolve(res)
                }).catch(err => {
                    reject(err.response.data.message)
                })
        } catch (error) {
            reject('Google Login Failed')
        }
    })
}
