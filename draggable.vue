<template>
  <div>
    <draggable :list="list" v-bind="$attrs" @end="end">
      <div v-for="element in list" :key="element.id">
        <div>
          <component :is="element.componentname" />
        </div>
      </div>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'

// 内容组件
import JnPopuplefttop from './components/JnPopuplefttop'
import JnPopupcentertop from './components/JnPopupcentertop'
import JnPopupcenterbottom from './components/JnPopupcenterbottom'
import JnPopupleftbottom from './components/JnPopupleftbottom'
import JnPopuprighttop from './components/JnPopuprighttop'
import JnPopuprightbottom from './components/JnPopuprightbottom'
export default {
  name: 'DragDemo',
  components: {
    draggable,
    JnPopuplefttop,
    JnPopupcentertop,
    JnPopupleftbottom,
    JnPopupcenterbottom,
    JnPopuprighttop,
    JnPopuprightbottom
  },
  props: {
    list: {
      type: Array,
      default() {
        return [
          JnPopuplefttop,
          JnPopupcentertop,
          JnPopupleftbottom,
          JnPopupcenterbottom,
          JnPopuprighttop,
          JnPopuprightbottom
        ]
      }
    }
  },
  methods: {
    end: function() {

    }
  }
}
</script>
<style lang="scss">

</style>
