// this data is used when not connected to server

export default {

    activeRow: {
        id: 1,
        fileName: "111.txt",
        longestWord: "aaaaa",
        shortestWord: "bbb",
        averageLineLength: 15,
        averageWordLength: 4
    },

    fileStats: [
        {
            id: 1,
            fileName: "111.txt",
            longestWord: "aaaaa",
            shortestWord: "bbb",
            averageLineLength: 15,
            averageWordLength: 4
        },
        {
            id: 2,
            fileName: "222.txt",
            longestWord: "ccccccccc",
            shortestWord: "d",
            averageLineLength: 26,
            averageWordLength: 7
        }
    ],

    lineStats: [
        {
            id: 1,
            fileId: 1,
            longestWord: "wwwwwwwwww",
            shortestWord: "f",
            lineLength: 23,
            averageWordLength: 1
        },
        {
            id: 2,
            fileId: 1,
            longestWord: "dfgfdfgdaaaaa",
            shortestWord: "bb",
            lineLength: 152,
            averageWordLength: 34
        },
        {
            id: 3,
            fileId: 2,
            longestWord: "aaaasddsdsdaa",
            shortestWord: "bdsdbb",
            lineLength: 16,
            averageWordLength: 5
        }
    ],

};

