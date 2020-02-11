const types = {
    SET_GITHUB: "SET_GITHUB",
    TOOGLE_DIALOG: "TOOGLE_DIALOG",
};

const actions = {
    setGithub: (organization, description, repository, author, authorImage, codeType, social) => {
        return {
            "type": types.SET_GITHUB,
            organization,
            description,
            repository,
            author,
            authorImage,
            codeType,
            social
        }
    },
    toogleDialog: (open) => {
        return {
            "type": types.TOOGLE_DIALOG,
            open
        }
    }
};

const initialState = {
    "organization":"BetacodeTech",
    "description":"HiPay SDK for Python. HiPay is a payment gateway platform. For more info about this see the website",
    "repository": "hipay-python-sdk",
    "author": "Marco Mendão",
    "authorImage": "https://trello-attachments.s3.amazonaws.com/5a0b139f45ffc6a03302373d/5a78660b9d750c86294ea7d1/d9efa6cab5eccd418dd488fa8641e598/eu1.jpg",
    "codeType":"python",
    "social": "@marco.mendao",
    "dialogOpen":false
};

function github(state = initialState, action) {
    switch (action.type) {
        case types.SET_GITHUB:
            const {organization, description, repository, author, authorImage, codeType, social} = action;
            return {...state, organization, description, repository, author, authorImage, codeType, social};
        case types.TOOGLE_DIALOG:
            return {...state, dialogOpen: action.open};
        default:
            return state
    }
}

export {github, actions}
