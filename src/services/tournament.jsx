
import { ApiCall, playerURL, tournamentURL } from "../ApiCall"


export const startNewTournament = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.post(tournamentURL + '/create-new', data)
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

export const getTournamentImageWithId = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.get(tournamentURL + `/get-image?_id=${data}`)
                .then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })
}

export const getGamemasterTournamentList = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.get(tournamentURL + '/gamemaster-tournaments')
                .then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })
}

export const getTournamentWithId = async (_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.get(tournamentURL + `/get-data?_id=${_id}`)
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

export const uploadTournamentImages = async ({ image, index, _id, tournamentId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.post(tournamentURL + '/upload-image', { image, index, _id, tournamentId })
                .then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })
}

export const createTournamentGamemaster = async (tournament) => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.post(tournamentURL + '/create-tournament', tournament)
                .then((res) => {
                    resolve(res)
                }).catch((err) => {
                    reject(err)
                })
        } catch (error) {
            reject(error)
        }
    })
}

export const getAllTournaments = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            ApiCall.get(tournamentURL + '/all-tournaments')
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
export const registerTeamInTournament = async (tournamentId, teamid) => {
    try {
        const response = await ApiCall.post(playerURL + '/req-reg-team-tournament', { teamid, tournamentId })
        return response.data
    } catch (error) {
        throw error
    }
}
export const getRegisteredTournaments = (teamId) => {
    return new Promise((resolve, reject) => {
        ApiCall.get(playerURL + `/get-tournaments-registered/${teamId}`)
            .then((res) => resolve(res))
            .catch((err) => reject(err))
    })
}

export const getFiliteredTournamentData = (search) => {
    return new Promise((resolve, reject) => {
        ApiCall.get(playerURL + `/sorted-tournament-data?${search ? "search="+ search : "" }`)
            
            .then((res) => resolve(res.data))
            .catch((err) => reject(err))
    })
}