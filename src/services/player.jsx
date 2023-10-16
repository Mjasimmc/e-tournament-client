import { ApiCall, playerURL } from "../ApiCall"

export const authenticatePlayer = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.get(playerURL + '/auth-player')
                .then((res) => {
                    localStorage.setItem('playerToken', res.data.user.token)
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })

}

export const PlayerLoginWithEmailAndPassword = async ({ email, password }) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ApiCall.post(playerURL + '/login', { email, password })
                .then((res) => {
                    localStorage.setItem('playerToken', res.data.user.token)
                    resolve(res)
                }).catch((err) => {
                    reject(err.response.data.message)
                })
        } catch (error) {
            reject(error)
        }
    })
}

export const createNewPlayer = async ({
    name,
    phone,
    email,
    password
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ApiCall.post(playerURL + '/register', {
                name,
                phone,
                email,
                password
            })
                .then((res) => {
                    localStorage.setItem('playerToken', res.data.user.token)
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })
}

export const uploadProfileImagePlayer = async ({ image, index }) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ApiCall.post(playerURL + '/update-image', { image, index })
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

export const getProfileIImagePlayer = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await ApiCall.get(playerURL + '/get-profile-image')
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


export const playerGoogleAuthLogin = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { email } = data
            // if (!emailVerified){
            //     reject('Google Login Failed')
            // }
            await ApiCall.post(playerURL + '/google', { email })
                .then((res) => {
                    localStorage.setItem('playerToken', res.data.user.token)
                    resolve(res)
                }).catch(err => {
                    reject(err.response.data.message)
                })
        } catch (error) {
            reject('Google Login Failed')
        }
    })
}

export const addGamesToList = (game) => {
    return new Promise(async (resolve, reject) => {
        ApiCall.post(playerURL + "/add-game-to-list", { game: game })
            .then((res) => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
    })
}
export const removeGamesToList = (game) => {
    return new Promise(async (resolve, reject) => {
        ApiCall.post(playerURL + "/remove-game-to-list", { game: game })
            .then((res) => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
    })
}
export const updatePlayerData = ({ name, email }) => {
    return new Promise(async (resolve, reject) => {
        ApiCall.post(playerURL + "/update-player", { name, email })
            .then((res) => {
                resolve(res.data.user)
            }).catch(err => {
                reject(err)
            })
    })
}

export const searchPlayer = (data) => {
    return new Promise(async (resolve, reject) => {
        ApiCall.get(playerURL + "/search-players" + `?search=${data}`)
            .then((res) => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
    })
}
export const getChatOfPlayers = () => {
    return new Promise(async (resolve, reject) => {
        ApiCall.get(playerURL + "/allchats-player")
            .then((res) => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
    })
}
export const createNewChatPlayers = (data) => {
    return new Promise(async (resolve, reject) => {
        ApiCall.post(playerURL + "/new-chat", { friend: data })
            .then((res) => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
    })
}
export const getMessagesOfChats = (data) => {
    return new Promise(async (resolve, reject) => {
        ApiCall.get(playerURL + "/get-all-player-messages?chatId=" + data)
            .then((res) => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
    })
}

export const sendNewMessage = async (message, chatId) => {
    try {
        const sendMessage = await ApiCall.post(playerURL + "/send-message-to-player", {
            chatId
            , message
        })
        // console.log(sendMessage)
        return sendMessage
    } catch (error) {
        console.error('Error finding chats:');
        throw error;
    }
}

export const getAllTournamentsForPlayer = async ()=>{
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.get(playerURL + '/all-tournaments')
                .then((res) => {
                    resolve(res.data)
                }).catch((err) => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })
}