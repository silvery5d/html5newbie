(function () {

    var Ease = Laya.Ease;
    var Event = Laya.Event;
    var Handler = Laya.Handler;
    var SoundManager = Laya.SoundManager;
    var Sprite = Laya.Sprite;
    var Tween = Laya.Tween;
	var Loader = laya.net.Loader;

	function readme_ui()
	{
		var Event = laya.events.Event;
		readme_ui.super(this);

		this.btn_ok.on(Event.CLICK, this, onBtnOkClick);

		function onBtnOkClick()
		{
			Laya.stage.removeChild(this);
			console.log("btn onBtnReturnClick pressed");
		}
	}

	Laya.class(readme_ui, "readme_ui", readme_uiUI);

    function readmeuiManager() {
        var _this = this;
        readmeuiManager.super(_this);		
    }

    Laya.class(readmeuiManager, "readmeuiManager", Sprite);
    var _proto = readmeuiManager.prototype;

    _proto.init_ui = function (parent)
    {
		_parent = parent;
        function onAssetLoaded()
		{
			Laya.stage.addChild(new readme_ui());
		}
		Laya.loader.load("res/atlas/main_ui.json", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);
    }
})();