//Function intersectionRetangules
/*
The retangules are in cm, the retangule is aling with x und y
  leftLine, RightLine corresponds just for the x line
  DownLine, upLine corresponds just for the x line
  */

  /*
  cartesiae problem
const retangule = {
    leftUppDott:{
        x:0,
        y:9,
    },
    leftDownDott:{
        start:9,
        end:6,
    },
    rightUppDott:{
        x:0,
        y:9,
    },
    rightDownDott:{
        start:9,
        end:6,
    },
}
*/
//soluction 1

const intersectionLine = (line1, line2) => {
    return createLine(line1).contains(line2)
}
const createLine=(line)=>{
   const lineDotts= []
    for(let i = line.start; i <= line.end; i++){
        lineDotts.push(i);
    }
    return lineDotts;
}

const verifyIntersection=(rec1,rec2)=>{
    return intersectionLine(rec1.left, rec2.right)
    ||  intersectionLine(rec1.right, rec2.left)
    ||  intersectionLine(rec1.top, rec2.bottom)
    ||  intersectionLine(rec1.bottom, rec2.top)
}


//soluction2

const retangule = {
    left:   10,
    top:    10,
    right:  30,
    bottom: 30
  };

  var rectB = {
    left:   20,
    top:    20,
    right:  50,
    bottom: 50
  };
  var rectC = {
    left:   70,
    top:    70,
    right:  90,
    bottom: 90
  };


const intersectRect = (retangule1, retangule2 ) => 
    !(retangule2.left > retangule1.right || 
    retangule2.right < retangule1.left || 
    retangule2.top > retangule1.bottom ||
    retangule2.bottom < retangule1.top);
  
  