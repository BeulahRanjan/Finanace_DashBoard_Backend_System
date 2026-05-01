import dashboardService from "../services/dashboardService.js";

async function getSummary(req,res,next){
    try{
        const data = await dashboaardService.getSummary();

        return res.status(200).json({
            success:true,
            data
        });
    }
    catch(error){
        next(error);
    }
}

export default getSummary;