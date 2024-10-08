const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type:String,
    required: true,
  },
  createdBy:{
    type: String,
  }
})

export blogSchema;