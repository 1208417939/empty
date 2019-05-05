/*模拟求助首页，并：

统计有多少个悬赏大于1的求助
将状态为“协助中”的求助背景改成灰黑色
写一个函数，可以统计某个求助使用了多少关键字
如果总结数为0，将其从DOM树中删除*/
//1
var node = document.getElementsByClassName('visible-sm-inline visible-md-inline visible-lg-inline');
var num = 0;
for (var i = 0; i < node.length; i++) {
    if (node[i].innerText === '悬赏' && node[i].parentNode.nextSibling.innerText > 1) {
        num++;
    }
}
console.log('There are' + num + 'of questions that award > 1 ');
//2
for (var i = 0; i < document.getElementsByClassName('problem-status label-info').length; i++) {
    if (document.getElementsByClassName('problem-status label-info')[i].innerText === '待协助') {
        document.getElementsByClassName('problem-status label-info').parentNode.style.backgroundColor = 'darkblue';
    }
}
//3
/*<p zyf-problem-keyword style="clear:both;">
                            <span class="fa fa-tags " style="margin-right:10px;"></span>
                                <span zyf-keyword="4" title="已使用 4 次" data-toggle="tooltip" class="badge badge-has-used" style="margin-right:5px;">
                                    <a href="/Problem?keyword=282" style="color:white;">WPF</a>
                                </span>
                                <span zyf-keyword="92" title="已使用 92 次" data-toggle="tooltip" class="badge badge-has-used" style="margin-right:5px;">
                                    <a href="/Problem?keyword=169" style="color:white;">C#</a>
                                </span>
                                <span zyf-keyword="232" title="已使用 232 次" data-toggle="tooltip" class="badge badge-has-used" style="margin-right:5px;">
                                    <a href="/Problem?keyword=163" style="color:white;">编程开发语言</a>
                                </span>
                            <a href="" class="hide" zyf-keyword-update="720">
                                <span class="fa fa-pencil-square-o"></span> 修改
                            </a>
                        </p>
*/
//function countKeyword() {
// <p zyf-problem-keyword style="clear:both;">
/*该文本元素需要用querySelector的方法选出来（用attr zyf - problem - keyword) ，
 一旦选出。只要数这个Node里有多少个含有zyf-keyword属性的child（同样用selector)就可以了。
 找总结数为0即找，含有zyf-keyword的属性名且属性值为"0"的child，同样用selector*/



/*参考用户注册页面，创建一下函数：

显示密码的长度
如果密码和确认密码不一致，弹出提示*/
//这只是一段虚拟代码，并不能在源站登陆界面应用,因为变量命名不同。实际上登陆界面的源码已经写的很完善了。
<script>
function verifyPassword() {
    var x = document.getElementById("name");
    var y = document.getElementById("verifiedName");
    if (x !== y) {
        alert('Please input the same password!');
    }
}
</script>
//<input ....(attributes) onchange="verifyPassword()">//在对应的源码里给验证密码的input标签用onchange分配这个函数，当离开验证密码的输入框时就会执行

/*参考用户资料页面，控制台显示出用户的：性别 / 出生年月 / 关注（关键字）/ 自我介绍*/
/*<div class="form-group">
        <label>性别：</label>
        <label class="checkbox-inline">
            <input id="IsFemale" name="IsFemale" type="radio" value="True" /> 男
        </label>
        <label class="checkbox-inline">
            <input checked="checked" id="IsFemale" name="IsFemale" type="radio" value="False" /> 女
        </label>
    </div>
    <div class="form-group">
*/
var name = document.getElementById("IsFemale");
console.log(name.parentNode.innerText);
/*测试如下：
var x = document.getElementById("IsFemale").value
"True"
y = document.getElementById("IsFemale").parentNode.innerText
" 男"*/
/*剩下三个用户信息我在console里试了，用以上方法及其变种无论如何都取不到，源码如下
 *  <select class="form-control" data-val="true" data-val-number="字段 BirthYear 必须是一个数字。" id="BirthYear" name="BirthYear"><option value="">----</option>
console:
var BirthYear = document.getElementById("BirthYear");
undefined
Birthyear.nextSibling
VM10139:1 Uncaught ReferenceError: Birthyear is not defined
    at <anonymous>:1:1*/