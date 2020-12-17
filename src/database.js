import mongoose from 'mongoose'


(async ()=>{
    const db1 = await mongoose.connect('mongodb://localhost/tesM1',{
        useNewUrlParser: true,
        useUnifiedTopology: true  
    }
    
    /*the connection is not sync, and mongoose need that objet. Search more information*/
    
    );
    console.log('Database is connected to : ',db1.connection.name);

    
})()
