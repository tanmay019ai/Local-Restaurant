function data(){
var a=document.getElementById("n1").value;
var b=document.getElementById("n2").value;
var c=document.getElementById("n3").value;
var d=document.getElementById("n4").value;

if(a==""||b==""||c=="")
    {
        alert("All fields are mandatory");
        return false;
    }
    else if(b.length<10||b.length>10)
        {
         alert("Enter valid number");
         return false;
        }
    else
    {
        true;
    }

}
let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

document.querySelector('.prev').addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
});

document.querySelector('.next').addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    slides.style.transform = `translateX(${-index * 100}%)`;
});