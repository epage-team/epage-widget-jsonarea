import { Epage } from 'epage-iview'

export default class JsonareaSchema extends Epage.schema.FormSchema {
  constructor (props) {
    super() // super 不传参数时  $init 不会执行
    this.rules = [
      { required: false, message: '必填', type: 'string' },
      {
        message: '非法的json格式!',
        type: 'json'
      }
    ]
    this.label = 'json'
    this.default = ''
    this.placeholder = '请输入json'
    this.type = 'json'
    this.option = {
      indent: 2 // 缩进
    }
    this.create(props) // 初始化schema、widget、descriptor
  }
}

// 静态配置，同类widget公有
Object.assign(JsonareaSchema, {
  title: 'JSON',
  widget: 'jsonarea', // 组件类型的唯一标识，相同时表示同一个组件 必须和 this.widget相同
  icon: 'compose',
  type: 'json',
  validators: [],
  logic: {
    value: [],
    event: ['focus', 'blur', 'change']
  }
})
