module.exports = async function (context, myBlob) {
    const thumbnail = require("image-thumbnail")
    const nodemailer = require("nodemailer");
    const dotenv = require("dotenv").co

    let pwd = process.env.MDP;
    let mailSender = process.env.MAIL;
    let recever = process.env.RECEVER;

    //context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");

    const my_images = await thumbnail(myBlob);
    context.log('my images', my_images);

    context.bindings.outputBlob = my_images
    context.log("image de sortie", context.bindings.outputBlob)
    
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mailSender,
        pass: pwd
    }
    });

    const mailOptions = {
    from: mailSender,
    to: recever,
    subject: 'Here are your pictures',
    text: "Hello, here are yout picture"
    //text: `That was easy! ${context.bindingData.blobTrigger} & 
    //${context.bindings.outputBlob}`
    }

    transporter.sendMail(mailOptions, function(info){
    
        context.log('Email sent: ' + info.response);
    })


};