import userRepositary from "../repositaries/userRepositary.js";

async function createUser(body){
     const {name, email, password, role}= body;

     const obj={
        name,email,password,role
     }

     await userRepositary.createUser(obj);


}

async function deleteUser(userId){
    await userRedpositary.deleteUser(userId);
}

const userService={
    createUser:createUser,
    deleteUser:deleteUser
}
export default userService;