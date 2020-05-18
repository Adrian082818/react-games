export default (state=[], action) => {
    switch (action.type) {
        case "LOAD_GAMES":
            return action.games
            case "ADD_GAME":
                return state.concat(action.game)
                default:
                    return state;
    }

}