let hash = {};
hash.onSmartContractSuccess = null;
hash.onSmartContractError = null;
hash.onCryptoTransferSuccess = null;
hash.onCryptoTransferError = null;

let _callback = null;

let _resolve = null;
let _reject = null;

let extensionid = '';

window.onload = function () {

    /**
     * Get Started
     * Include this script tag of hash.js in your website to use and benefit of the following functions
     * 
     * @example
     *  <script src="https://cdn.hashingsystems.com/hash.js" type="text/javascript"></script>
     */

    /**
     * Variable that gives id of extension when the composer extension is up and running
     * 
     * @example
     * console.log(extensionid);
     * @returns {string} "igptwehnsjcokfkansilfhgntepvjbojm"
     * 
     */
    const extensionid = extensionId;
    
    window.hash = hash;

    /**
    * Triggers a prompt on website for composer extension connect guide  
    * 
    * @example
    * hash.enable((err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // triggers a prompt window on your website
    * @returns {function} callback
    * 
    * 
    * @param {function} cb
    */
    hash.enable = (cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-connect");
        hederaTag.setAttribute("data-title", document.title || '');
        hederaTag.setAttribute("data-host", window.location.host || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }

    /**
    * Triggers a Cryptotransfer prompt from composer extension  
    * 
    * @example
    * hash.triggerCryptoTransfer(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers cryptotransfer extension prompt
    * @returns {function} callback
    * 
    * @param {object{}} data An object containing 
    * @param {string} data.contractid - contract Id can be of account id type('0.0.1234') or domain name type ('mydomain.hh')
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {string} data.extensionid(optional) - extension id of composer
    * @param {string} data.recipientlist- to addresses of recipients as string of object 
    * @param {string} data.contentid(optional) 
    * @param {string} data.type(optional) 
    * @param {string} data.redirect(optional)
    * @param {function} cb
    */
    hash.triggerCryptoTransfer = (data, cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-micropayment");
        hederaTag.setAttribute("data-time", data.contractid || '');
        hederaTag.setAttribute("data-memo", data.memo || '');
        hederaTag.setAttribute("data-contentid", data.contentid || '');
        hederaTag.setAttribute("data-type", data.type || '');
        hederaTag.setAttribute("data-redirect", data.redirect || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-recipientlist", data.recipientlist || '');
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }


    /**
    * Triggers a Smart Contract call prompt from composer extension  
    * 
    * @example
    * hash.triggerSmartContract(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers smart contract call extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.contractid - contract Id can be of account id type('0.0.1234') or domain name type ('mydomain.hh')
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {string} data.params(optional) - string of Array which contains parameters of contract function to be executed
    * @param {string} data.abi- string array of objects which contains details of contract function   
    * @param {string} data.extensionid(optional) - extension id of composer
    * @param {number} data.gasfee - cost of transaction fee(tinybars) needed for call 
    * @param {number} data.transactionfee - cost of transaction fee(tinybars) needed for call 
    * @param {number} data.amount(optional)
    * @param {function} cb
    */
    hash.triggerSmartContract = (data, cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-contract");
        hederaTag.setAttribute("data-contractid", data.contractid || '');
        hederaTag.setAttribute("data-memo", data.memo || '');
        hederaTag.setAttribute("data-params", data.params || '');
        hederaTag.setAttribute("data-abi", data.abi || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-gasfee", data.gasfee || '');
        hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
        hederaTag.setAttribute("data-amount", data.amount || '');
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }

    /**
    * Triggers a Smart Contract Deploy prompt from composer extension  
    * 
    * @example
    * hash.deploySmartContract(data, (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       console.log('Success:::',res);
    *   }
    * });
    * // tiggers smart contract deploy extension prompt
    * @returns {function} callback
    * 
    * @param {object} data An object containing 
    * @param {string} data.fileid(alternative to bytecode) - id of the file if created already
    * @param {string} data.memo - short message specifying the purpose or message relating to the call
    * @param {string} data.params(optional) - string of Array which contains parameters of contract function to be executed
    * @param {string} data.abi- string array of objects which contains details of contract function 
    * @param {string} data.bytecode(alternative to fileid) - low-level code version of actual file 
    * @param {string} data.extensionid(optional) - extension id of composer
    * @param {number} data.gasfee - cost of transaction fee(tinybars) needed for call 
    * @param {number} data.transactionfee - cost of transaction fee(tinybars) needed for call 
    * @param {number} [data.expirationTime=7890000000] (optional) expiry time of contract in milliseconds
    * @param {number} data.amount(optional)
    * 
    * @param {function} cb
    */
    hash.deploySmartContract = (data, cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-deploy-contract");
        hederaTag.setAttribute("data-fileid", data.fileid || '');
        hederaTag.setAttribute("data-memo", data.memo || '');
        hederaTag.setAttribute("data-params", data.params || '');
        hederaTag.setAttribute("data-abi", data.abi || '');
        hederaTag.setAttribute("data-bytecode", data.bytecode || '');
        hederaTag.setAttribute("data-extensionid", extensionid);
        hederaTag.setAttribute("data-gasfee", data.gasfee || '');
        hederaTag.setAttribute("data-transactionfee", data.transactionfee || '');
        hederaTag.setAttribute("data-amount", data.amount || '');
        hederaTag.setAttribute("data-expirationTime", data.expirationTime ||7890000000 );
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }

    /**
    * Checks balance of current account selected in composer extension or checks the balance of the given account id  
    * 
    * @example
    * hash.triggerCheckBalance("0.0.12345", (err,res)=>{
    *   if(err){
    *       //error case
    *       console.log('Error:::',err);
    *   }else{
    *       //success case
    *       // {
    *       //   res:{
    *       //           balance:"2363161",
    *       //           currentAccount:"0.0.12345",
    *       //           currentNetwork:"mainnet"
    *       //       }
    *       // }
    *       console.log('Success:::',res);
    *   }
    * });
    * @returns {function} callback
    * 
    * @param {string} accountID account id in accountID format("0.0.12345")
    * @param {function} cb
    */
   hash.triggerCheckBalance = (accountID, cb) => {
        let contractDiv = document.getElementsByTagName('body')[0];
        let hederaTag = document.createElement("hedera-balance");
        hederaTag.setAttribute("data-accountID", accountID || '');
        contractDiv.appendChild(hederaTag);
        if (cb) {
            _callback = cb;
        } else {
            return new Promise((resolve, reject) => {
                _resolve = resolve;
                _reject = reject;
            })
        }
    }



    /**
    * Converts hexadecimal eth address to account id type('0.0.1234')
    * 
    * @example
    * hash.ethAddressToAccountId("0000000000000000000000000000000000003039);
    * //returns "0.0.12345"
    * 
    * @param {string} ethAddress an hexadecimal value
    *
    */
    hash.ethAddressToAccountId = (ethAddress) => {
        accId = `0.0.${parseInt(ethAddress, 16)}`
        return (accId);
    }

    /**
    * Converts account id type('0.0.1234') to hexadecimal eth address
    * 
    * @example
    * hash.accountIdToEthAddress("0.0.12345");
    * @returns {string} "0000000000000000000000000000000000003039"
    * 
    * @param {string} ethAddress an hexadecimal value
    *
    */
    hash.accountIdToEthAddress = (accountId) => {
        let defaultAddress = '0000000000000000000000000000000000000000';
        let accountNo = accountId.split('.')[2];
        let etherAddressRaw = parseInt(accountNo).toString(16);
        let remainingCount = 40 - etherAddressRaw.length;
        let etherAddress = defaultAddress.substr(0, remainingCount) + etherAddressRaw + defaultAddress.substr(remainingCount + etherAddressRaw.length)
        return etherAddress;
    }


    document.addEventListener('DOMNodeInserted', () => {
        let banner = document.getElementById("hedera-banner-wrapper")
        console.log("Banner:", banner);
        if (banner) {
            let chromeExtensionId = banner.getAttribute('data-id')
            let smartContractTrigger = banner.getAttribute('data-smart-contract-trigger')
            console.log(smartContractTrigger)
            if (smartContractTrigger === 'true') {
                banner.style.display = 'none';
                console.log(`chrome-extension://${chromeExtensionId}/html/smart-contract-details.html?sender_url=${window.location.origin}`)
                let popupWindow = window.open(`chrome-extension://${chromeExtensionId}/html/smart-contract-details.html?sender_url=${window.location.origin}`, "extension_popup", "height=520,width=350,status=1,scrollbars=1,resizable=no");
                console.log('open popup window')
                popupWindow.onbeforeunload = function () {
                    console.log('popupWindow closed..');
                }
                return;
            }
            let microPaymentTrigger = banner.getAttribute('data-crypto-transfer-trigger')
            if (microPaymentTrigger === 'true') {
                banner.style.display = 'none';
                window.open(`chrome-extension://${chromeExtensionId}/html/crypto-transfer-details.html?sender_url=${window.location.origin}`, "extension_popup", "height=520,width=350,status=1,scrollbars=1,resizable=no");
                return;
            }
        }
    });

    window.addEventListener("message", receiveMessage, false);

    function receiveMessage(event) {
        if (event.data.type && event.origin === window.location.origin) {
            console.log("receiveMessage::")
            console.log(event.origin);
            console.log(event.data.type);
            console.log(event.data.res);
            switch (event.data.type) {
                case 'account-connect-deny':
                    window.hash.onConnectAccountError && window.hash.onConnectAccountError(event.data.res)
                    _callback && _callback(event.data.res, null)
                    _reject && _reject(event.data.res)
                    break;
                case 'account-connect-success':
                    window.hash.onConnectAccountSuccess && window.hash.onConnectAccountSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'smart-contract-deny':
                    window.hash.onSmartContractError && window.hash.onSmartContractError(event.data.res)
                    _callback && _callback(event.data.res, null)
                    _reject && _reject(event.data.res)
                    break;
                case 'smart-contract-success':
                    window.hash.onSmartContractSuccess && window.hash.onSmartContractSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'micro-payment-deny':
                    window.hash.onCryptoTransferError && window.hash.onCryptoTransferError(event.data.res)
                    _callback && _callback(event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'micro-payment-success':
                    window.hash.onCryptoTransferSuccess && window.hash.onCryptoTransferSuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'hedera-balance-success':
                    window.hash.onCheckAccountBalance && window.hash.onCheckAccountBalance(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'hedera-balance-deny':
                    window.hash.onCheckAccountBalance && window.hash.onCheckAccountBalance(event.data.res)
                    _callback && _callback( event.data.res)
                    _reject && _reject(event.data.res)
                    break;
                case 'smart-contract-deploy-success':
                    window.hash.onSmartContractDeploySuccess && window.hash.onSmartContractDeploySuccess(event.data.res)
                    _callback && _callback(null, event.data.res)
                    _resolve && _resolve(event.data.res)
                    break;
                case 'smart-contract-deploy-deny':
                    window.hash.onSmartContractDeployError && window.hash.onSmartContractDeployError(event.data.res)
                    _callback && _callback( event.data.res)
                    _reject && _reject(event.data.res)
                    break;
            }
        }
    }
}
