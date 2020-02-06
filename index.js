const SSLCzData = require("./SSLCzData");
const PublicSslCommerzPayment = require("./PublicSslCommerzPayment");
const express = require('express')
const app = express()
const port = 3000

app.post('/test', async function (req, res) {
    let a = await PublicSslCommerzPayment()
    console.log(a)
    res.json({
        status: 'success',
        data: a.GatewayPageURL, 
        logo: a.storeLogo
    })

})

// module.exports=SSLCommerzPayment;
app.use( express.static('public'));
//app.use(new PublicSslCommerzPayment);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
