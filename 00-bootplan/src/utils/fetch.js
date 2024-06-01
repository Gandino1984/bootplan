import { getToken } from "./local";
const API_URL = "https://api.qtrello.tbfsb.com/api";

const fetchData = async(route,method,inputData=null)=>{
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method:method,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post" || method === "put" || method === "patch"){
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

// Funciones para llamar a la Api

// User

const register = async(email,username,password,passwordRepeat)=>{
    const data = {email,username,password,passwordRepeat};
    const result = await fetchData("/register","post",data);
    console.log(result);
    return result;
}
const login = async(username,password)=>{
    const data = {username,password};
    const result = await fetchData("/login","post",data);
    console.log(result);
    return result;
}

// Projects

const getProjects = async()=>{
    const result = await fetchData("/projects","get");
    console.log(result);
    return result;
}

const getProjectbyID = async(projectID) =>{
    const result = await fetchData("/projects/"+projectID,"get");
    console.log(result);
    return result;
}

const createProject = async(name, description) =>{
    const data = {name,description};
    const result = await fetchData("/projects","post",data);
    console.log(result);
    return result;
}

const removeProject = async(projectID) =>{
    const result = await fetchData("/projects/"+projectID,"delete");
    console.log(result);
    return result;
}

const addUsertoProject= async(projectID, userID) =>{
    const result = await fetchData("/projects/"+projectID+"/user","post", userID);
    console.log(result);
    return result;
}

const removeUsertoProject= async(projectID, userID) =>{
    const result = await fetchData("/projects/"+projectID+"/user","delete", userID);
    console.log(result);
    return result;
}

// Tasks

const getTask = async()=>{
    const result = await fetchData("/tasks","get");
    console.log(result);
    return result;
}

const createTask = async(title,description,estimatedHours) =>{
    const data = {title,description,estimatedHours};
    const result = await fetchData("/tasks","post",data);
    console.log(result);
    return result;
}

const removeTask = async(tasksID) =>{
    const result = await fetchData("/tasks/"+tasksID,"delete");
    console.log(result);
    return result;
}

// Exportamos

export {
    register,
    login,
    getProjects,
    getProjectbyID,
    createProject,
    removeProject,
    addUsertoProject,
    removeUsertoProject,
    getTask,
    createTask,
    removeTask,

}