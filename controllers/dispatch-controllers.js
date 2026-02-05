const Dispatch = require("../models/dispatch");

const getDispatch = async (req, res) => {
  // req.param.status = all / new / intransit / riched
  try {
    const { status } = req.params;
    let dispatches;
    if (status === "all") {
      dispatches = await Dispatch.find();
    } else if (
      status === "new" ||
      status === "intransit" ||
      status === "riched"
    ) {
      dispatches = await Dispatch.find({ status });
    } else {
      dispatches = await Dispatch.find({ status });
    }
    res.status(200).json({
      success: true,
      message: "Dispatch data fetched successfully",
      data: dispatches,
    });
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const addDispatch = async (req, res) => {
  try {
    const newDispatchData = req.body;
    console.log(newDispatchData);
    let newAddedDispatch = await Dispatch.create(newDispatchData);

    if (newAddedDispatch) {
      console.log(newAddedDispatch);
      res.status(201).json({
        success: true,
        massage: "Dispatch added successfully",
        data: newAddedDispatch,
      });
    } else {
      console.log("not found");
    }
    // res.send('massage');
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

const deleteDispatch = async (req, res) => {
  try {
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};

module.exports = { getDispatch, addDispatch, updateStatus, deleteDispatch };
