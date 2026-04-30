import recordService from "../services/recordService.js";

async function createRecord(req,res,next){
    try{
        await recordService.createRecord(req.body,req.user);
        res.status(201).json({
            success:true,
            message:"Record create successfully!"
        })
    }
    catch(error){
        next(error);
    }
}

async function getAllRecord(req,res,next){
    try{
        const data= await reccordService.getAllRecord(req.query,req.user);
        res.ststus(200).json({
            record:data,
            success:true,
            essage:"Record fetched succesfully!"
        })
    }
    catch(error){
        next(error);
    }
}

async function deleteRecord(req,res,next){
    try{
        await recordService.deleteRecord(recordService.params.id);
        res.status(200).json({
            success:true,
            message:"Record deleted successfully!"
        })
    }
    catch(error){
        next(error)
    }
}

async function updateRecord(req,res,next){
    try{
        await recordService.updateRecord(req.body,req.params.id);
        res.status(200).json({
            success:true,
            message:"Record updated successfully!"
        })
    }
    catch(error){
        next(error);
    }
}

const recordController={
    createRecord:createRecord,
    getAllRecord:getAllRecord,
    deleteRecord:deleteRecord,
    updateRecord:updateRecord
}

export default recordController;