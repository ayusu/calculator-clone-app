let string = ""

let btns = document.querySelectorAll(".btn")
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "D"){
            let afterDelete = string.slice(0, -1)          
            document.querySelector('input').value = afterDelete;
            string = afterDelete
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })

})



// function deletef(string){
// let deletebutn = document.querySelector(".clear")
// deletebutn.addEventListener('click', () =>{
//     console.log(string.slice(0, -1))
// })
// }
