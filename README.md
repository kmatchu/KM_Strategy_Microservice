# KM_Strategy_Microservice  
Created by Kevin Mathew on 5/20/24  
Receives a get request with "High", "Medium", or "Low" and responds with an appropriate investment strategy.  
  
This program currently runs on a local server. Download the code, then open the file in terminal and type 'npm init', 'npm install', and then 'npm start' to start the local server at http://localhost:5000. Update the Cors requirement to `origin: ${URL}` where URL is the url of the program making the get request. For example, a local React program usually makes the request from http://localhost:8000.
  
HOW TO REQUEST DATA:  
Your program should make a GET request to `http://localhost:5000/strategy?risk_tolerance=${risk_variable}`, where 'risk_variable' is equal to "High", "Medium", or "Low". Anything else will cause an error.  
  
For example:  
    const strategyMicroserviceCall = async (risk_tolerance) => {  
        console.log("Calling Strategy Microservice with "+risk_tolerance+" risk tolerance.")  
        const res = await fetch("http://localhost:5000/strategy" + "?risk_tolerance=" + risk_tolerance)  
        console.log("Response Received:")  
        console.log(await res.text())  
    }  
    ...  
    <button onClick={() => {strategyMicroserviceCall("High")}}>High Risk Tolerance</button>  
  
HOW TO RECEIVE DATA:  
When the Microservice receives your request, it will respond one of three strings or an error message. To receive its response, you should use await and use .text() on what is received to make it readable.  
    ie: { ...  
        const res = await fetch("http://localhost:5000/strategy" + "?risk_tolerance=" + risk_tolerance)  
        console.log("Response Received:")  
        console.log(await res.text()) }  
  
UML DIAGRAM:  
![uml diagram](https://github.com/kmatchu/KM_Strategy_Microservice/blob/main/Screenshot%202024-05-20%20234422.png)

  
Sources Cited:  
Image insertion accessed 5/20/24: https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github  
Cors tutorial accessed 5/20/24: https://dev.to/speaklouder/how-to-configure-cors-in-nodejs-with-express-11h  
