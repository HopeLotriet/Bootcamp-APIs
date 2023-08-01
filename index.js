import express from 'express';
import longestWord from "./bootcampFunctions/longestWord.js";
import shortestWord from "./bootcampFunctions/shortestWord.js";
import wordLengths from "./bootcampFunctions/wordLengths.js";
import totalPhoneBill from './bootcampFunctions/totalPhoneBill.js';
import enoughAirtime from './bootcampFunctions/enoughAirtime.js'



const app = express();
app.use(express.json());

app.use(express.static('public'));

app.get('/api/word_game', function(req, res){
    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({
            error : 'Please have a sentence to analyze'
        })
    }
    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "wordCount" : wordLengths(sentence)
    });
});


// Endpoint to set the price for call or SMS


    
app.get('/api/phonebill/prices', function(req, res) {
    const phoneBill = req.query.phoneBill;
    const call= 2.75;
    const sms = 0.65;
   res.json ({ 
    "bill" : totalPhoneBill(phoneBill)
});
});

    // Endpoint to get the total phone bill

  
    app.post("/api/phonebill/total", function(req, res) {
        const bill = req.body.bill;
            
        res.json({
            message: "success",
            total : totalPhoneBill(bill)
        });
    });

    

    // Endpoint to set the price for call or SMS

    app.post('/api/phonebill/price', function(req, res) {
     const type = req.body.type;
     const price = req.body.price;

        res.json ({
            status: 'sucess',
        message: `The ${type} was set to ${price.toFixed(2)}`,
        });
    });
  


// POST route for enough API


app.get('/api/enough', function(req, res) {
    const projectedUsage = req.query.projectedUsage;
    const airtimeAvailable = req.query.airtimeAvailable;

    if (!projectedUsage || !airtimeAvailable) {
        res.json({
            error: 'Please put the usage and airtime available'
        })
    }
    res.json ({
        "totalBill" : enoughAirtime(projectedUsage, airtimeAvailable)
    })
 });

app.post('/api/enough', function(req, res){
    const projectedUsage = req.body.projectedUsage;
    const airtimeAvailable = req.body.airtimeAvailable;
    const result = enoughAirtime(projectedUsage, airtimeAvailable);


        res.json({
            result : result
        });
});


const PORT = 4009;
app.listen(PORT, function() {
    console.log('api started on port', PORT)
})