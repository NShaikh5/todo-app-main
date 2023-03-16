import mongoose from "mongoose";

const connection={};

async function connect(){
  if(connection.isConnected){
    return;
  }

  console.log(process.env.MONGODB_URL)
  const db = await mongoose.connect(process.env.MONGODB_URL)

  connection.isConnected= db.connections[0].readyState;
}

export default connect;
