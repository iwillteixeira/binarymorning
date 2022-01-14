
const binarySearch = (arr, n) =>{
    let low = 0
    let mid = 0
    let high = arr.length -1
    sortArray = arr.sort((a,b)=> {
        return b-a
    })
    console.log(sortArray)
    while(low<= high){
        mid = Math.floor(high + low)/2
        if(sortArray[low] === sortArray[mid]){
            return low
        }
        else if(sortArray[mid] < n){
            low = sortArray[mid] + 1
        }
        else{
            high = sortArray[mid] -1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9],7))
