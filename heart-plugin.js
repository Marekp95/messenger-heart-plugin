function executeInPage(functionToRunInPage, leaveInPage, id) {
   
    var newScript = document.createElement('script');
    if(typeof id === 'string' && id) {
        newScript.id = id;
    }
    newScript.textContent = '(' + functionToRunInPage.toString() + ').apply(null,);';
    (document.head || document.documentElement).appendChild(newScript);
    if(!leaveInPage) {
        //Synchronous scripts are executed immediately and can be immediately removed.
        //Scripts with asynchronous functionality of any type must remain in the page
        //  until complete.
        document.head.removeChild(newScript);
    }
    return newScript;
};


function addHeartReaction(arg0,arg1,arg2,arg3){
    var oldOpen = XMLHttpRequest.prototype.open;
	console.log(oldOpen)
	XMLHttpRequest.prototype.open = function() {
		arguments[1] = arguments[1].replace('%F0%9F%98%8D', '%E2%9D%A4');
		oldOpen.apply(this, arguments); 
	}
	var newOpen = XMLHttpRequest.prototype.open;
}

executeInPage(addHeartReaction, false, '');