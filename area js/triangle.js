function triangleArea(){
    const triangleBase=document.getElementById('triangle-base');
    const triangleBaseText=triangleBase.value;
    const base=parseFloat(triangleBaseText);
    const triangleHeight=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeight.value;
    const height=parseFloat(triangleHeightText);
    const Area=0.5*base*height;
    const triangleArea=document.getElementById('triangle-area');
    triangleArea.innerText=Area;
}