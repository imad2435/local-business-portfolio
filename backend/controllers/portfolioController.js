import PortfolioItems  from "../models/portfolioItemsModel.js";
// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public

const getPortfolioItems = async (req, res)=>{
    try{
        const items = await PortfolioItems.find({}).sort({
            createdAt: -1
        });
        res.status(200).json(items)

    }catch(error){
        res.status(500).json({
            message: "Server Error", error: error.message
        })
    }
}

export {getPortfolioItems};
