import mongoose  from "mongoose";


const portfolioItemSchema = new mongoose.Schema(
    {
     title:{
        type: String,
        required: [true, "please add a title"],
        trim: true
    },
    description:{
        type: String,
        required: [true, "please add a description"],
        
    },
    imageUrl:{
        type: String,
        required: [true , "please add an image URL"],
        

    },
    catagory:{
        type: String,
        required: [true, "please add a catogory"],
        trim: true

    }
    },{
        timestamps: true,
    }
)

const PortfolioItems = mongoose.model("PortfolioItems", portfolioItemSchema);

export default PortfolioItems;
