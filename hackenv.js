(function() {
	
	function __defineProperty__(prop, value) {
		this[prop] = value;
	}
	
	if( !Array.prototype.__defineProperty__ ) Array.prototype.__defineProperty__ = __defineProperty__;
	if( !String.prototype.__defineProperty__ ) String.prototype.__defineProperty__ = __defineProperty__;
	
	this.deferredCall = function() {
		/*for ( var k in opPrecedence ) opPrecedence[k]++;
		opPrecedence.EJS_START = 0;
		opPrecedence.EJS_END = 0;*/
	};
	
})();
