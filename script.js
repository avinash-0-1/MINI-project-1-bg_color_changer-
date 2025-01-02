const buttons = document.querySelectorAll('.button')
    const body = document.querySelector('body')
    
    buttons.forEach(function (bu) {
        bu.addEventListener('click',function(e){
            if(e.target.id === 'brown'){
                body.style.backgroundColor = 'brown';
            }
        })
        bu.addEventListener('click',function(e){
            if(e.target.id === 'white'){
                body.style.backgroundColor = 'white';
            }
        })
        bu.addEventListener('click',function(e){
            if(e.target.id === 'red'){
                body.style.backgroundColor = 'red';
            }
        })
        bu.addEventListener('click',function(e){
            if(e.target.id === 'grey'){
                body.style.backgroundColor = 'grey';
            }
        })
    })
