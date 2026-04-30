import recordRepositary from "../repositaries/recordRepositary.js";
import { InternalServerError } from "../errors/AppError.js";

async function createRecord(  body,userId){
    const { amount,type,category, description} = body;

    const obj ={
        amount,
        type,
        category,
        description,
        date:new Date(),
        userId
    }

    await recordRepositary.createRecord(obj)
}

async function getAllRecord(query, recordId) {
    const filters = {};

    if (query.type) {
        filters.type = query.type;
    }

    if (query.category) {
        filters.category = query.category;
    }

    if (query.startDate && query.endDate) {
        filters.date = {
            $gte: new Date(query.startDate),
            $lte: new Date(query.endDate)
        };
    }

    const data = await recordRepositary.getAllRecord(recordId, filters);

    if (!data) throw new InternalServerError();

    return data;
}

async function deleteRecord(recordId){
    await recordRepositary.deleteRecord(recordId);
}

async function updateRecord(data, recordId){
    await recordRepositary.updateRecord(recordId);
}

const recordService={
    createRecord:createRecord,
    getAllRecord:getAllRecord,
    deleteRecord:deleteRecord,
    updateRecord:updateRecord
}

export default recordService;