  import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const exerciseSchema = new Schema({
    username:{type: String, required:true},
    description: {type:String, required:true},
    duration:{type: Number,required:true},
    date:{type: Date, required:true}
  },{
    timestamps:true, 
  });


  //To use our schema definition, we need to convert our exerciseSchema into a Model we can work with. To do so, we pass it into mongoose.model("exercise", exerciseSchema):
  const Exercise = mongoose.model("Exercise", exerciseSchema)

  module.exports= Exercise