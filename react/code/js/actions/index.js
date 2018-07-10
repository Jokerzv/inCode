export const select = (car) =>{
  //alert ("now car is:"+car.name);
  return{
    type: "CAR_SELECTED",
    payload: car
  }
};
