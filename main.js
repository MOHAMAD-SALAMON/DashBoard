let list = document.querySelectorAll('.navigation li');
function activelink(){
    list.forEach((item) =>
    item.classlist.remove('hovered'));
    this.classlist.add('hovered');
}
list.forEach((item) =>
item.addEventListener('mouseover', activelink));