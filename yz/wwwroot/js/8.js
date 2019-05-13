/*完成详细的、可测试的需求文档：学费计算器（Web版）。实现以下功能：
用户可以选择在源栈学习的开始时间、共学习多少天/周/月
然后，系统自动计算出截至日期和总学费*/
//见草稿CSHTML


/*JSON生成和解析：
按自己的情况，生成一个JSON字符串，包括真实姓名、QQ昵称、年龄、性别、兴趣爱好、自我介绍……，上传到QQ群：一起帮·有意向（729600626）
根据其他同学的JSON获得其个人资料，生成一个表格显示。*/
//见LAYOUT CSHTML

/*使用正则表达式判断某个字符串:
是否是合格的Email格式
是否是小数（正负小数都可以）
将所有以zyf-开头的属性去掉zyf- （尽可能多的制造测试用例，比如：<a lzyf-old=''，或者：<span>zyf---+---fyz</span> ……）*/
function isEmail(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/g;
    return reg.test(str);
} 
function isFloat(str) {
    var reg = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g;
    return reg.test(str);
}

function deletezyf(str) {
    var reg = /^<.*?\szyf\-.+[\".?\"]?.*?>$/g
    if (reg.test(str)) {
        str = str.replace(reg, function (match, content) {
            return match.replace(content, '');
        }
            str.rp
    document.write(deletezyf('<a wzyf-"a">') + '<br />')



/*利用新学到的Array函数，重新完成之前的数组相关作业*/
