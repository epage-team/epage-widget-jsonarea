# eapge-widget-json

> 基于epage针对json格式校验的表单组件


## 使用

```js
import widgets { Render, Epage } from 'epage-iview'
import jsonarea from 'epage-widget-jsonarea'

// 引入css样式
import 'epage-widget-jsonarea/dist/epage-widget-jsonarea.css'
// 或引入less
import 'epage-widget-jsonarea/src/style/main.less'

const { helper } = Epage
const myWidgets = helper.mergeWidget(widgets, jsonarea)

// 设计器
new Epage({ el, widgets: myWidgets, Render })
// 或者渲染器
new Render({ el, widgets: myWidgets, schema })
```

