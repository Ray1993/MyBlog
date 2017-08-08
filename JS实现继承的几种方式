
既然要实现继承，那么首先我们得有一个父类，代码如下：

// 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};

1、原型链继承

核心： 将父类的实例作为子类的原型
