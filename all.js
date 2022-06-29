// const data = require('./data')
// const function = require('./function')

// function {
//     console.log(data);
// }

// function();

// function sortArrays(function (a, b) {
//     if (a > b) {
//         return -1;
//     }
//     if (b > a) {
//         return 1;
//     }
//     return 0;
// });

function sortArrays(arr) {
    arr.sort(function (a, b) {
        if (a < b) {
            return -1;
        }
        if (b < a) {
            return 1;
        }
        return 0;
    });
};

module.exports = {
    sortArrays
}