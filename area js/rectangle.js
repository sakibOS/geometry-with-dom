function rectangleArea(){
    const rectangleHeight=document.getElementById('rectangle-height');
    const rectangleHeightText=rectangleHeight.value;
    const height=parseFloat(rectangleHeightText);
    const rectangleWidth=document.getElementById('rectangle-width');
    const rectangleWidthText=rectangleWidth.value;
    const width=parseFloat(rectangleWidthText);
    const Area=height*width;
    const rectangleArea=document.getElementById('rectangle-area');
    rectangleArea.innerText=Area;
}