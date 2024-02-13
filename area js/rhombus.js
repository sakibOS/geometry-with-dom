function rhombusArea(){
    const d1=inputSet('rhombus-rec1');
    const d2=inputSet('rhombus-rec2');
    const area=0.5*d1*d2;
    setInnerText('rhombus-area',area);
}
function pentagonArea(){
    const p=inputSet('pentagon-perimeter');
    const b=inputSet('pentagon-apothem');
    const area=0.5*b*p;
    setInnerText('pentagon-area',area);

}
function inputSet(inputSet){
    const input=document.getElementById(inputSet);
    const inputText=input.value;
    const inputValue=parseFloat(inputText);
    return inputValue;
}
function setInnerText(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}