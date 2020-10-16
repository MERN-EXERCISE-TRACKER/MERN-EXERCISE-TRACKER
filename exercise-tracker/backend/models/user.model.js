  import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const userSchema = new Schema({
    userName:{
      type: String,
      required:true,
      unique: true,
      trim: true,
      minlength:3
    }
  },{
    timestamps:true, 
  });


  //To use our schema definition, we need to convert our userSchema into a Model we can work with. To do so, we pass it into mongoose.model("User", userSchema):
  const User = mongoose.model("User", userSchema)

  module.exports= User