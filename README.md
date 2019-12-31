# designPattern-learn
study design pattern with typescript

### 学习目标
1. 理解松耦合设计思想
2. 掌握面向对象设计原则
3. 掌握重构技法改善设计
4. 掌握GOF核心设计模式

### 面向对象
[通过分解和抽象来解决软件设计的复杂（抵御变化）](./doc/面向对象.md)


### GOF-23 模式分类
* 从目的来看
    * 创建型（Creational）模式：将对象的部分创建工作延迟到子类或者其他对象，从而应对需求变化为对象创建时的冲击
    * 结构型（Structural）模式：通过类继承或者对象组合形成灵活的结构，从而应对需求变化为对象的结构带来的冲击
    * 行为型（Behavioral）模式：通过类继承或者对象组合来解决类与对象间的职责，从而应对需求变化为多个交互的对象结构的冲击

* 从范围来看
    * 类模式处理类与子类的静态关系
    * 对象模式处理对象间的动态关系


### 从封装变化角度对模式分类
* [组件协作](./doc/组件协作.md)
    * Template Method
    * Strategy
    * Observer / Event

* 单一职责
    * Decorator
    * Bridge

* 对象创建
    * Factory Method
    * Abstract Factory
    * Prototype
    * Builder

* 对象性能
    * Singleton
    * Flyweight

* 接口隔离
    * Facade
    * Proxy
    * Mediator
    * Adapter

* 状态变化
    * Memento
    * State

* 数据结构
    * Composite
    * Iterator
    * Chain of Responsibility

* 行为变化
    * Command
    * Visitor

* 领域问题
    * Interpreter

### 重构获得模式 Refactoring to Patterns
* 应对变化，提高复用
* 寻找变化点，寻找比理解更重要
* 不宜先入为主，重构获得模式

### 重构的关键
* 静态 —— 动态
* 早绑定 —— 晚绑定
* 继承 —— 组合
* 编译时依赖 —— 运行时依赖
* 紧耦合 —— 松耦合