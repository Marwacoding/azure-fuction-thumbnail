# Thumbnail_Azure 

Introduction to Azure Function and Azure Storage. The goal was to connect both of this services. We created create an azure function that resize a  picture using **Node.js** and sends mail with the original piecture and the thumbnail 

#### Languages, tools and libraries

- Node.js : image-thumbnail, nodemailer 
- Azure 


#### Process ⚙️

To create your own thubnail function you have to :  
- Create a **BlobTrigger** Function 
- In your function, go to integration an add an **output**
- Install your libraries on **KUDU**: `npm init -y`, `npm i image-thumbnail node-mailer` in your the root of the terminal
            
- Bind your function with your Blob : `context.bindings.<nameofyouroutputBlob>`

#### Next steps 🔜

Update my mail azure function to send images