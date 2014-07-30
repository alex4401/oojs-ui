OO.ui.demo.toolbars = function () {

	var i, tools, actionButton, actionButtonDisabled,
		$demo = $( '.oo-ui-demo' ),
		$containers = $(
			'<div class="oo-ui-demo-container oo-ui-demo-toolbars"></div>' +
			'<div class="oo-ui-demo-container oo-ui-demo-toolbars"></div>'
		),
		toolFactories = [],
		toolGroupFactories = [],
		toolbars = [];

	for ( i = 0; i < 3; i++ ) {
		toolFactories.push( new OO.ui.ToolFactory() );
		toolGroupFactories.push( new OO.ui.ToolGroupFactory() );
		toolbars.push( new OO.ui.Toolbar( toolFactories[i], toolGroupFactories[i], { actions: true } ) );
	}

	function createTool( toolbar, name, group, icon, title, init, onSelect ) {
		var Tool = function () {
			Tool.super.apply( this, arguments );
			this.toggled = false;
			if ( init ) {
				init.call( this );
			}
		};

		OO.inheritClass( Tool, OO.ui.Tool );

		Tool.prototype.onSelect = function () {
			if ( onSelect ) {
				onSelect.call( this );
			} else {
				this.toggled = !this.toggled;
				this.setActive( this.toggled );
			}
			toolbars[toolbar].emit( 'updateState' );
		};
		Tool.prototype.onUpdateState = function () {};

		Tool.static.name = name;
		Tool.static.group = group;
		Tool.static.icon = icon;
		Tool.static.title = title;
		return Tool;
	}

	function createDisabledToolGroup( parent, name ) {
		var DisabledToolGroup = function () {
			DisabledToolGroup.super.apply( this, arguments );
			this.setDisabled( true );
		};

		OO.inheritClass( DisabledToolGroup, parent );

		DisabledToolGroup.static.name = name;

		DisabledToolGroup.prototype.onUpdateState = function () {
			this.setLabel( 'Disabled' );
		};

		return DisabledToolGroup;
	}

	toolGroupFactories[0].register( createDisabledToolGroup( OO.ui.BarToolGroup, 'disabledBar' ) );
	toolGroupFactories[0].register( createDisabledToolGroup( OO.ui.ListToolGroup, 'disabledList' ) );
	toolGroupFactories[1].register( createDisabledToolGroup( OO.ui.MenuToolGroup, 'disabledMenu' ) );

	// Toolbar
	toolbars[0].setup( [
		{
			type: 'bar',
			include: [ { group: 'barTools' } ]
		},
		{
			type: 'disabledBar',
			include: [ { group: 'disabledBarTools' } ]
		},
		{
			type: 'list',
			indicator: 'down',
			label: 'List',
			icon: 'picture',
			include: [ { group: 'listTools' } ]
		},
		{
			type: 'disabledList',
			indicator: 'down',
			label: 'List',
			icon: 'picture',
			include: [ { group: 'disabledListTools' } ]
		},
		{
			type: 'list',
			indicator: 'down',
			label: 'Auto-disabling list',
			icon: 'picture',
			include: [ { group: 'autoDisableListTools' } ]
		}
	] );
	// Toolbar with action buttons
	toolbars[1].setup( [
		{
			type: 'menu',
			indicator: 'down',
			icon: 'picture',
			include: [ { group: 'menuTools' } ]
		},
		{
			type: 'disabledMenu',
			indicator: 'down',
			icon: 'picture',
			include: [ { group: 'disabledMenuTools' } ]
		}
	] );
	// Fake toolbar to be injected into the first toolbar
	// demonstrating right-aligned menus
	toolbars[2].setup( [
		{
			type: 'list',
			icon: 'picture',
			include: [ { group: 'menuTools' } ]
		}
	] );
	toolbars[0].$actions.append(
		$( '<div>' )
			.addClass( 'oo-ui-demo-toolbar-utilities' )
			.append( toolbars[2].$element )
	);

	actionButton = new OO.ui.ButtonWidget( { label: 'Action' } );
	actionButtonDisabled = new OO.ui.ButtonWidget( { label: 'Disabled', disabled: true } );
	toolbars[1].$actions
		.addClass( 'oo-ui-demo-toolbar-actionButtons' )
		.append( actionButton.$element, actionButtonDisabled.$element );

	for ( i = 0; i < toolbars.length; i++ ) {
		toolbars[i].emit( 'updateState' );
	}

	tools = [
		// barTools
		[ 0, 'barTool', 'barTools', 'picture', 'Basic tool in bar' ],
		[ 0, 'disabledBarTool', 'barTools', 'picture', 'Basic tool in bar disabled', function () { this.setDisabled( true ); } ],

		// disabledBarTools
		[ 0, 'barToolInDisabled', 'disabledBarTools', 'picture', 'Basic tool in disabled bar' ],

		// listTool
		[ 0, 'listTool', 'listTools', 'picture', 'Basic tool in list' ],
		[ 0, 'disabledListTool', 'listTools', 'picture', 'Basic tool in list disabled', function () { this.setDisabled( true ); } ],

		// disabledListTools
		[ 0, 'listToolInDisabled', 'disabledListTools', 'picture', 'Basic tool in disabled list' ],

		// allDisabledListTools
		[ 0, 'allDisabledListTool', 'autoDisableListTools', 'picture', 'Click to disable this tool', null, function () { this.setDisabled( true ); } ],

		// menuTools
		[ 1, 'menuTool', 'menuTools', 'picture', 'Basic tool' ],
		[ 1, 'disabledMenuTool', 'menuTools', 'picture', 'Basic tool disabled', function () { this.setDisabled( true ); } ],

		// disabledMenuTools
		[ 1, 'menuToolInDisabled', 'disabledMenuTools', 'picture', 'Basic tool' ],

		// menuTools
		[ 2, 'menuTool', 'menuTools', 'picture', 'Basic tool' ],
		[ 2, 'disabledMenuTool', 'menuTools', 'picture', 'Basic tool disabled', function () { this.setDisabled( true ); } ]
	];

	for ( i = 0; i < tools.length; i++ ) {
		toolFactories[tools[i][0]].register( createTool.apply( this, tools[i] ) );
	}

	for ( i = 0; i < toolbars.length; i++ ) {
		$containers.eq( i ).append( toolbars[i].$element );
	}
	$containers.append( '' );
	$demo.append(
		$containers.eq( 0 ).append( '<div class="oo-ui-demo-toolbars-contents">Toolbar</div>' ),
		$containers.eq( 1 ).append( '<div class="oo-ui-demo-toolbars-contents">Toolbar with action buttons</div>' )
	);
};
