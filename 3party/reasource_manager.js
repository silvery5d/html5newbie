class RES extends Laya.EventDispatcher{
    // 资源组
    public static groups: any;
    // 资源
    public static resources: any;
    // 完成加载资源配置文件
    public static ONLOADEDRESJSON: string = "onLoadedResJson";
    // 资源配置文件加载出错
    public static ONLOADERRORRESJSON: string = "onLoadError";
    // 资源组加载完成
    public static ONLOADGROUPCOMPLETE: string = "onLoadGroupConplete";
    // 资源组加载出错
    public static ONLOADGROUPERROR: string = "onLoadGroupError";
    private static _res:RES;
    public static getInstance():RES{
        if(!RES._res){
            RES._res = new RES();
        }
        return RES._res;
    }
    /**
     * 加载资源配置文件
     */
    public static loadResJson(srcName: string,caller: any){
        Laya.loader.load("res/" + srcName,new Laya.Handler(caller,function(arg: any){
            if(arg){
                RES.groups = arg.groups;
                RES.resources = arg.resources;
                RES.getInstance().event(RES.ONLOADEDRESJSON,arg);
            }else{
                RES.getInstance().event(RES.ONLOADERRORRESJSON,arg);
            }
        }))
    }
    /**
     * groupName 资源组名称
     */
    public static loadGroup(groupName: string){
        if(!groupName){
            console.error("资源组名称不能为空");
            RES.getInstance().event(RES.ONLOADGROUPERROR,"资源组名称不能为空");
            return;
        }
        var group;
        for(var i in RES.groups){
            var name = RES.groups[i].name;
            if(name == groupName){
                group = RES.groups[i];
                break;
            }
        }
        if(!group){
            console.error("加载了不存在的资源组");
            RES.getInstance().event(RES.ONLOADGROUPERROR,"加载了不存在的资源组");
            return;
        }
        var keys: string = group.keys;
        if(!keys){
            console.error(group.name + "资源组资源为空");
            RES.getInstance().event(RES.ONLOADGROUPERROR,group.name + "资源组资源为空");
            return;
        }
        var allKey: string = keys.split(",");
        var assets: any = ;
        for(var k = 0;k<allKey.length;k++){
            var key = allKey[k];
            for(var j in RES.resources){
                if(RES.resources[j].name == key){
                    assets.push(RES.resources[j]);
                }
            }
        }
        Laya.loader.load(assets,new Laya.Handler(this,function(arg){
            RES.getInstance().event(RES.ONLOADGROUPCOMPLETE,arg);
        }))
         
    }
 
    /**
     * 获取资源 resName 资源名  isAtLas 是否是图集
     */
    public static getRes(resName:string, isAtLas: boolean = false): any{
        var url: string;
        if(!isAtLas){
            for(var j in RES.resources){
                if(RES.resources[j].name == resName){
                    url = RES.resources[j].url;
                    break; 
                }
            }
        }else{
            url = resName;
        }
        var src = Laya.Loader.getRes(url);
        return src;
    }
}