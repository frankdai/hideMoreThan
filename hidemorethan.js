(function($){
	$.fn.hideMoreThan=function(options) {
		var defaults={
			'max':7,
			ondisplay:function(){},
			onhide:function(){},
			'htmlOnHide':"Show More",
			'htmlOnDisplay':"Show Less",
			'toggleClass':'show'
		};
		var $self=this;
		var hideout=$('<div class="hideout"></div>');
		options=$.extend({},defaults,options);
		hideout.html(options.htmlOnHide).addClass(options.toggleClass).data('hided',true).insertAfter($self.last());
		hideout.click(function(){
				if (hideout.data('hided')) {
					showAll();
					hideout.data('hided',false);
					hideout.html(options.htmlOnDisplay).removeClass(options.toggleClass);
					options.ondisplay.call(this);
				} 
				else {
					hideAll();
					hideout.data('hided',true);
					hideout.html(options.htmlOnHide).addClass(options.toggleClass);
					options.onhide.call(this);
				}
			})
		function showAll () {
			$self.show();
		};
		function hideAll () {
			$self.each(function(index,element){
				var $element=$(element);
				if (index>options.max-1) {
					$element.hide();
				}
			})
		};
		return hideAll();
	}
})(jQuery)