import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'


const UserForm = new Schema({

    UserName: {
        type: String,
        trim: true
    },
    UserFullName: {
        type: String,
        trim: true
    },
    UserPassword: {
        type: String,
        trim: true
    },
    UserIsAviable: {
        type: Boolean,
        trim: true
    }


}, {
    versionKey: false,
    timestamps: true
});
UserForm.plugin(mongoosePaginate);
export default model('UserForm', UserForm);

