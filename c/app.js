const nodemailer = require('nodemailer');

// optiuni email message

const mailOptions = {
    from: 'tabitaoprea29@gmail.com',
    to: 'andreea.oprea29@e-uvt.ro',
    subject: 'ceva',
    text: 'text'
};

// transport config
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'tabitaoprea29@gmail.com',
        pass: 'Ploiesti22'
    }
});

//send email

transporter.sendMail(mailOptions, (error,info)=>{
    if(error){
        console.log(error);
    }
    else{console.log('Email send YAY: ')+info.response;}
});