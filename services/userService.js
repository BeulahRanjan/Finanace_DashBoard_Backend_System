import userRepositary from "../repositaries/userRepositary.js";

async function createUser(body){
     const {name, email, password, role}= body;

     const obj={
        name,email,password,role
     }

     await userRepositary.createUser(obj);


}

async function deleteUser(userId){
    await userRepositary.deleteUser(userId);
}

async function updateRole(userId, role){
    await userRepositary.updateRole(userId,role);
}

async function updateStatus(userId,status){
    await userRepositary.updateStatus(userId,status);
}

const userService={
    createUser:createUser,
    deleteUser:deleteUser,
    updateRole:updateRole,
    updateStatus:updateStatus
}
export default userService; 