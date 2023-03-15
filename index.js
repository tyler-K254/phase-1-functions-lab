// function distanceFromHqInBlocks(distance){

    
    
//     return(distance-42);
    
    
// }

function distanceFromHqInBlocks(distance){

    if (distance<42){
        return(42-distance);
      }
      else {
    
      return(distance-42);
    }
    }
    

    function  distanceFromHqInFeet(distance2){

        return distanceFromHqInBlocks(distance2)*264

 
        }


function distanceTravelledInFeet(par1, par2){

    if (par2>par1){
        return((par2-par1)*264);
      }
      else {
    
      return((par1-par2)*264);
    }
    }

    // function  calculatesFarePrice(start, destination){
    //     let distance3 = distanceTravelledInFeet(start,destination);

    // }



    function calculatesFarePrice(start,destination){
        let distance = distanceTravelledInFeet(start,destination);
        if (distance<= 400){
          return 0;
        }
        if (distance>=400 && distance<=2000){
          return (distance-400)* 0.02;
        }
        else if(distance>=2000&& distance<=2500){
          return 25;
        }
        else if (distance > 2500){
          return "cannot travel that far";
        }
      }

    
    

