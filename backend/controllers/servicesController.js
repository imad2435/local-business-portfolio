const express = require("express");
const Service = require("../models/serviceSchema.js");

const addService = async (req, res) => {
    try{
        const { title, description} = req.body;
        const image = req.file ? req.file.filename : null;
        if(!title || !description || !image){
            return res.status(400).json({ message: "All fields are required" });
        }
        const newService = new Service({
            title,
            description,
            image,
        })
        const savedService = await newService.save();
        res.status(201).json(savedService);

    }catch(error){
        res.status(500).json({ message: "Server Error" });
    }
}

const getServices = async (req, res) => {
    try{
        const services = await Service.find().sort({ createdAt: -1 });
        res.status(200).json(services);
    }catch(err){
        res.status(500).json({ message: "Server Error" });
    }
}

const deleteService = async (req, res) => {
  try {
    // FIX: Typo in method name
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    // FIX: .remove() is deprecated
    await service.deleteOne();
    res.status(200).json({ message: "Service removed" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const updateService = async (req, res) => {
    try{
        const service = await Service.findById(req.params.id);
        if(!service){
            return res.status(404).json({ message: "Service not found" });
        }
    const updatedItem = await Service.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedItem);

    }catch(err){
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = { addService, getServices, deleteService, updateService };