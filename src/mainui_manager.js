(function () {

    var Ease = Laya.Ease;
    var Event = Laya.Event;
    var Handler = Laya.Handler;
    var SoundManager = Laya.SoundManager;
    var Sprite = Laya.Sprite;
    var Tween = Laya.Tween;
	var Loader = laya.net.Loader;

	var _parent;
	var _gamelogic;
	function onListRender(item, index)
	{
		//自定义list的渲染方式
		// var label = item.getChildByName("label");
		// if (index % 2) {
		// 	label.color = "#ff0000";
		// } else {
		// 	label.color = "#000000";
		// }
	}
	function main_ui()
	{
		var Event = laya.events.Event;
		main_ui.super(this);

		//btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
		this.btnResult.on(Event.CLICK, this, onBtnReadmeClick);
		this.btnStart.on(Event.CLICK, this, onBtnStartClick);


        var userlist = _gamelogic.getUserList();
		//通过赋值可以简单快速修改组件属性
		//赋值有两种方式：
		//简单赋值，比如：progress:0.2，就是更改progress组件的value为2
		//复杂复制，可以通知某个属性，比如：label:{color:"#ff0000",text:"Hello LayaAir"}
		this.render.dataSource = {slider: 50, scroll: 80, progress: 0.2, label: {color: "#ff0000", text: "Hello LayaAir"}};

		//list赋值，先获得一个数据源数组
		var arr = [];
		var listLength = userlist.count();
		for (var i = 0; i < listLength; i++) {
			var userinfo = userlist.at(i);
			arr.push({label: " " + i, clip: i % 9});
		}

		//给list赋值更改list的显示
		this.lst_players.array = arr;
		
		//还可以自定义list渲染方式，可以打开下面注释看一下效果
		//this.lst_players.renderHandler = new Handler(this, onListRender);

		function onBtnReadmeClick()
		{			
		//	Laya.stage.removeChild(this);
			_parent.showReadme();
			console.log("btn readme pressed");
		}

		function onBtnStartClick()
		{			
			Laya.stage.removeChild(this);
			_parent.showGameUI();
			console.log("btn start pressed");
		}
	}

	Laya.class(main_ui, "main_ui", main_uiUI);

    function mainuiManager() {
        var _this = this;
        mainuiManager.super(_this);		
    }

    Laya.class(mainuiManager, "mainuiManager", Sprite);

    var _proto = mainuiManager.prototype;
    _proto.init_ui = function (parent, gamelogic)
    {
		_parent = parent;
		_gamelogic = gamelogic;
        function onAssetLoaded()
		{
			Laya.stage.addChild(new main_ui());
		}
		Laya.loader.load("res/atlas/main_ui.json", Handler.create(this, onAssetLoaded), null, Loader.ATLAS);
    }
})();