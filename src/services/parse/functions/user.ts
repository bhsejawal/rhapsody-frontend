import Parse, { User } from 'parse'
import { IProfile } from "@/props/IProfile"
import models from '../../models'

export const setUserInterests = async (interests:Parse.Object<Parse.Attributes>[]) => {
    try {
        if(!interests) return
        let currentUser = User.current();
        currentUser?.relation(models.user.params.interests).add(interests);
        currentUser?.save();
    } catch (error:any) {
        throw new Error(error.message);
    }
}
    
export const getCurrentUserAsJson = (): IProfile | null => {
    // Parse.initialize();
    let user = User.current();
    
    let userAsJson = user?.toJSON();

    return userAsJson ? {email:userAsJson?.email, objectId:userAsJson?.objectId} : null;
}