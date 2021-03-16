document.addEventListener('DOMContentLoaded', (event) => {


    let mainForm = document.getElementById('form-location')

    mainForm.addEventListener('submit',(e)=>{
        e.preventDefault();

        let addressTemp = document.getElementById('addressInput').value
        let address1  = addressTemp.match('authkey=(.*)\&game')
        let address = address1[1].toString()

        //document.getElementById('mainContent').innerHTML = address
        if(address){
            //trim url from value

           fetch('/wish/beginner?address='+address).then((response)=>{
                response.json().then((data)=>{
                    let fourCount = 0
                    let fiveCount = 0
                    
                    for (let i = 0; i < data.length; i++) {


                        if(data[i]==4){
                            fourCount++
                        }

                        if(data[i]==5){
                            fiveCount++
                        }
                    }

                    
                    let fourPercent = (fourCount/data.length)*100
                    let fivePercent = (fiveCount/data.length)*100

                    document.getElementById('beginBan').prepend("Total Pulls for Beginner Banner: "+ data.length)
                    document.getElementById('beginFour').innerHTML = "4 Star: "+fourCount+" ("+ fourPercent +"%)"
                    document.getElementById('beginFive').innerHTML = "5 Star: "+fiveCount+" ("+ fivePercent +"%)"      

                })
            })

            fetch('/wish/char?address='+address).then((response)=>{
                response.json().then((data2)=>{
                    let fourCount = 0
                    let fiveCount = 0
                    let threeCount = 0
                    for (let i = 0; i < data2.length; i++) {
                        if (data2[i] == 3){
                            threeCount++
                        }

                        if(data2[i]==4){
                            fourCount++
                        }

                        if(data2[i]==5){
                            fiveCount++
                        }
                        

                        else{
                           // document.getElementById('charBan').prepend(data2[i]+ " / ");
                        }
                    }

                    
                    let fourPercent = (fourCount/data2.length)*100
                    let fivePercent = (fiveCount/data2.length)*100

                    document.getElementById('charBan').prepend("Total Pulls for Event Character Banner: "+data2.length)
                    document.getElementById('charFour').innerHTML = "4 Star: "+fourCount+" ("+ fourPercent +"%)"
                    document.getElementById('charFive').innerHTML = "5 Star: "+fiveCount+" ("+ fivePercent +"%)"      

                })
            })

            fetch('/wish/weapon?address='+address).then((response)=>{
                response.json().then((data3)=>{
                    let fourCount = 0
                    let fiveCount = 0
                    
                    for (let i = 0; i < data3.length; i++) {


                        if(data3[i]==4){
                            fourCount++
                        }

                        if(data3[i]==5){
                            fiveCount++
                        }
                    }

                    
                    let fourPercent = (fourCount/data3.length)*100
                    let fivePercent = (fiveCount/data3.length)*100

                    document.getElementById('wepBan').prepend("Total Pulls for Weapon Banner: "+data3.length)
                    document.getElementById('wepFour').innerHTML = "4 Star: "+fourCount+" ("+ fourPercent +"%)"
                    document.getElementById('wepFive').innerHTML = "5 Star: "+fiveCount+" ("+ fivePercent +"%)"      

                })
            })
            fetch('/wish/stand?address='+address).then((response)=>{
                response.json().then((data4)=>{
                    let fourCount = 0
                    let fiveCount = 0
                    
                    for (let i = 0; i < data4.length; i++) {


                        if(data4[i]==4){
                            fourCount++
                        }

                        if(data4[i]==5){
                            fiveCount++
                        }
                    }

                    
                    let fourPercent = (fourCount/data4.length)*100
                    let fivePercent = (fiveCount/data4.length)*100

                    document.getElementById('standBan').prepend("Total Pulls for Standard Banner: "+data4.length)
                    document.getElementById('standFour').innerHTML = "4 Star: "+fourCount+" ("+ fourPercent +"%)"
                    document.getElementById('standFive').innerHTML = "5 Star: "+fiveCount+" ("+ fivePercent +"%)"      

                })
            })

        }
        else{
            document.getElementById('resTxt').innerHTML = "Please input your url"
        }

        
    })


})