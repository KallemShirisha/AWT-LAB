const PI=3.14
function circleArea(rad){
    return PI*rad*rad;
}
function squareArea(side){
    return side*side;
}
function rectArea (l,b){
    return (l*b);
}
export default squareArea
export {circleArea,rectArea};