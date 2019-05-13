//判断并证明事件处理函数中的this，等于target还是currentTarget
//已有如下代码：
var sname = "飞哥";
var a = {
    sname: '老程',
    fn: function () {
        console.log(this.sname);
    }
}
//请用不同的方式调用fn()函数，能分别打印出‘飞哥’和‘老程’
a.fn();//老程
func = a.fn;
func();//飞哥

//不改变上述代码，分别使用call()和apply() ，打印出‘文轩’和‘两开花’
func.call({ sname: '文轩' });
func.call({ sname: '两开花' });

//将fn()永久拷贝到showName() ，始终打印‘源栈最棒！^ _ ^’
showName = fn.bind({ sname: ‘源栈最棒！^ _ ^’})