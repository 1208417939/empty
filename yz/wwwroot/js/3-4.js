//get986
var yz = {}
yz.fei = {}
yz.fei.get986 = function (maxnum) {
    var count = 0
    var num
    function has9() {
        if (num.indexOf('9') >= 0) {
            return true
        }
        else {
            return false
        }
    }
    function has8() {
        if (num.indexOf('8') >= 0) {
            return true
        }
        else {
            return false
        }

    }
    function has6() {
        if (num.indexOf('6') >= 0) {
            return true
        }
        else {
            return false
        }

    }
    for (var i = 0; i < maxnum; i++) {
        num = i.toString()
        if (has9() || has8() || has6()) {
            count++
        }
    }
    return count
}
alert(get986(100))

/*在函数student()中声明了函数域变量name、age和female，使用闭包机制，将其暴露到函数外部*/
function student() {
    var sname = 'judy';
    var age = 20;
    var female = true;
    var obj
    return function () {
        return obj = {
            sname: sname,
            age: age,
            female: female
        }
    };
}
student()()


/*解释以下代码运行结果：（ condition ? <statement when true> : <statement when false>）*/
function foo(x) {
    var tmp = 3;
    return function (y) {
        x = (x ? x + 1 : 1);// if x = 0 or NaN then x = 1, else x = x+1
        console.log(x + y + tmp);
    }
}
var bar = foo(-1);
//或者：var bar = foo(1);
//或者：var bar = foo(0);//bar is function(y)

bar(10); //call bar(10) is same as call function(y) when x =10.

/*改动以下代码，让其输出如图所示，并说明理由。*/
function buildList(list) {
    var result = [];
    for (let i = 0; i < list.length; i++) {// var -> let, the scope of i is the for block
        result.push(function () {
            console.log('item' + i + ': ' + list[i])
        });
    }
    return result;
}

(function () {
    var fnlist = buildList([1, 2, 3]);
    for (var i = 0; i < fnlist.length; i++) {
        fnlist[i]();
    }
})();
