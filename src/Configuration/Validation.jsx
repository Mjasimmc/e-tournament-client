
export const validateData = (data, type) => {

    switch (type) {
        case 'name':
            const namePattern = /^[a-zA-Z]{3,}$/
            return namePattern.test(data)
        case 'email':
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailPattern.test(data)
        case 'phone':
            const numberPattern = /^[2-9][0-9]{9}$/
            return numberPattern.test(data)
        case 'password':
            return !!data && data.length > 2
        default:
            break;
    }

}
export const validateTournamentData = (tournament) => {
    const {
        name, game, deadline, minplayers, teams_no, images,description,rules
    } = tournament

    if (!name) {
        return 'Name not found'
    }
    if (!game) {
        return 'Game Name not found'
    }
    if (!deadline) {
        return 'last date not found'
    }
    if (!minplayers) {
        return 'min players not found'
    }
    if (!teams_no) {
        return 'lteams_no not found'
    }
    if (!images.length) {
        return 'images not found'
    }
    if(!description){
        return 'description not found'
    }
    if(!rules.length){
        return 'rules not found'
    }
    if(!description){
        return 'description not found'
    }
    return false
}