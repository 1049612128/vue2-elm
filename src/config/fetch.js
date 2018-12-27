import {
    baseUrl
} from './env'

export default async(url='',data={},type='GET',method="fecth") => {
    type =type.toUpperCase();
    url =baseUrl+url;
    if(type=='GET'){
        let dataStr =""
        Object.keys(data).forEach(key=>{
            dataStr+=key+"="+data[key]+"&"
        })
        if(dataStr!==""){
            dataStr =dataStr.substr(0,dataStr.lastIndexOf('&'));
            url =url+'?'+dataStr;
        }
    }
    if(window.fecth&&method=="fecth"){
        let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
        }
        try{
            const response =await fetch(url,requestConfig)
            const responseJson =await response.json()
        }catch(err){
            throw new Error(err)
        }
    }else{
        return new Promise((resolve,reject)=>{
            let requestObj;
            if(window.XMLHttpRequest){
                requestObj =new XMLHttpRequest();
            }else{
                requrstObj =new ActiveXObject;
            }
            let sendData ='';
            if(type="POST"){
                sendData =JSON.stringify(data)
            }
            requestObj.open(type,url,true)
            requestObj.setRequestHeader("Content-type","application/x-www-form-urlencoded")
            requestObj.send(sendData);

            requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
        })
    }
}