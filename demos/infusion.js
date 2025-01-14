( function () {

	// Demonstrate JavaScript 'infusion' of PHP-generated widgets.
	// Used by widgets.php.

	var infuseButton, $demoHeader;

	// Helper function to get high resolution profiling data, where available.
	function now() {
		return ( window.performance && performance.now ) ? performance.now() : Date.now();
	}

	// Add a button to infuse everything!
	// (You wouldn't typically do this: you'd only infuse those objects which you needed to attach
	// client-side behaviors to, or where the JS implementation provides additional features
	// over PHP, like DropdownInputWidget. We do it here because it's a good overall test.)
	function infuseAll() {
		var start, end,
			isInfused = infuseButton.isActive();
		if ( isInfused ) {
			// Can't actually uninfuse, just reload the page
			location.reload();
		} else {
			start = now();
			// eslint-disable-next-line no-jquery/no-global-selector
			$( '*[data-ooui]' ).each( function () {
				OO.ui.infuse( this );
			} );
			end = now();
			window.console.log( 'Took ' + Math.round( end - start ) + ' ms to infuse demo page.' );
		}
		// Pretend to behave like a ToggleButtonWidget (not available in PHP)
		infuseButton.setActive( !isInfused );
	}

	// eslint-disable-next-line no-jquery/no-global-selector
	$demoHeader = $( '.demo-header' );

	OO.ui.getViewportSpacing = function () {
		return {
			top: $demoHeader.outerHeight(),
			right: 0,
			bottom: 0,
			left: 0
		};
	};

	// More typical usage: we take an existing server-side button and do things to it,
	// here enabling it and adding a click event handler.
	// eslint-disable-next-line no-jquery/no-global-selector
	infuseButton = OO.ui.infuse( $( '.demo-menu-infuse' ) )
		.on( 'click', infuseAll )
		.setDisabled( false );
}() );
