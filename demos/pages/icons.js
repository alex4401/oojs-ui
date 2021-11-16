Demo.static.pages.icons = function ( demo ) {
	var icons = {
			movement: [
				'arrowPrevious',
				'arrowNext',
				'downTriangle',
				'upTriangle',
				'first',
				'previous',
				'next',
				'last',
				'expand',
				'collapse',
				'doubleChevronStart',
				'doubleChevronEnd',
				'move',
				'draggable'
			],
			content: [
				'article',
				'articles',
				'articleAdd',
				'articleCheck',
				'articleDisambiguation',
				'articleNotFound',
				'articleSearch',
				'articlesSearch',
				'articleRedirect',
				'database',
				'history',
				'info',
				'infoFilled',
				'folderPlaceholder',
				'die',
				'download',
				'robot',
				'share',
				'specialPages',
				'tag',
				'upload',
				'window'
			],
			alerts: [
				'alert',
				'bell',
				'bellOutline',
				'error',
				'message',
				'notice',
				'speechBubble',
				'speechBubbleAdd',
				'speechBubbles',
				'tray'
			],
			interactions: [
				'add',
				'browser',
				'cancel',
				'check',
				'checkAll',
				'clear',
				'clock',
				'close',
				'ellipsis',
				'feedback',
				'funnel',
				'heart',
				'help',
				'helpNotice',
				'home',
				'key',
				'keyboard',
				'lightbulb',
				'logIn',
				'logOut',
				'network',
				'networkOff',
				'newWindow',
				'pageSettings',
				'printer',
				'reload',
				'search',
				'settings',
				'stopHand',
				'subtract'
			],
			moderation: [
				'bookmarkOutline',
				'bookmark',
				'block',
				'unBlock',
				'flag',
				'unFlag',
				'lock',
				'unLock',
				'star',
				'halfStar',
				'unStar',
				'trash',
				'restore',
				'pushPin',
				'ongoingConversation'
			],
			'editing-core': [
				'edit',
				'editLock',
				'editUndo',
				'link',
				'unLink',
				'linkExternal',
				'linkSecure',
				'redo',
				'undo'
			],
			'editing-styling': [
				'bigger',
				'smaller',
				'subscript',
				'superscript',
				'bold',
				'highlight',
				'italic',
				'strikethrough',
				'underline',
				'textDirLTR',
				'textDirRTL',
				'textStyle'
			],
			'editing-list': [
				'indent',
				'listBullet',
				'listNumbered',
				'outdent'
			],
			'editing-advanced': [
				'alignCenter',
				'alignLeft',
				'alignRight',
				'attachment',
				'calendar',
				'code',
				'hieroglyph',
				'imageLayoutBasic',
				'imageLayoutFrame',
				'imageLayoutFrameless',
				'imageLayoutThumbnail',
				'labFlask',
				'language',
				'layout',
				'mathematics',
				'mathematicsDisplayBlock',
				'mathematicsDisplayDefault',
				'mathematicsDisplayInline',
				'markup',
				'newline',
				'noWikiText',
				'ocr',
				'outline',
				'puzzle',
				'quotes',
				'sandbox',
				'searchCaseSensitive',
				'searchDiacritics',
				'searchRegularExpression',
				'signature',
				'specialCharacter',
				'table',
				'tableAddColumnAfter',
				'tableAddColumnBefore',
				'tableAddRowAfter',
				'tableAddRowBefore',
				'tableCaption',
				'tableMergeCells',
				'tableMoveColumnAfter',
				'tableMoveColumnBefore',
				'tableMoveRowAfter',
				'tableMoveRowBefore',
				'templateAdd',
				'wikiText'
			],
			'editing-citation': [
				'book',
				'journal',
				'newspaper',
				'reference',
				'referenceExisting',
				'references'
			],
			media: [
				'camera',
				'chart',
				'fullScreen',
				'exitFullscreen',
				'image',
				'imageAdd',
				'imageLock',
				'imageGallery',
				'imageBroken',
				'musicalScore',
				'play',
				'pause',
				'volumeDown',
				'volumeUp',
				'volumeOff',
				'stop',
				'zoomIn',
				'zoomOut'
			],
			location: [
				'globe',
				'map',
				'mapPin',
				'mapPinAdd',
				'mapTrail'
			],
			user: [
				'userAdd',
				'userAnonymous',
				'userAvatar',
				'userAvatarOutline',
				'userContributions',
				'userGroup',
				'userTalk'
			],
			layout: [
				'menu',
				'recentChanges',
				'textFlow',
				'textSummary',
				'viewCompact',
				'viewDetails'
			],
			accessibility: [
				'bright',
				'halfBright',
				'notBright',
				'eye',
				'eyeClosed',
				'moon',
				'largerText',
				'smallerText',
				'visionSimulator'
			],
			wikimedia: [
				'logoCC',
				'logoWikidata',
				'logoWikimedia',
				'logoWikimediaCommons',
				'logoWikimediaDiscovery',
				'logoWikipedia'
			]
		},
		indicators = [
			'clear',
			'down',
			'required',
			'up'
		],
		iconsFieldsets,
		iconsWidgets = [],
		indicatorsFieldset = new Demo.LinkedFieldsetLayout( {
			label: 'Indicators',
			id: 'demo-section-indicators'
		} );

	indicators.forEach( function ( indicator ) {
		indicatorsFieldset.addItems( [
			new OO.ui.FieldLayout(
				new OO.ui.IndicatorWidget( {
					indicator: indicator,
					title: indicator
				} ),
				{
					align: 'inline',
					label: indicator
				}
			)
		] );
	} );
	iconsFieldsets = Object.keys( icons ).map( function ( iconSet ) {
		var iconsFieldset = new Demo.LinkedFieldsetLayout( {
			label: 'Icons – ' + iconSet,
			id: 'demo-section-' + iconSet
		} );

		icons[ iconSet ].forEach( function ( icon ) {
			var iconWidget = new OO.ui.IconWidget( {
				icon: icon,
				title: icon
			} );
			iconsWidgets.push( iconWidget );
			iconsFieldset.addItems( [
				new OO.ui.FieldLayout( iconWidget, {
					label: icon,
					align: 'inline'
				} )
			] );
		} );

		return iconsFieldset;
	} );

	var selector = new OO.ui.ButtonSelectWidget( {
		items: [
			new OO.ui.ButtonOptionWidget( {
				label: 'None',
				flags: [],
				data: {
					progressive: false,
					destructive: false
				}
			} ),
			new OO.ui.ButtonOptionWidget( {
				label: 'Progressive',
				flags: [ 'progressive' ],
				data: {
					progressive: true,
					destructive: false
				}
			} ),
			new OO.ui.ButtonOptionWidget( {
				label: 'Destructive',
				flags: [ 'destructive' ],
				data: {
					progressive: false,
					destructive: true
				}
			} )
		]
	} );

	selector
		.on( 'select', function ( selected ) {
			iconsWidgets.forEach( function ( iconWidget ) {
				iconWidget.setFlags( selected.getData() );
			} );
		} )
		.selectItemByData( {
			progressive: false,
			destructive: false
		} );

	demo.$element.append(
		new OO.ui.PanelLayout( {
			expanded: false,
			framed: true
		} ).$element
			.addClass( 'demo-container demo-icons' )
			.attr( 'role', 'main' )
			.append(
				selector.$element,
				iconsFieldsets.map( function ( item ) { return item.$element[ 0 ]; } ),
				indicatorsFieldset.$element
			)
	);
};
