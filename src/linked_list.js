/*自定义容器Map*/
function LList() {
    /*创建构造器，有key和value*/
    var struct = function (key, value) {
        this.key = key;
        this.value = value;
    }
    /*在容器中放入值*/
    var insert = function (key, value) {
        for (var x = 0; x < this.arr.length; x++) {
            if (this.arr[x].key == key) {
                this.arr[x].value = value;
                return;
            }
        }
        this.arr[this.arr.length] = new struct(key, value);
    }
    /*根据容器获取容器中的值*/
    var get = function (key) {
        for (var x = 0; x < this.arr.length; x++) {
            if (this.arr[x].key == key) {
                return this.arr[x].value;
            }
        }
        return null;
    }

    var at = function(index){
        if (index < this.arr.length){
            return this.arr[index].value;
        }
        else
            return null;        
    }

    var dump = function () {
        for (var x = 0; x < this.arr.length; x++) {
            console.log(this.arr[x].key + " : " +  this.arr[x].value.Words());
        }
    }

    var clear = function()
    {
        this.arr = new Array();
    }

    var count = function()
    {
        return this.arr.length;
    }

    /*构建数组*/
    this.arr = new Array();
    this.get = get;
    this.at = at;
    this.insert = insert;
    this.dump = dump;
    this.clear = clear;
    this.count = count;
}  