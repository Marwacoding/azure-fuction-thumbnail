module.exports = async function (context, myBlob) {

const nodemailer = require("nodemailer");
    const dotenv = require("dotenv").co

    let pwd = process.env.MDP;
    let mailSender = process.env.MAIL;
    let recever = process.env.RECEVER;

    //context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");

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
        text: "Hello, here are yout picture",
        attachments: [{
            filename: 'background.jpg',
            //chemin d'acces car "local"
            path: images,           
            },
            {   
            filename: 'thumbnail_background.jpg',
            //contenu car il est créé dans la fonciton
            content: thumbnail,            
        }]
        }
    
        transporter.sendMail(mailOptions, function(info){
        
            context.log('Email sent: ' + info.response);
        })
}