
const fetchData = async(route,method,inputData=null)=>{
    const url = new URL(route);
    const fetchOptions = {
        method:method
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post"){
            fetchOptions.body = JSON.stringify(inputData);
        }
    }
    try {
        const result = await fetch(url.toString(),fetchOptions);
        const data  = await result.json();
        return data;
    } catch (error) {
        console.error(error);
        return ({error:error.message})
    }
}

const getEvents =async(_page=1,_elements=20) =>{
    const route ="";
    const data = await fetchData(route,"get",{_elements,_page});
    return data;
}

export {
    getEvents
}