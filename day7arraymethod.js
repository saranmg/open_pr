// 3 important topics in array 
//Map()
//reduce()
//filter()

//1. map()
//variable name.map((value, index, accumulator)=>)

    let mp = [10,20,30,40,50]
    let cng = mp.map((val,ind,acc)=>val+5) // we can use value, index , accumulator and do arithmetic operations with it
    console.log(cng);

       let mp = [10,20,30,40,50]
    let cng = mp.map((val,ind,acc)=>ind+5) // takes index value and add it with 5
    console.log(cng);
    
//2.filter()
// variable name.filter((value, index, accumulator)=>)

    let fil = [10,45,2387,239,83,90,1781,89,236,34579,334,133, 672,89,90,62,64,57,89] // uses comparision operator with it and provides the output
    let take = fil.filter((a,b,c)=>a<120)
    console.log(fil);
    
//3.reduce()
// array.reduce((accumulaor, currentvalue)=>)

    let red = [10,20,30,40]
    let add = red.reduce((x,y)=>x-y) // here x is accumulator (the whole value in array) and y is currentvalue (the value inside the array)
    console.log(add);
    