const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type:String,
    required: true,
  }
})

const User = mongoose.model('User', userSchema);

export userSchema;