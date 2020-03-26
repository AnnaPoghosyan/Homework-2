let text = prompt("Enter text");                 
let tag = prompt("Enter the tag");  
function textInTag (text, tag) {
      return (`<${tag}>${text}</${tag}>`);
}
console.log(textInTag(text, tag));    //document.write-ov tagi pakagcery chen erevum