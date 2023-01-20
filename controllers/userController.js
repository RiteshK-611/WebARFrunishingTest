
import User from '../models/userSchema.js'

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            //`${request.body.username} login successfull`
            return response.status(200).json({ u: request.body.username, pwd: request.body.password })
       

        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}


export const userSignup = async (request, response) => {

    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).messagejson({ message: 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ u: request.body.username, pwd: request.body.password });
        
    } catch (error) {
        console.log(error);
    }
    
}