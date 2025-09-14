function stringChop(str, size) {
    let n=str.length
      let temp=Math.floor(n/size)
      let pin=0
      if(n%size==0){
          temp++
          pin=1
      }
      let ar=new Array(temp)
      let fill=0
      let tempstr=""
      for(let i=0;i<n;i++){
          tempstr+=str.charAt(i)
          if((i+1)%size==0){
              ar[fill]=tempstr
              fill++
              tempstr=""
          }
      }
      if(pin==1){
        ar[fill]=tempstr
      }
      return ar
  }
  

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
