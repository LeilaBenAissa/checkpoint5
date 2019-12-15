
function onBold(){

    var textBoldStyle = document.getElementById("form123");

    if (textBoldStyle.style.fontWeight!="bold") {
       return textBoldStyle.style.fontWeight="bold"
    }
    else  return textBoldStyle.style.fontWeight="normal"
}
function onItalic() {
    var textItalicStyle = document.getElementById("form123") ;

    if (textItalicStyle.style.fontStyle!="italic") {
    return textItalicStyle.style.fontStyle="italic"
}
else return textItalicStyle.style.fontStyle="normal"
}
function underline() {
    var textunderlinestyle = document.getElementById("form123");
    if (textunderlinestyle.style.textDecoration=="underline")
    {
        return textunderlinestyle.style.textDecoration="none"
    }
else return textunderlinestyle.style.textDecoration="underline"
   
}
document.getElementById("size").addEventListener("change", function(){
    form123.style.fontSize= this.value;
})

document.getElementById("Font").addEventListener("change", function(){
    form123.style.fontFamily= this.value;
})
$(".img-course").mouseenter(function(){
    $(this).css("opacity", "0.6");
    $(this).children(".viewmore").show();
})
$(".img-course").mouseleave(function(){
    $(this).css("opacity", defaultStatus);
    $(this).children(".viewmore").hide();
})
