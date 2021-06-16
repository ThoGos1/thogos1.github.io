// Start of Hotel JavaScript file
var arr = Array.from(Array(3), () => new Array(3))

for(var f = 0; f < arr.length; f++)
{
    for(var f2 = 0; f2 < arr[f].length; f2++)
    {
        arr[f][f2] = 'Empty'
    }
}

arr[0][0] = 'Thomas';







// Prints out the 2D Array
for(var i = 0; i < arr.length; i++)
{
    for(var j = 0; j < arr[i].length; j++)
    {
        console.log(arr[i][j]);
    }
}

console.table(arr)





