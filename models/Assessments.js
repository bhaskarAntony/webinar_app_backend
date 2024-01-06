const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
    assessments:[
        {
            question:{
                type:String,
                required:true
            },
            options:[String],
            answer:{
                type:Number,
                required:true
            }
        }
    ],
    feedbackEmail:{
        type:String,
        required:true
    },
    
    recordings: {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        video:{
            type:String,
            required:true
        },
        pdfLink:{
            type:String,
            required:true
        }
    },
    topic:{
        type:String,
        required:true
    },
    marks:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
      }

})
module.exports = mongoose.model('Assessments', AssessmentSchema)