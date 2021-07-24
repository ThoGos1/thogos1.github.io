// Start of Hotel JavaScript file
var arr = Array.from(Array(3), () => new Array(3))
var str = "";
var str1 = "";
var str2 = "";


for(var f = 0; f < arr.length; f++)
{
    for(var f2 = 0; f2 < arr[f].length; f2++)
    {
        arr[f][f2] = 'Empty'
    }
}


arr[0][0] = 'Thomas';
arr[1][1] = 'Mette';
arr[2][2] = 'Luggi';


for(var j = 0; j < arr.length; j++)
{
    str += arr[0][j];
    str += " ";
}

for(var k = 0; k < arr.length; k++)
{
    str1 += arr[1][k];
    str1 += " ";
}

for(var h = 0; h < arr.length; h++)
{
    str2 += arr[2][h];
    str2 += " ";
}






//Add a sun-bed distribution page for the hotel simulation project you are doing.

//Add a subpage, where you have a JavaScript script that has an array and then it takes a random number and picks a place from there.

//You can also make a 2D which can be table logged in the console, for visuals , but not the actually used array, which is just 1D.

//The array will then also be traversed through to see after any duplicates over and over until it finds an empty space.

//You can also make the input thing in html and add a remove all button, for a new day.









console.log("str value: " + str)
console.log('I am \nbruh')

// Prints out the arr as a table in the console
console.table(arr)
// End of JS File
