import getUser from "../service/auth.service.js"

async function restrictToUserOnly(req, res, next) {

    const userUid = req.cookie?.uid;
    if(!userUid) return res.redirect("signin");

    const user = getUser(userUid);

    if(!user) return res.redirect("signin");

    req.user = user;
    next();

    
}