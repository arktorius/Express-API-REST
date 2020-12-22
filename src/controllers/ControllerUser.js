import model from '../models/UserModel'
import { getPagination } from '../libs/getPagination'

export const allUsers = async (req, res) => {

    const { size, page, UserName } = req.query;
    const search = UserName ?
        { UserName: { $regex: new RegExp(UserName), $options: "i" } } : {};

    const { limit, offset } = getPagination(page, size);
    const allUsers = await model.paginate(search, { offset, limit });
    res.json(allUsers);
    console.log(req.query);
}

export const findOneUsers = async (req, res) => {
    try {
        const oneUser = await model.findById(req.params.id);
        res.json(oneUser);
    }
    catch {
        res.json('user is not found');
    }
}

export const createUser = async (req, res) => {
    console.log(req.body);
    const newUser = new model({
        UserName: req.body.UserName,
        UserFullName: req.body.UserFullName,
        UserPassword: req.body.UserPassword,
        UserIsAviable: req.body.UserIsAviable ? req.body.UserIsAviable : false

    });
    await newUser.save();
    console.log(newUser);
    res.json('ok');

}
export const delUser = async (req, res) => {

    const oneUser = await model.findById(req.params.id);
    const delOneUser = await model.findByIdAndDelete(req.params.id);


    res.json({
        "User ": oneUser.UserFullName,
        "Message": 'has been deletrle'

    });
}

export const updateUser = async (req, res) => {
    //const oldUser = await model.findById(req.params.id);
    try {
        const updateUser = await model.findByIdAndUpdate(req.params.id, req.body,
            { useFindAndModify: false });

        //const newdUser = await model.findById(req.params.id);

        res.status(200).json({
            "Message": 'was updated'

        });
    } catch {
        res.json(err);
    }
}
