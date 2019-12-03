hashjs = document.createElement('script');
hashjs.setAttribute('src','https://cdn.hashingsystems.com/hash.js')
document.head.appendChild(hashjs);

close = document.createElement('button');
close.setAttribute('id','close')
var text = document.createTextNode("Cancel");
close.appendChild(text);
close.setAttribute('style','width: 100%;background-color: #9d1313;color: white;padding: 14px 20px;margin: 8px 0;border: none;border-radius: 4px;cursor: pointer;')

buttonpay = document.getElementById('hedera-pay-btn');
buttonpay.setAttribute('style','background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer;')

amountfield = document.createElement('input');
amountfield.setAttribute('type','text');
amountfield.setAttribute('id','hedera-amount');
amountfield.setAttribute('placeholder','Enter Amount (In HBar)');
amountfield.setAttribute('style','width: 100%;padding: 12px 20px;margin: 8px 0;display: inline-block;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;"')

hederatriggerbtn = document.createElement('button');
hederatriggerbtn.setAttribute('id','hedera-trigger-button');
var btntext = document.createTextNode("Pay using Composer");
hederatriggerbtn.appendChild(btntext);
hederatriggerbtn.setAttribute('style','width: 100%;background-color: #4CAF50;color: white;padding: 14px 20px;margin: 8px 0;border: none;border-radius: 4px;cursor: pointer;')
hederatriggerbtn.setAttribute('onclick','pay_hedera()')

document.getElementById('hedera-pay-btn').onclick = function showamountmodal() {
    recipient = document.getElementById('hedera-pay-btn').getAttribute('address');
      modal = document.createElement('div');
      modal.setAttribute('id','myModal');
      modal.setAttribute('style','display: block;position: fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.4);')

      content = document.createElement('div');
      content.setAttribute('id','hedera-modal-content')
      content.setAttribute('style','background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 80%;width: 320px;height: 230px;')
      content.appendChild(close);

    info = document.createElement('h3');
    var text = document.createTextNode("You are Paying :- " + recipient);
    info.appendChild(text);
    content.appendChild(info);

      content.appendChild(amountfield);
      content.appendChild(hederatriggerbtn);
      modal.appendChild(content);
      document.body.appendChild(modal);
}

function pay_hedera(){
    amount = document.getElementById('hedera-amount').value;
    recipient = document.getElementById('hedera-pay-btn').getAttribute('address');
    console.log(amount);
    console.log(recipient);
    let data = {
        time:"1",
        memo:"Hedera Transaction for " + recipient,
        contentid:'test1',
        redirect:'{"nonPayingAccount": "/nomicropaymentreceived.html"}',
        recipientlist:'[{"tinybars": "' + amount + '", "to":"' + recipient + '"}]',
        type:'article'
      }
      window.hash.triggerCryptoTransfer(data, (err, res) => {
        console.log("Callback::Error:", err)
        if (res) {
            modal = document.getElementById('hedera-modal-content');
            modal.innerHTML = ""; 
            msg = document.createElement('span');
            var text = document.createTextNode("Payment Successfully Made");
            msg.appendChild(text);
            modal.appendChild(msg);
        }
        else {
            modal = document.getElementById('hedera-modal-content');
            modal.innerHTML = ""; 
            msg = document.createElement('span');
            var text = document.createTextNode("Payment Not Made");
            msg.appendChild(text);
            modal.appendChild(msg);
        }
      });
}

close.onclick = function() {
    var modal = document.getElementById("myModal");
    document.body.removeChild(modal);
}
