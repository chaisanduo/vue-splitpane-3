<template>
  <div style="width:100%;height:100%">
    <el-row :gutter="20" style="height:100%">
      <split-pane split="vertical" :splitnumber="3" :default-percent="25" :rightpercent="25">
        <template slot="paneL">
          <el-col :span="6">
            <split-pane split="horizontal" :default-percent="40">
              <template slot="paneL" style="height:40%;">
                <el-row style="height:100%">
                  <el-col>
                    <div class="grid-content bg-purple">
                      <div class="colcontainer">
                        <span class="corner lefttopcore" />
                        <span class="corner righttopcore" />
                        <div class="containercon">
                          <drag-demo :key="1" :group="group" :list="componentsdata1" />
                        </div>
                        <span class="corner leftbottomcore" />
                        <span class="corner rightbottomcore" />
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </template>
              <template slot="paneR" style="height:57%;margin-top:20px">
                <el-row style="height:100%">
                  <el-col>
                    <div class="grid-content bg-purple">
                      <div class="colcontainer">
                        <span class="corner lefttopcore" />
                        <span class="corner righttopcore" />
                        <div class="containercon">
                          <drag-demo :key="2" :group="group" :list="componentsdata2" />
                        </div>
                        <span class="corner leftbottomcore" />
                        <span class="corner rightbottomcore" />
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </template>
            </split-pane>
          </el-col>
        </template>
        <template slot="paneM">
          <el-col :span="12">
            <split-pane split="horizontal" :default-percent="60">
              <template slot="paneL" style="height:60%;">
                <el-row style="height:100%;">
                  <el-col>
                    <div class="grid-content bg-purple">
                      <div class="colcontainer">
                        <span class="corner lefttopcore" />
                        <span class="corner righttopcore" />
                        <div class="containercon">
                          <drag-demo :key="3" :group="group" :list="componentsdata3" />
                        </div>
                        <span class="corner leftbottomcore" />
                        <span class="corner rightbottomcore" />
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </template>
              <template slot="paneR" style="height:37%;margin-top:20px">
                <el-row style="height:100%;">
                  <el-col>
                    <div class="grid-content bg-purple">
                      <div class="colcontainer">
                        <span class="corner lefttopcore" />
                        <span class="corner righttopcore" />
                        <div class="containercon">
                          <drag-demo :key="4" :group="group" :list="componentsdata4" />
                        </div>
                        <span class="corner leftbottomcore" />
                        <span class="corner rightbottomcore" />
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </template>
            </split-pane>
          </el-col>
        </template>
        <template slot="paneR">
          <el-col :span="6">
            <split-pane split="horizontal" :default-percent="40">
              <template slot="paneL" style="height:40%;">
                <el-row style="height:100%">
                  <el-col>
                    <div class="grid-content bg-purple">
                      <div class="colcontainer">
                        <span class="corner lefttopcore" />
                        <span class="corner righttopcore" />
                        <div class="containercon">
                          <drag-demo :key="5" :group="group" :list="componentsdata5" />
                        </div>
                        <span class="corner leftbottomcore" />
                        <span class="corner rightbottomcore" />
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </template>
              <template slot="paneR" style="height:57%;margin-top:20px">
                <el-row style="height:100%">
                  <el-col>
                    <div class="grid-content bg-purple">
                      <div class="colcontainer">
                        <span class="corner lefttopcore" />
                        <span class="corner righttopcore" />
                        <div class="containercon">
                          <drag-demo :key="6" :group="group" :list="componentsdata6" />
                        </div>
                        <span class="corner leftbottomcore" />
                        <span class="corner rightbottomcore" />
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </template>
            </split-pane>
          </el-col>
        </template>
      </split-pane>
    </el-row>
  </div>
</template>
<script>
import DragDemo from '../draggable'
export default {
  components: {
    DragDemo
  },
  data() {
    return {
      group: 'dragcompponent',
      componentsdata1: [
        {
          name: 'Dragcompponent',
          id: 1,
          componentname: '这是左侧上'
        }],
      componentsdata2: [
        {
          name: 'Dragcompponent',
          id: 2,
          componentname: '这是左侧下'
        }],
      componentsdata3: [
        {
          name: 'Dragcompponent',
          id: 3,
          componentname: '这是中间上'
        }],
      componentsdata4: [
        {
          name: 'Dragcompponent',
          id: 4,
          componentname: '这是中间下'
        }],
      componentsdata5: [
        {
          name: 'Dragcompponent',
          id: 5,
          componentname: '这是右侧上'
        }],
      componentsdata6: [
        {
          name: 'Dragcompponent',
          id: 6,
          componentname: '这是右侧下'
        }
      ]
    }
  },
  methods: {
    end: function() {

    },
    resize: function() {

    }
  }
}
</script>
<style lang="scss">
@import "~@/styles/overview.scss";

</style>
