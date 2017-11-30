(function () {

    var Ease = Laya.Ease;
    var Event = Laya.Event;
    var Handler = Laya.Handler;
    var SoundManager = Laya.SoundManager;
    var Sprite = Laya.Sprite;
    var Tween = Laya.Tween;
    var playerList = null;

    function GameLogic() {
        var _this = this;
        GameLogic.super(_this);
        
        _this.initGame();
    }

    Laya.class(GameLogic, "GameLogic", Sprite);

    var _proto = GameLogic.prototype;

    _proto.initGame = function () {
        var _this = this;
        playerList = new LList();

        //初始化测试数据
        _this.initTestData();
    }

    _proto.initTestData = function(){
        if (playerList != null){
            playerList = null;
            playerList =new LList();
        }
            
        playerList.insert("Conway", new player("Conway","什么东西"));
        playerList.insert("Russellville", new player("Russellville","西南南北"));
        playerList.insert("你是什么人", new player("你是什么人","北京要死"));
    }

    _proto.dumpPlayerList = function(){
        playerList.dump();
        console.log("getUserList");
    }

    _proto.getUserList = function(){
        return playerList;
    }

})();
