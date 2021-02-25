import express from "express";
import PaymentPlanModel from "../models/PaymentPlanModel.js";
import StudentModel from '../models/StudentModel.js';
import {role} from '../middlewares/variables.js'
const route = express.Router();



//get all
route.get('/', async(req, res) => {
    const data = await PaymentPlanModel.findOne({ dataID: "paymentPlan"});
    res.json(data);
})


//edit plans
route.put('/update/plans', async(req, res) => {
  PaymentPlanModel.findOneAndUpdate({
      dataID: "paymentPlan"
    }, {plans:req.body},{
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
           return res.json({success: false, error: "does not exists"})
        }
       return res.json({success: true, doc});
    })
    .catch(err => {
        res.json({success: false, error:err})
    })
  
  });


//edit services
route.put('/update/services/:id', async(req, res) => {
  PaymentPlanModel.findOneAndUpdate({
      "services._id": req.params.id
    }, {"$set": {"services.$": req.body}},{
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
           return res.json({success: false, error: "does not exists"})
        }
       return res.json({success: true, doc});
    })
    .catch(err => {
        res.json({success: false, error:err})
    })
  
  });

  //add service
  route.post('/add/service', async(req, res) => {
    let body = req.body
    console.log(body)
    PaymentPlanModel
    .findOneAndUpdate(
        {"dataID": "paymentPlan"}, 
        {$push: {"services": body}}
    )
    .then(doc => {
        res.json({success: true, doc});
      })
    .catch(err => {
        console.log(err)
        res.json({success: false, error:err})
    })
  });


//edit task
route.put('/update/:id', async(req, res) => {
    if(!req.params.id) {
      return res.status(400).send('Missing URL parameter: username')
    } 
  PaymentPlanModel.findOneAndUpdate({
      userID: req.params.id
    }, req.body, {
      new: true
    })
    .then(doc => {
        console.log(doc)
        if(!doc){
           return res.json({success: false, error: "does not exists"})
        }
       return res.json({success: true, doc});
    })
    .catch(err => {
        res.json({success: false, error:err})
    })
  
  });



  //delete service
route.put('/delete/services/:id', (req, res) => {
  PaymentPlanModel.findOneAndUpdate({
    dataID: "paymentPlan"
    }, {"$pull": {"services": {_id: req.params.id}}}, 
     { safe: true, multi:true }
    )
    .then(doc => {
        res.json(doc)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  })



export default route;