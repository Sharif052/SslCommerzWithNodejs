const SslCommerzPayment = async () => {

    return new Promise((resolve, reject) => {


        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://sandbox.sslcommerz.com/gwprocess/v4/api.php',
            'headers': {
                'Content-Type': 'multipart/form-data;'
            },
            formData: {
                'store_id': 'testbox',
                'store_passwd': 'qwerty',
                'total_amount': '100',
                'currency': 'BDT',
                'tran_id': 'aaasdaw',
                'product_category': 'clothing',
                'success_url': 'http://localhost/v4/success.php', //redirect your success link
                'fail_url': 'http://localhost/v4/fail.php', //redirect your failur link
                'cancel_url': 'http://localhost/v4/cancel.php', //redirect your cancel link
                'cus_name': 'Test Customer',
                'cus_email': 'test@test.com',
                'cus_add1': 'Dhaka',
                'cus_add2': 'Dhaka',
                'cus_city': 'Dhaka',

                'cus_state': 'Dhaka',
                'cus_postcode': '1000',
                'cus_country': 'Bangladesh',
                'cus_phone': '01711111111',
                'cus_fax': 'Dhaka',

                'shipping_method': 'NO',
                'num_of_item': '1',
                'product_name': 'Shirt',
                'product_profile': 'physical-goods',
                'ship_name': 'Store Test',
                'ship_add1': 'Dhaka',
                'ship_add2': 'Dhaka',
                'ship_city': 'Dhaka',

                'ship_state': 'Dhaka',
                'ship_postcode': '1000',
                'ship_country': 'Bangladesh',
                'value_a': 'ref001',
                'value_b': 'ref002',
                'value_c': 'ref003',
                'value_d': 'ref004',
            }
        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            
            let a = JSON.parse(response.body)
            resolve(a)
        });

    })
}


module.exports = SslCommerzPayment;


