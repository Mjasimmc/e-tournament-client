import { ApiCall, playerURL } from "../ApiCall"

export const createNewTeamWithName = (name) => {
    return new Promise((resolve, reject) => {
        ApiCall.post(playerURL + '/create-team', { name: name })
            .then((res) => {
                resolve(res)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

export const getTeamInformation = (_id) => {
    return new Promise((resolve, reject) => {
        ApiCall.get(playerURL + `/get-team?teamId=${_id}`)
            .then((res) => {
                resolve(res)
            }
            )
            .catch((err => reject(err)))
    })
}

export const joinTeamWithJoinId = (joinId) => {
    return new Promise((resolve, reject) => {
        ApiCall.post(playerURL + "/join-team", { joinId })
            .then((res) => resolve(res)).catch((err => reject(err)))
    })
}
export const ExitTeamWithTeamId = (teamId) => {
    return new Promise((resolve, reject) => {
        ApiCall.post(playerURL + "/exit-team", { teamId })
            .then((res) => resolve(res)).catch((err => reject(err)))
    })
}