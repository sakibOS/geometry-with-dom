function parallelogramArea(){
    const parallelogramHeight=document.getElementById('parallelogram-height');
    const parallelogramHeightText=parallelogramHeight.value;
    const height=parseFloat(parallelogramHeightText);
    const parallelogramBase=document.getElementById('parallelogram-base');
    const parallelogramBaseText=parallelogramBase.value;
    const base=parseFloat(parallelogramBaseText);
    const Area=height*base;
    const parallelogramArea=document.getElementById('parallelogram-area');
    parallelogramArea.innerText=Area;
}