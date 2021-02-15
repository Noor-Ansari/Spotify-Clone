export const initialState = {
    user : null,
    token : "BQAnuwSS3QVU2nK-9Lit7Yhv3PjJqw8utPItP078OzrocL1BWNivi3NTL-J3BGx5xZKpl-LvxK1nrFb7wAMAa381GmOs3UF4-H87YlNWOVC8UyI-lSynhu7eAAbvJ_TqXgtfl3vT7yXfUWLdX0fOC3hcZ8eAOEEBzQbUZr8aGOrQsYj6",
    playlists : [],
    playing : false,
    item : null,
    discover_weekly: null,
}

export const reducer = (state, action ) => {
    console.log(action)

    switch (action.type){
        case "SET_USER":
            return {
                ...state,
                user : action.user
            };
        case "SET_TOKEN":
            return {
                ...state,
                token : action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists : action.playlists
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly : action.discover_weekly
            };
        default:
            return state;
    }
};
