let movie = { 

  name: "La la land",
  
  thisInArrow:() => { 
  console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
  }, 
  
  thisInRegular(){ 
  console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
  } 
  
  };
  movie.thisInArrow(); // output : Movie name is
  movie.thisInRegular(); // output : Movie name is La la land

  const newArray = (nums) => {

    const newNums = nums.map(e=>{      
        if(e%2==0){
            return e*2
        }else if(e%2==1){
            return e*3
        }
    });
   return newNums 
}

console.log(newArray([1,2,3,4,5]));  // output: [3,4,9,8,15]