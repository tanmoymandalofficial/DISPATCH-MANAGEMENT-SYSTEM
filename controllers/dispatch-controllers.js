const { set } = require("mongoose");
const Dispatch = require("../models/dispatch");

const getDispatch = async (req, res) => {
  const userInfo = req.userInfo;

  // req.param.status = all / new / intransit / riched
  try {
    const { status = "all" } = req.params;
    let dispatches; 
    if (status === "all") {
      dispatches = await Dispatch.find();
    } else {
      dispatches = await Dispatch.find({ status });
      // console.log(dispatches);
    }

    if (dispatches.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Dispatch data not found", userInfo });
    }

    res.status(200).json({
      success: true,
      message: "Dispatch data fetched successfully",
      data: dispatches,
      userInfo,
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
      // console.log(newAddedDispatch);
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

// delete the dispatch after 1 day when this controller is called and also cancel the set timeout
const deactiveDispatch = async (req, res) => {
  let timeoutId;
  try {
    const { id } = req.params;
    timeoutId = setTimeout(async () => {
      await Dispatch.updateOne({ _id: id }, { $set: { isActive: "deactive" } });
    }, 86400000);

    res.status(200).json({
      success: true,
      message: "Dispatch deactive successfully",
      timeoutId,
    });

  } catch (e) {
    console.log(e);
    res.send(e);
  }
};


module.exports = { getDispatch, addDispatch, updateStatus, deleteDispatch };
