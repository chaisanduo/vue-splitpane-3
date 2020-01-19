<template>
  <div style="width:100%;height:100%">
    <el-row :gutter="20" style="height:100%">
      <split-pane split="vertical" :splitnumber="3" :default-percent="splitpercentL" :rightpercent="splitpercentR" @resize="resize">
        <template slot="paneL">
          <el-col :span="Math.round(splitpercentL/100*24)">
            <split-pane split="horizontal" :default-percent="40">
              <template slot="paneL" style="height:40%;">
                <el-row style="height:100%">
                  <el-col style="padding-bottom:10px">
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
                  <el-col style="padding-top:10px">
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
          <el-col :span="24-(Math.round((splitpercentL/100)*24)+Math.round((splitpercentR/100)*24))">
            <split-pane split="horizontal" :default-percent="60">
              <template slot="paneL" style="height:60%;">
                <el-row style="height:100%;">
                  <el-col style="padding-bottom:10px">
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
                  <el-col style="padding-top:10px">
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
          <el-col :span="Math.round(splitpercentR/100*24)">
            <split-pane split="horizontal" :default-percent="40">
              <template slot="paneL" style="height:40%;">
                <el-row style="height:100%">
                  <el-col style="padding-bottom:10px">
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
                  <el-col style="padding-top:10px">
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
          componentname: 'JnPopuplefttop'
        }],
      componentsdata2: [
        {
          name: 'Dragcompponent',
          id: 2,
          componentname: 'JnPopupleftbottom'
        }],
      componentsdata3: [
        {
          name: 'Dragcompponent',
          id: 3,
          componentname: 'JnPopupcentertop'
        }],
      componentsdata4: [
        {
          name: 'Dragcompponent',
          id: 4,
          componentname: 'JnPopupcenterbottom'
        }],
      componentsdata5: [
        {
          name: 'Dragcompponent',
          id: 5,
          componentname: 'JnPopuprighttop'
        }],
      componentsdata6: [
        {
          name: 'Dragcompponent',
          id: 6,
          componentname: 'JnPopuprightbottom'
        }
      ],
      splitpercentL: localStorage.getItem('splitpercentL') ? Number(localStorage.getItem('splitpercentL')) : 25,
      splitpercentR: 25
    }
  },
  methods: {
    end: function() {

    },
    resize: function(e) {
      // 如果是3行或3列，e是数组，[precent，ture||false]===>precent代表移动的宽度值，true表示移动的是右侧的分割线，false表示移动的是左侧分割线
      if (typeof e === Number) {
        this.splitpercentL = Math.round(e)
        localStorage.setItem('splitpercentL', this.splitpercentL)
      } else if (e instanceof Array) {
        if (e[1]) {
          this.splitpercentR = Math.round(e[0])
          localStorage.setItem('splitpercentR', this.splitpercentR)
        } else {
          this.splitpercentL = Math.round(e[0])
          localStorage.setItem('splitpercentL', this.splitpercentL)
        }
      }
    }// 监听页面宽度变化的函数
  }
}
</script>
<style lang="scss">
// 布局页面的样式
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}
.el-col{
    height:100%;
    width: 100%;
}

//每一个板块的背景和边框样式
.bg-purple {
  border: 1px solid #295575;
  height: 100%;
  background: rgba(0, 70, 128, 0.1)
}

//板块容器的样式
.colcontainer{
    position:relative;
    height:100%;
    cursor: pointer;
}

// 4个角的样式 ++++++++++++  开始
.corner {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
}

.lefttopcore {
  background: url('../../../assets/images/overview/lefttopcorner.png');
  left: -2px;
  top: -2px;
}

.righttopcore {
  background: url('../../../assets/images/overview/righttopcorner.png');
  right: -2px;
  top: -2px;
}

.leftbottomcore {
  background: url('../../../assets/images/overview/leftbottomcorner.png');
  left: -2px;
  bottom: -2px;
}

.rightbottomcore {
  background: url('../../../assets/images/overview/rightbottomcorner.png');
  right: -2px;
  bottom: -2px;
}

// 4个角的样式 ++++++++++++  结束
//容器内容样式
.containercon {
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
}



// 3个小块的样式
.map_righr {
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
}

.map_item {
  width: 150px;
  text-align: center;
  background: #002b50;
  height: 84px;
  line-height: 25px;
}

.first_part{
    display: flex;
    display: -webkit-flex;
    flex-direction:column;
    
}

</style>

