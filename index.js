//include your own styles
import '../style/index.scss';

window.onload=()=>{
    document.querySelector('#btn').addEventListener("click",()=>{
        document.querySelector('#the-excuse').innerHTML=generateExcuse();
    });
    console.log('Hello Rigo from the console!');
};

let generateExcuse=()=>{

    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let proindx = Math.floor(Math.random()*who.length);
    let subjindx = Math.floor(Math.random()*what.length);
    let actionindex = Math.floor(Math.random()*action.length);
    let whereindex = Math.floor(Math.random()* when.length);

    return who[proindx] + ' ' + what[subjindx] + ' ' + action[actionindex] + ' ' + when[whereindex] + ' ';
};
    


