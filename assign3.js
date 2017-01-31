let myArr= [1,2,3]

function add(x){
    return x+2
}
console.log('Array is')
console.log(myArr)
for(let i=0; i<myArr.length; i++)
{
    myArr[i]= add(myArr[i])
}
console.log('Modified array is:')

    console.log(myArr)

