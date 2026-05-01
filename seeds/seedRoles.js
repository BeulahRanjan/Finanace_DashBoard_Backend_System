import dotenv from "dotenv";
dotenv.config();
import Role from "../models/roleModel.js"
import { PERMISSIONS } from "../utils/permissions.js";
import { ADMIN, VIEWER, ANALYST} from "../utils/constants.js";
import { connectDB } from "../configs/db.js";

const seedRoles = async() =>{
     await connectDB();
     console.log("DB Connected");

     await Role.updateOne(
        {name: ADMIN },
        {$set: { permissions: Object.values(PERMISSIONS)}},
        { upsert: true }
     );

     await Role.updateOne(
        {name: VIEWER},
       {$set:{ permissions : [PERMISSIONS.VIEW_SUMMARY]}},
        {upsert:true}
     );

     await Role.updateOne(
        {name: ANALYST},
        {$set:{permissions:[PERMISSIONS.VIEW_RECORDS,PERMISSIONS.FILTER_RECORDS]}},
        {upsert:true }
     );
};

seedRoles();

export default seedRoles;