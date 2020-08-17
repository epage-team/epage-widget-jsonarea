<template lang="pug">
setting-form(:store='store')
  //- span(slot='rule')
  FormItem(label='缩进')
    InputNumber(
      size='small'
      v-model='selectedSchema.option.indent'
      :min='0'
      :max='8'
      :step='1'
    )
</template>
<script>
import { Epage } from 'epage-iview'

const { SettingForm, settingExtend } = Epage.setting

export default {
  components: { SettingForm },
  extends: settingExtend,
  methods: {}
}
</script>
