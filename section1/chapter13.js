async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({name:"이정환",id:"winterload"})
        }, 1500);
    });
}

async function printData(){
    // getData().then((result)=>{
    //     console.log(result);
    // });
    const data = await getData();
    console.log(data);
}

printData();