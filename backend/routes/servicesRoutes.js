const express = require("express");
const router = express.Router();

const { addService, getServices, updateService, deleteService } = require("../controllers/servicesController.js");
const upload = require("../middleware/upload.js");

// Use upload.single("image") if you expect an image upload with the service
router.post("/addService", upload.single("image"), addService);
router.get("/getServices", getServices);
router.put("/updateService/:id", updateService);
router.delete("/deleteService/:id", deleteService);

module.exports = router;

