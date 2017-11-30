(function () {

    var Ease = Laya.Ease;
    var Event = Laya.Event;
    var Handler = Laya.Handler;
    var SoundManager = Laya.SoundManager;
    var Sprite = Laya.Sprite;
    var Tween = Laya.Tween;
	var Loader = laya.net.Loader;

	function game_ui()
	{
		var Event = laya.events.Event;
		game_ui.super(this);

		this.btnReturn.on(Event.CLICK, this, onBtnReturnClick);

		function onBtnReturnClick()
		{
			Laya.stage.removeChild(this);
			_parent.startGame();
			console.log("btn onBtnReturnClick pressed");
		}
	}

	Laya.class(game_ui, "game_ui", game_uiUI);

    function gameuiManager() {
        var _this = this;
        gameuiManager.super(_this);		
    }

    Laya.class(gameuiManager, "gameuiManager", Sprite);
    var _proto = gameuiManager.prototype;

    _proto.init_ui = function (parent)
    {
		_parent = parent;
        function onAssetLoaded()
		{
			Laya.stage.addChild(new game_ui());
		}
		Laya.loader.load("res/atlas/main_ui.json", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);
    }
})();