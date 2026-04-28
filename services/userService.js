import userRepositary from "../repositaries/userRepositary.js";

async function createUser(body){
     const {name, email, password, role}= body;

     const obj={
        name,email,password,role
     }

     await userRepositary.createUser(obj);


}

const userService={
    createUser:createUser
}
export default userService;