(function($){
	$.fn.hideMoreThan=function(options) {
		var defaults={
			'max':7,
			ondisplay:function(hideout){},
			onhide:function(hideout){},
			'htmlOnHide':"Show More",
			'htmlOnDisplay':"Show Less",
			'toggleClass':'show'
		};
		var $self=this;
		var hideout=$('<div class="hideout"></div>');
		function showAll () {
			$self.show();
			hideout.data('hided',false).html(options.htmlOnDisplay).removeClass(options.toggleClass);
			options.ondisplay.call(this,hideout);
		};
		function hideAll () {
			$self.each(function(index,element){
				var $element=$(element);
				if (index>options.max-1) {
					$element.hide();
				}
			})
			hideout.data('hided',true).html(options.htmlOnHide).addClass(options.toggleClass);
			options.onhide.call(this,hideout);
		};
		options=$.extend({},defaults,options);
		if ($self.length>options.max) {
			hideout.insertAfter($self.last());
			hideout.click(function(){
				if (hideout.data('hided')) {
					showAll();
				} 
				else {
					hideAll();
				}
			})
			hideAll();
		}
		return this;
	}
})(jQuery)