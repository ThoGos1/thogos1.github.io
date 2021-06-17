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
















console.log("str value: " + str)
console.log('I am \nbruh')

// Prints out the arr as a table in the console
console.table(arr)
// End of JS File