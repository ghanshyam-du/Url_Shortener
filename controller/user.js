import User from "../model/user.js"
export async function handleUserSignup (req, res){
    const {name, email, password} = req.body;
    console.log("Signup data:", req.body);


    await User.create({
        name,
        email,
        password,
    })

    // return res.status(200).json({message:"You have signedup successfully"});

 return res.redirect("signin")
}

export  async function handleUserSignin(req, res) {
    const {email, password} = req.body;

    const user = await User.findOne({email, password});
    console.log("Signin data:", user);

    if(!user) return res.render("signin",{
        error: "Invalid User name and password!"
    })

    return res.redirect("/");

    
}
