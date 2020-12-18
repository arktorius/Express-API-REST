import {Schema, model} from 'mongoose'


const UserForm = new Schema({

    UserName:{
        type:String,
        trim:true
    },
    UserFullName:{
        type:String,
        trim:true
    },
    UserPassword:{
        type:String,
        trim:true
    },
    UserIsAviable:{
        type:Boolean,
        trim:true
    }


},{
    versionKey: false,
    timestamps:true
});

export default model('UserForm', UserForm);

