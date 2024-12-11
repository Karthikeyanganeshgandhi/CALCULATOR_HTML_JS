function display(subject){
    answer.value += subject    
}

function allclear(){
    answer.value = ""
}
function equalto(){
    
    try{
        answer.value = eval(answer.value)
    }

    catch(error){
        console.log(error);
        answer.value = 'Syntax Error'
        

    }
    
}


