//用class声明一个课程（Course），包含属性：name，startDate，endDate，students，
//以及方法：begin()和end()
class Course {
    constructor(name,startDate,endDate,students) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.students = students;
    }
    begin() {
        console.log(`Course begins at ${this.startDate}.We have these students:${this.students}`)
    }
    end() {
        console.log('Course ended.');
    }

    }
    
//生成两个课程对象：JavaScript和SQL
var javascript = new Course('javascript')
var SQL = new Course('SQL')
//调用对象的begin()和end()方法，可以在控制台输出开课信息，如
//JavaScript于2019年5月5日开课，共有5名同学（两开花、王枫、王平、采铃、老程）报名。
javascript.begin();
javascript.end();

//不修改class，动态的改变begin()方法，使其能影响所有Course对象。
//完成。

//让end()方法为各自对象“自有”，其他对象无法修改
//啥意思啊

//在Course中使用getter和setter包装endDate，
//保证endDate不会小于startDate，也不会比startDate多出365天
getEndDate(){
    console.log(`EndDate is year ${this.endDate.getFullyear},month ${this.endDate.getFullMonth+1},day${this.endDate.getDate}`)
}
setEndDate(newDate){
    if (newDate.getTime() - this.startDate.getTime() < 0 || newDate.getTime() - this.startDate.getTime() > 365 * 24 * 60 * 60 * 1000) {
        throw 'Exception:invalid input'
    }
    else {
        this.endDate = newDate
    }
}
//endDate is instance of Date

//--------------------------------------------

//为Course添加两个子类：主修课（MajorCourse）和辅修课（ElectiveCourse）
//主修课需要参加考试，所以有一个Exam(student)方法；
//辅修课只需要测评，所以有一个方法Assess(student)

class MajorCourse extends Course {
    constructor(name) {
        super(name)
    }
    Exam(student) {
        //code here
        student.score = 100 - Math.ceil(Math.random() * 50)
    }
}
class ElectiveCourse extends Course {
    constructor(name) {
        super(name)
    }
    Assess(student) {
        rank = ['A','B','C','D','E']
        student.score = rank[Math.floor(Math.random() * 5)]
    }
}
//声明一个Student类，包含name和score两个属性，让Course的Students包含的是Student
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}
Amy = new Student('Amy')
Bob = new Student('Bob')
Cindy = new Student('Cindy')
Students = [Amy,Bob,Cindy]

//创建一个MajorCourse的实例，运行它的Exam(student)方法，结束课程（使用end()方法），
//并给该student该course上的score赋值为50 - 100的随机整数
algorithm = new MajorCourse('algorithm')
algorithm.Exam(Amy)
algorithm.end()
//see line 60

//创建一个ElectiveCourse的实例，运行它的Exam(student)方法，结束课程（使用end()方法），
//给该student该course上的score赋值为ABCDE中的一个随机值
start = new Date(2019,4,5)
end = new Date(2019,5,5)
AI = new ElectiveCourse('AI',start,end,Students)
AI.Asess(Bob)
AI.end()
//see line 69

//给Course声明一个静态的GetStudentsByName(name)，
//能根据不同的name返回不同的整数值（参加该course的学生数量）
static GetStudentsByName(){
    return this.students.length
}// do not need parameter 'name'

//在子类调用GetStudentsByName()
AI.getStudentsByName()