const tomb = [

[1, 3, 4, 5, 11],
[2, 7, 8, 12, 18],
[6, 10, 13, 20, 21],
[9, 14, 19, 22, 26],
[15, 16, 24, 25, 29],
[17, 23, 27, 28, 30],
]


function pozicio(tomb, value){


    var y = 0
    var x = tomb[0].length -1

    

    while(x >= 0 && y>= 0){

        if(tomb[y][x] == value){

            return {x, y};
        }

        else if(tomb[y][x] > value){
            x -= 1
        }

        else(
            y += 1
        )
    }
}


var {x, y} = pozicio(tomb, 25)
console.log(tomb[y][x], y, x)

