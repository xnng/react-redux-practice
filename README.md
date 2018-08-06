## [Demo 1、计数器](./react-counters)（React）

### 预览

https://bgrc.github.io/react-vue-full-stack/react-counters/preview/

<p align='center'>
<img src='./images/counter.gif'>
</p>

### 要点

- 如何创建一个 React 组件

- 组件之间如何传值

- 组件的生命周期

## [Demo 2、小记账本](./react-records)（React + Axios + Bootstrap 4 + Font Awesome + MockAPI）

### 预览

https://bgrc.github.io/react-vue-full-stack/react-records/preview/

<p align='center'>
<img src='./images/records.gif'>
</p>

### 要点

- 如何使用 bootstrap 4 的 [sizing](https://getbootstrap.com/docs/4.0/utilities/sizing/) 和 [spacing](https://getbootstrap.com/docs/4.0/utilities/spacing/) 调整容器的位置和大小

- 如何使用 Font Awesome 添加小图标

- 如何使用 [onChange](./react-records/src/components/RecordForm.js#L16-L24) 或 [refs](./react-records/src/components/RecordTable.js#L22-L26) 获取表单数据

- 如何在页面上显示 [Loading 和 Error](./react-records/src/components/Records.js#L93-L107) 状态

- 如何创建[无状态组件](./react-records/src/components/AmountBox.js#L1-L18)

- 如何使用 [prop-types](./react-records/src/components/RecordTable.js#L109-L114) 进行属性类型检查

- [如何使用 Axios 发送 Ajax，并提取方法到工具类](./react-records/src/utils/RecordsAPI.js#L1-L15)

- 如何提取 [API 地址](./react-records/src/utils/RecordsAPI.js#L3)到[环境变量文件](./react-records/.env#L1)

- 如何[更新](/react-records/src/components/Records.js#L39-L57)和[删除](./react-records/src/components/Records.js#L59-L66)数组中的对象（[参考](https://redux.js.org/recipes/structuringreducers/immutableupdatepatterns#updating-an-item-in-an-array)）