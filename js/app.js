let btn1 = document.querySelector("#btn1")
let firstClick = document.querySelector('.box_overlay')


function buttHide(){
    firstClick.classList.add('hide');

}

btn1.addEventListener("click", buttHide);



let input = document.querySelector('#input_filed');

function gradeShow () {
    let inputValue = input.value;
    let convertValue = Number.parseInt(inputValue);
    let resulShow = document.querySelector('.resultText')

    input.style.marginBottom = "30px";

    if(convertValue<=100 && convertValue >=80){
        resulShow.innerHTML = 'You got A+'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(convertValue<80 && convertValue >=70){
        resulShow.innerHTML = 'You got A'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(convertValue<70 && convertValue >=60){
        resulShow.innerHTML = 'You got A-'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(convertValue<60 && convertValue >=50){
        resulShow.innerHTML = 'You got B'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(convertValue<50 && convertValue >=40){
        resulShow.innerHTML = 'You got C'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(convertValue<40 && convertValue >=33){
        resulShow.innerHTML = 'You got D'
        resulShow.style.color = 'rgb(0, 255, 208)'
    }
    else if(convertValue<33 && convertValue>=0){
        resulShow.innerHTML = 'You got F'
        resulShow.style.color = 'red'
    }
    else{
        resulShow.innerHTML = `<i class="bi bi-emoji-smile-upside-down"> </i><i class="bi bi-emoji-smile-upside-down"> </i><i class="bi bi-emoji-smile-upside-down"></i>`;
        
        resulShow.style.color = 'red'
    }

}

input.addEventListener("keyup", gradeShow);




// Odd Even Start


let btn2 = document.querySelector("#btn2")
let oddEvenClick = document.querySelector('.clickBox')

function oddEvenBox(){
    oddEvenClick.classList.add('hide');
    document.querySelector('.hide').style.transformOrigin = 'bottom';
}

btn2.addEventListener("click", oddEvenBox);



let oddinput = document.querySelector('#oddEven_input');

function oddevenResult (){
    let oeResultText = document.querySelector('.oeResultText')
    let oddinputValue = oddinput.value;
    let convertOddValue = Number.parseInt(oddinputValue);
    let remainder = (convertOddValue % 2);
    let oddinputlength = oddinputValue.length;

    oddinput.style.marginBottom = '30px';
    

    if(remainder == 0 && oddinputlength <=15 && oddinputlength > 0){
        oeResultText.innerHTML = 'It Is Even';
        oeResultText.style.color = 'rgb(0, 255, 208)';
    }
    else if(oddinputlength<=15 && oddinputlength > 0){
        oeResultText.innerHTML = "It's is Odd";
        oeResultText.style.color = 'white'
    }
    else{
        oeResultText.innerHTML = `<i class="bi bi-emoji-smile-upside-down"> </i><i class="bi bi-emoji-smile-upside-down"> </i><i class="bi bi-emoji-smile-upside-down"></i>`;
        oeResultText.style.color = 'red'
    }
    
}

oddinput.addEventListener("keyup", oddevenResult)
