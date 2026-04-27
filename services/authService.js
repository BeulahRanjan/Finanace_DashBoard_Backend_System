import authRepositary from "../repositaries/authRepositary.js";

async function login(body){
    const {email, password}=body;
    var data={
        email, password
    }

    const userCredentials= await authRepositary.loginUser(data);
    return userCredentials;
}

const aauthService={
    login:login
}

export default aauthService;