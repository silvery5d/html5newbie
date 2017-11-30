(function () {
    var Stage = Laya.Stage;
    var Handler = Laya.Handler;
    var WebGL = Laya.WebGL;
    var Loader = Laya.Loader;
    var Stat = Laya.Stat;
    var Sprite = Laya.Sprite;
    var Event = Laya.Event;

    (function () {
        Laya.init(480, 800);

        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;

        Laya.stage.screenMode = Stage.SCREEN_NONE;
        Laya.stage.bgColor = "#232628";
        init();
    })();

    function init() {
        var res = [];
        res.push({url: "res/atlas/main_ui.json", type: Loader.ATLAS});
        res.push({url: "res/atlas/main_ui.png", type: Loader.IMAGE});
        Laya.loader.load(res, Handler.create(this, onComplete));
    }

    function onComplete() {
        var gameManager = new GameManager();
        Laya.stage.addChild(gameManager);
    }

})();
