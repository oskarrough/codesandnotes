	<?php wp_footer(); ?>

	<footer class="SiteFooter">
		<p><a href="http://codesandnotes.com">Codes &amp; Notes</a> <span class="Copyright">&copy; Oskar Rough Mosumgaard 2014</span> <a href="/about">→  About</a></p>
		<p class="TocLink"><a href="http://codesandnotes.com#toc">§ Table of contents</a></p>
	</footer>

	<div id="Loader">
		<div class="Stick Stick--left"><span></span></div>
		<div class="Stick Stick--right"><span></span></div>
	</div>

	<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-3906535-21', 'codesandnotes.com');ga('send', 'pageview');</script>
	<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
	<script>
	var removeRouting = function() {
		$('body').removeClass('is-routing')
	}
	$(function(){
		var $links = $("a:not([href^='#']), a[href^='http://codesandnotes.com']");
		var doit;
		$links.on('click', function(event){
			// Remove routing after set time
			clearTimeout(doit);
			doit = setTimeout(removeRouting, 2000);
			$('body').addClass('is-routing');
			// Show the loader at mouse position
			$('#Loader').css({
				left: (event.pageX - 20) + 'px',
				top: event.pageY + 'px'
			});
		});
	});
	</script>

</body>
</html>
