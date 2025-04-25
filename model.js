model = {
    app: {
        currentView: 'frontPage',
        selectedUserId: null,
        selectedFylke: null,
        mldFunk: false,
        recieverId: null,
        senderId: null,
         
    },


    inputs: {

        deleteName: null,

        search: null,

        newUser: {
            id: null,
            navn: null,
            fylke: null,
            login: null,
        },
        logIn: {
            navn: null,
        },

        message: null,

        theReadingMessage: null,

        edit: {
            id: null,
            name    : null,
            fylke: null,
        },
    },

    
    data: {
        fylkeLista: [],
        selectedLogin: [],

        fylker: [
            'Akershus', 'Oslo', 'Vestland', 
            'Trøndelag', 'Innlandet', 'Agder', 'Østfold', 
            'Møre og Romsdal', 'Buskerud', 'Vestfold', 
            'Nordland', 'Telemark', 'Troms', 'Finnmark'
        ],

        users: [
            {
                id: 1,
                name: "Chris",
                fylke: 'Vestfold',
                login: false,
                message: ["hei på deg", "hva skjer"],
                messageSender: ["Roar", "Kåre"],

            },
            {
                id: 2,
                name: "Kåre",
                fylke: 'Østfold',
                login: false,
                message: ["test"],
                messageSender: ["Chris"],

            },
            {
                id: 3,
                name: "Roar",
                fylke: 'Agder',
                login: false,
                message: ["test2"],
                messageSender: ["Chris"],

            },

        ],

    },

}