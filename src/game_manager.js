(function () {

    var Ease = Laya.Ease;
    var Event = Laya.Event;
    var Handler = Laya.Handler;
    var SoundManager = Laya.SoundManager;
    var Sprite = Laya.Sprite;
    var Tween = Laya.Tween;

    var bgMusicChannel;//背景音乐实例

    var gameContainer;//游戏容器
    var gameBgPanel;//游戏区背景

    var mainui_manager;
    var gameui_manager;
    var readmeui_manager;
    var game_logic;    

    function GameManager() {
        var _this = this;
        GameManager.super(_this);

        _this.initGameBg();
        _this.initGame();
        _this.addEvents();
        _this.startGame()
    }

    Laya.class(GameManager, "GameManager", Sprite);

    var _proto = GameManager.prototype;

    _proto.initLetterObjArr = function () {
        
    }

    _proto.initGameBg = function ()
    {
        gameContainer = new Sprite();
        gameContainer.y = 0;
        this.addChild(gameContainer);

        gameBgPanel = new Sprite();//游戏区背景
        gameBgPanel.loadImage("res/mainui_bg.png");
        gameContainer.addChild(gameBgPanel);
    }

    _proto.initGame = function () {
        var _this = this;      
        
        game_logic = new GameLogic();
        game_logic.initGame();        
    }

    _proto.startGame = function () {
        var _this = this;

        mainui_manager = new mainuiManager();
        mainui_manager.init_ui(this, game_logic); 
        //_this.playMusic();      
    }

    _proto.showGameUI = function()
    {
        var _this = this;
        gameui_manager = new gameuiManager();
        gameui_manager.init_ui(this, game_logic);
    }

    _proto.showReadme = function()
    {
        var _this = this;
        readmeui_manager = new readmeuiManager();
        readmeui_manager.init_ui(this);
    }

    _proto.endGame = function () {
        var _this = this;
    }

    _proto.playMusic = function () {
        SoundManager.autoStopMusic = false;
        bgMusicChannel = SoundManager.playMusic("res/got.mp3", 0);
    }

    _proto.removeLetter = function (letter) {
        //var letterBox = screenLetterBoxArr.splice(screenLetterBoxArr.indexOf(letter), 1)[0];
        //letterBox.destroyMe();
        //letterBox.removeSelf();
        //letterBox.destroy(true);
    }

    _proto.addEvents = function () {
        var _this = this;
        Laya.stage.on(Event.KEY_DOWN, this, function (e) {
            _this.onKeyDown(e);
        });

        Laya.stage.on(Event.KEY_UP, this, function (e) {
            _this.onKeyUp(e);
        });
    }

    _proto.onKeyUp = function (e) {
      
    }

    _proto.onKeyDown = function (e) {
        var _this = this;
        var keyDownLetter = String.fromCharCode(e.keyCode);
        var letter;       
    }

})();
