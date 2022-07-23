document.querySelector('.dropdown').addEventListener('click',()=>{
    let e1=document.querySelector('.drop-content');
    if(e1.style.display=='block'){
        e1.style.display='none';
        document.getElementById("search-btn").style.display = "block"
    }
    else{
        e1.style.display='block';  
        document.getElementById("search-btn").style.display = "none"
    }

})
document.querySelector('#top-content').addEventListener('click',()=>{
    let e1=document.querySelector('.drop-content');
        e1.style.display='none';
})