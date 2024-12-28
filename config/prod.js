/*export default {
    dbURL: process.env.MONGODB_URI || 'global link', //to change
    dbName : process.env.DB_NAME || 'SurveyDB' //to chnage
  }*/

    /*export default {
      dbURL: process.env.MONGODB_URI || 'mongodb+srv://yuvalyakir1:Yuval998@surveyapp.fcn9s.mongodb.net/?retryWrites=true&w=majority&appName=SurveyApp', 
      dbName : process.env.DB_NAME || 'mySurveyDB' 
    }*/
    

    export default {
      dbURL: process.env.MONGODB_URI || 'mongodb+srv://yuvalyakir1:Yuval998@surveyapp.fcn9s.mongodb.net/?retryWrites=true&w=majority&appName=SurveyApp',
      //dbName: process.env.DB_NAME || "mySurveyDB",
      dbName: 'mySurveyDB',
    };
    
    