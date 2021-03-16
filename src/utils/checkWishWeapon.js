const { reject } = require('bluebird');
const e = require('express');
const request = require('postman-request');

const checkWishWeapon = async (authCode,callback)=>{
    var bannerArray = []
    var checking = true
    var page = 1 

    while(checking){
        if(page === 1){
            bannerArray = await checkWish(authCode,page)
            //console.log(bannerArray);
            page++
        }
        else{
            let tempArray = []
            tempArray =  await checkWish(authCode,page)
            if(tempArray.length != 0){
                bannerArray =  bannerArray.concat(tempArray)
                page++
            }
            else{
                checking = false;
                console.log('stopped w');
                callback(undefined,bannerArray)
            }
        }
    }

    //callback bannerArray
}

function checkWish(authCode,page){
    var bannerArray = []
    return new Promise(resolve=>{
        var url = 'https://hk4e-api-os.mihoyo.com/event/gacha_info/api/getGachaLog?im_out=true&sign_type=2&auth_appid=webview_gacha&authkey_ver=1&win_direction=portrait&lang=en&device_type=pc&ext=%7B%22loc%22%3A%7B%22x%22%3A2265.405029296875%2C%22y%22%3A216.85736083984376%2C%22z%22%3A-887.526123046875%7D%2C%22platform%22%3A%22WinST%22%7D&game_version=OSRELWin1.3.2_R2079798_S2088824_D2189670&authkey='+encodeURIComponent(authCode)+'&game_biz=hk4e_global&init_type=&gacha_id=d610857102f9256ba143ccf2e03b964c76a6ed&gacha_type=302&size=20&lang=en-us&page='+page   
        
        
        request({ url,json:true}, (error,response)=>{
            if (error){
                console.log(error);
            }
            else{
                //console.log(response.body);
                for (var i = 0; i < response.body.data.list.length; i++) {
                    
                    bannerArray.push(response.body.data.list[i].rank_type)
                    
                } 
            }
            //console.log("running");
            resolve(bannerArray)
        })

    })
    
}

module.exports = checkWishWeapon