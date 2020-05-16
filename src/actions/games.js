export const loadGames = games => ({ type: 'LOAD_GAMES', games })

export const addGame = game => ({ type: 'ADD_GAME', game })

export const fetchGames = () => {
    return dispatch => {
        return fetch("http://localhost:3001/games")
        .then(response => response.json())
        .then(gamesJSON => {
            if (gamesJSON.error) {
                alert(gamesJSON.error)
            } else {
                dispatch(loadGames(gamesJSON))
            }
        })
    }
}

export const createGame = (game) => {
    return dispatch => {
        const body = {
            game
        }
        return fetch("http://localhost:3001/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(newGame => {
            if (newGame.error) {
                alert(newGame.error)
            } else {
                dispatch(addGame(newGame))
            }
            return newGame
        })
    }
}