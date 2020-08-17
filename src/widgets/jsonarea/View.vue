<template lang="pug">
.ep-widget.ep-widget-jsonarea

  //- 显示模式展示
  template(v-if='mode === "display"')
    pre.ep-widget-jsonarea-content {{format(model[schema.key])}}
  //- 编辑模式展示
  template(v-else)
    Input(
      type='textarea'
      v-model='model[schema.key]'
      :size='rootSchema.size'
      :placeholder='schema.placeholder'
      :autosize='{ minRows: 2, maxRows: 6 }'
      @on-enter="event('on-enter', ...arguments)"
      @click.native="event('on-click', ...arguments)"
      @on-change="event('on-change', ...arguments)"
      @on-focus="event('on-focus', ...arguments)"
      @on-blur="event('on-blur', ...arguments)"
      @on-keyup="event('on-keyup', ...arguments)"
      @on-keydown="event('on-keydown', ...arguments)"
      @on-keypress="event('on-keypress', ...arguments)"
    )
    Button.ep-widget-jsonarea-format(size='small' @click='onFormat') 格式化
</template>
<script>
import { viewExtend } from 'epage-iview'

export default {
  extends: viewExtend,
  methods: {
    format (value) {
      const { indent } = this.schema.option
      try {
        const json = JSON.parse(value)
        const str = JSON.stringify(json, null, indent || 2)
        return str
      } catch(e) {
        return ''
      }
    },
    onFormat () {
      const { key, option } = this.schema
      try {
        const value = this.store.getModel(key)
        const { indent } = option
        const json = JSON.parse(value)
        const formtedJson = JSON.stringify(json, null, indent || 2)
        this.store.updateModel({ [key]: formtedJson })
      } catch (e) {
      }
    }
  },
}
</script>
