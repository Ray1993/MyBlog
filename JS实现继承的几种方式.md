
既然要实现继承，那么首先我们得有一个父类，代码如下：

```js
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
```

1、原型链继承

核心： 将父类的实例作为子类的原型

```js
function Cat(){ 
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true
```
特点：

1非常纯粹的继承关系，实例是子类的实例，也是父类的实例

2.父类新增原型方法/原型属性，子类都能访问到

3.简单，易于实现

缺点：

1.要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中

2.无法实现多继承

3.来自原型对象的引用属性是所有实例共享的

4.创建子类实例时，无法向父类构造函数传参
