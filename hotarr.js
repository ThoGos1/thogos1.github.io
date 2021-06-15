// Start of Hotel JavaScript file
var arr = Array.from(Array(10), () => new Array(10))

arr[0][0] = 'bruh';







// Prints out the 2D Array
for(var i = 0; i < arr.length; i++)
{
    for(var j = 0; j < arr[i].length; j++)
    {
        console.log(arr[i][j])
    }
}