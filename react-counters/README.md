## 目录

- [React 入门](#如何开始一个-React-App)
- [如何开始一个 React App](#如何开始一个-React-App)
- [如何添加一个 React 组件](#如何添加一个-React-组件)
- [React 组件之间如何传递数据](#React-组件之间如何传递数据)
- [React 组件的生命周期](#React-组件的生命周期)

## React 入门

React 是 Facebook 推出的一个前端框架，它具有轻量、利用虚拟DOM实现快速渲染、响应式组件等特点。单纯的 React 就是用来渲染 DOM 的，如果说它是框架的话，还应该配合 Redux、React-router 等其他技术来使用。

本文主要介绍`如何开始一个 React App`、`如何添加一个 React 组件`、`React 组件之间如何传递数据`、`React 组件的生命周期`。


## 如何开始一个 React App

在开始之前，请确保已安装了 node.js、npm/yarn 。

通常开发一个前端项目需要引入很多第三方工具，如项目打包工具 webpack、ES 语法转义工具 babel 等。

只引入它们还不行，还要进行很多复杂的配置。为了减少这些工作，Facebook 推出了 `create-react-app` 脚手架工具，集成了 React 和很多第三方优秀的工具，使用它可以有效降低学习成本。

### 首先要全局安装 `create-react-app` 工具

```sh
$ npm install -g create-react-app
```

### 然后就可以用它来创建自己的项目了

```sh
$ create-react-app project-name
```

### 如何启动

```sh
$ cd project-name
$ npm start
```

## 如何添加一个 React 组件

create-react-app 创建的项目中 `idnex.js` 是整个项目的入口文件，此文件中最关键的是下面这一行，它将 App 组件挂载到 DOM 节点上。我们要做的其实就是修改这个 App 组件。

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

### 自定义组件

![](https://xings.oss-cn-shanghai.aliyuncs.com/image/react2/react2-1.png)

上面这个示例中创建了 `Header`、`Content`、`Footer` 这三个组件，然后它们被添加到了 `App` 组件中，最后 `App` 组件被渲染到了 DOM 上，这样就能在页面上看到自定义组件的内容了。

**创建一个组件应该至少包含以下四点内容：**

![](https://xings.oss-cn-shanghai.aliyuncs.com/image/react2/react2-2.png)

render() 函数是 React 的生命周期函数，它会在组件初始化和更新的时候自动执行。需要注意的是，它 return 的内容里面最好都用 `<div>` 包含起来，因为它返回的内容只能有一个 DOM 节点。

### jsx 语法简介

render() 函数返回的内容可以使用 JSX 语法，这也是 React 中非常重要的语法。它能拓展 html 的能力。

有了 JSX 语法，render 就不仅可以返回 html 了，还能添加其他组件，例如：

```js
render() {
    return (
      <div>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
```

需要注意的是，组件的首字母必须为大写，否则会被当成是 HTML。

JSX 中还可以很方便地使用变量、或表达式只需要用 `{}` 即可，凡是遇到 `{}`，JSX 都会以 js 的方式来解析它，所以 JSX 语法允许我们在 HTML 中使用 js。

```js
render(){
    const text = '页头'
    return(
        <div>
            这是{text}
        </div>
    )
}
```

最后再说一下 JSX 中的 css，普通 css 中的 class 在 JSX 中应该写成 `className`，这样做是为了避免冲突。style 的值也比较特殊，在 jsx 中它必须是一个对象，所以用了两层大括号，最里面一层表示它是一个对象，既然是对象那么就要用 js 的方式解析了，所以外面又加上了一层括号。

除此之外还有一点需要注意，style 里面属性的名字必须是驼峰写法，带有连字符的都必须改成驼峰，例如 `font-size` 需要写成 `fontSize`，如果值是 `px`，则可以只写上数字。

```js
render() {
    return (
        <div style={{ fontSize: 28, textAlign: 'center' }}>
            这是页头
        </div>
    )
}
```

## React 组件之间如何传递数据

先来看一个例子，效果如下，是一个计数器。该例子取自程墨的《深入浅出 React 和 Redux》中第二章里的一个例子，我做了部分修改。

![](https://xings.oss-cn-shanghai.aliyuncs.com/image/react2/react2-3.gif)

在 src 的 components 文件夹下新建 Counter.js

```js
import React from 'react'
import CounterChild from './CounterChild'

export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.initValues = [0, 10, 20]

    const initSum = this.initValues.reduce((a, b) => a + b)

    this.state = {
      sum: initSum
    }
  }

  updateCount =(previousValue, newValue)=>{
    const changeValue = newValue - previousValue
    this.setState({
      sum: this.state.sum + changeValue
    })
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <CounterChild updateCount={this.updateCount} title="First" initValue={this.initValues[0]} />
        <CounterChild updateCount={this.updateCount} title="Second" initValue={this.initValues[1]} />
        <CounterChild updateCount={this.updateCount} title="Third" initValue={this.initValues[2]} />
        <hr />
        <div>Total Count: {this.state.sum}</div>
      </div>
    )
  }
}
```

在 src 的 components 文件夹下新建 CounterChild.js

```js
import React from 'react'

export default class CounterChild extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: props.initValue
        }
    }

    incrementCount = () => {
        this.creamentCount(true)
    }

    decrementCount = () => {
        this.creamentCount(false)
    }

    creamentCount(flag) {
        const previousValue = this.state.count
        const newValue = flag ? previousValue + 1 : previousValue - 1
        this.setState({
            count: newValue
        })
        this.props.updateCount(previousValue, newValue)
    }

    render() {
        return (
            <div>
                <button style={{ margin: 10 }} onClick={this.incrementCount}>+</button>
                <button style={{ margin: 10 }} onClick={this.decrementCount}>-</button>
                <span>{this.props.title} count: {this.state.count}</span>
            </div>
        )
    }
}
```

最后修改 App.js

```js
import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'

class App extends Component {

  render() {
    return (
      <Counter />
    );
  }
}

export default App;
```

先从下面这一行代码说起吧，调用组件时是可以添加属性的，属性的值如果是非字符串或 js 表达式则要加上 `{}`。这三个属性都可以传递给子组件。

```js
<CounterChild updateCount={this.updateCount} title="First" initValue={this.initValues[0]} />
```

在子组件中需要通过 constructor 构造函数来传入 prop，这里 props 所接收的 prop 就是父组件的属性。`props.initValue`就可以拿到父组件的 initValue 值。

由于 prop 值是无法直接修改的，所以这里还借助了 state，它可以管理组件内部的数据，它所存储的数据类型是一个对象，所以 `props.initValue` 用了 json 对象的格式放进 state 进行初始化。

```js
constructor(props) {
    super(props);
    this.state = {
        count: props.initValue
    }
}
```

要修改 state 中的 count 值，可以调用 `setState` 方法：

```js
this.setState({
    count: this.state.count + 1
})
```

`到这里已经可以看出，prop 是用来从父组件传递给子组件属性值的，是对外的，而 state 是组件内部管理数据用的，是对内的。`

那么子组件如何传递给值给父组件呢?

还是通过 props 的属性回调，这样父组件就能拿到子组件传递过去的参数了。

![](https://xings.oss-cn-shanghai.aliyuncs.com/image/react2/react2-4.png)

上面我所有用于`onClick`触发的自定义的函数都用了将箭头函数赋值给一个变量的写法，如果不用这种写法则要像下面这样：

![](https://xings.oss-cn-shanghai.aliyuncs.com/image/react2/react2-5.png)

在 React 中，ES6 语法下，onClick 绑定的方法不是和 this 自动绑定的，所以要通过上面这两种方式手动来绑定 this。

## React 组件的生命周期

react 组件提供了很多生命周期函数，我们可以选择在合适的时候调用合适的函数来做合适事情。

一个 React 组件的生命周期分为三个阶段：

- 组件的装载过程

- 组件的更新过程

- 组件的卸载过程

如下图所示，绿色为装载过程，蓝色为更行过程，红色为卸载过程。

![](https://xings.oss-cn-shanghai.aliyuncs.com/image/react2/react2-6.png)

为了测试这些函数会在什么时候执行，可以修改上个例子中的 `CounterChild.js` 文件，绿色为需要添加的内容。

```diff
import React from 'react'

export default class CounterChild extends React.Component {

    constructor(props) {
+       console.log('constructor()')
        super(props);

        this.state = {
            count: props.initValue
        }
    }

    incrementCount = () => {
        this.creamentCount(true)
    }

    decrementCount = () => {
        this.creamentCount(false)
    }

    creamentCount(flag) {
        const previousValue = this.state.count
        const newValue = flag ? previousValue + 1 : previousValue - 1
        this.setState({
            count: newValue
        })
        this.props.updateCount(previousValue, newValue)
    }

+   componentWillMount() {
+       console.log('componentWillMount()')
+   }

+   componentDidMount() {
+      console.log('componentDidMount()')
+   }

+   componentWillReceiveProps(props) {
+       console.log('componentWillReceiveProps(): ' + props.title)
+   }

+   shouldComponentUpdate() {
+       console.log('shouldComponentUpdate()')
+       return true
+   }

+   componentWillUpdate() {
+       console.log('componentWillUpdate()')
+   }

+   componentDidUpdate() {
+       console.log('componentDidUpdate()')
+   }

    render() {
+       console.log('render()')
        return (
            <div>
                <button style={{ margin: 10 }} onClick={this.incrementCount}>+</button>
                <button style={{ margin: 10 }} onClick={this.decrementCount}>-</button>
                <span>{this.props.title} count: {this.state.count}</span>
            </div>
        )
    }
}
```

从图中可以看出 `componentDidMount()` 执行时就代表着整个 React 组件初次渲染完成了，在组件更新过程中 `shouldComponentUpdate()` 必须返回一个布尔值，只有为 true 时，下面的生命周期函数才会执行。最后，当组件被移出 DOM 树时会执行 `componentWillUnmount()` 函数，这里未展示此函数。

![](https://xings.oss-cn-shanghai.aliyuncs.com/image/react2/react2-7.gif)

在什么样的时候调用什么生命周期函数做什么样的事情是需要多写实例才能掌握的，初学时了解一下即可。