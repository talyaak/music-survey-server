/*export default  {
    dbURL: 'mongodb://127.0.0.1:27017',
    //dbURL: 'mongodb+srv://yuvalyakir1:Yuval@998@surveyapp.fcn9s.mongodb.net/surveyapp?retryWrites=true&w=majority',
    dbName : 'SurveyDB'
  }*/

/*export default {
  dbURL: 'mongodb://127.0.0.1:27017',
  dbName: 'SurveyDB',
};*/

export default {
  dbURL: process.env.DATABASE_URL || 'mongodb+srv://yuvalyakir1:Yuval998@surveyapp.fcn9s.mongodb.net/?retryWrites=true&w=majority&appName=SurveyApp',
  dbName: 'mySurveyDB',
}

