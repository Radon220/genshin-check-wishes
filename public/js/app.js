document.addEventListener('DOMContentLoaded', (event) => {


    const mainForm = document.getElementById('form-location')

    mainForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        const address = document.getElementById('addressInput').value

        if(address){
            //trim url from value
            fetch('/wish/beginner?address='+address).then((response)=>{
                response.json().then((data)=>{
                    
                    document.getElementById('beginBan').innerHTML = data[0]

                })

            })

        }
        else{
            document.getElementById('resTxt').innerHTML = "Please input your url"
        }

        
    })


})