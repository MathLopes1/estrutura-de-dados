 var month = []

var firstWeeks = []
var lastWeeks = []

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25]
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8]

var avgTempWeek3 = [13, 45.7, 18, 7, 13.4, 21.5, 15]
var avgTempWeek4 = [51, 19, 23, 26.2, 9.5, 17.4, 31.8]

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]


for(var x = 0; x < month.length; x++) {
    for(var y = 0; y < month[x].length; y++) {
        for(var z = 0; z < month[x][y].length; z++) {
            console.log(month[x][y][z])
        }
    }
} 
/*-------------------------------------------------------------------*/
let names = []

let firstName = []
let lastName = []

const avgTempName1 = ['Matheus', 'Manuela', 'Elaine', 'Maria']
const avgTempName2 = ['Lopes', 'Silva', 'França', 'Porto']

const avgTempName3 = ['Marcos', 'Manu', 'Elane', 'Janne']
const avgTempName4 = ['Graças', 'Londres', 'Francisco', 'Lucia']

firstName = [avgTempName1, avgTempName2]
lastName = [avgTempName3, avgTempName4]

names = [firstName, lastName]

for(let x = 0; x < names.length; x++){
    for(let y = 0; y < names[x].length; y++){
        for(let z = 0; z < names[x][y].length; z++){
            console.log(names[x][y][z])
        }
    }
}