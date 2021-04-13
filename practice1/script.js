
document.addEventListener('DOMContentLoaded',function(){

    const title=document.querySelector('#title');
    const input=document.querySelector('input');
    const button=document.querySelector('button');
    const content=document.querySelector('#content');
    
    const handleChange=(event)=>{
        console.log(event);
        button.textContent='Changed';
        const text=input.value;
        const message='<h2> Hellow  ' + `${text}` + '!<h2>';
        content.innerHTML=message;
        if(text==="student"){
            let title=document.querySelector('title').textContent;
            console.log(title);
            title  += ' & Love it';
            document.querySelector('#title').textContent=title;
            
        }
    }
    button.addEventListener('click',handleChange);
})


