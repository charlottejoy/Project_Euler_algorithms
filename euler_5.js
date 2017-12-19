/*5- smallest multiple of 1 through top*/

function smallestProduct(top){
j=top*(top-1);
var i=2;

   while(true){

       
       if(j%i===0){
           
           if(i<top){
                i++;
            }
            
            else if(i===top){
                 if(j%top===0){
                    console.log(j);
                    break;
                }
                else{
                   i=2;
                   //console.log(j);
                    j++;
                }
            }
       
          }
     else{
                j++;
                i=2;
            }
   }
}

smallestProduct(20);