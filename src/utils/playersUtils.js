module.exports = {
    getLeaderingTeam(players) {
        let maxWikipediaScore = 0
        let maxSabidosScore = 0
    
        players.forEach(p => {
            if(p.team == 'wikipedia') {
                maxWikipediaScore += p.score
            } else {
                maxSabidosScore += p.score
            }
        })
    
        let leaderingTeam
    
        if(maxWikipediaScore > maxSabidosScore) {
            leaderingTeam = 'Wikipedia'
        } else if(maxWikipediaScore == maxSabidosScore) {
            leaderingTeam = 'Empate'
        } else {
            leaderingTeam = 'Sabidos'
        }

        return leaderingTeam
    }
}