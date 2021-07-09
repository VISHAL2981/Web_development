console.log("this is mod.js");
function average (arr){


    let sum = 0;
    arr.forEach(element => {

        sum+=element;
    });

    return sum/arr.length;
}
// module.exports =average


// module.exports = {


//     avg:average,
//     name:"vishal",
//     report:"github"
// }
module.exports.name = "vishal";