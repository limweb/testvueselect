<template>
  <div style="position: relative" :class="{open:showDropdown}">
    <input class="form-control" autocomplete="off"
      v-model="val"
      :placeholder="placeholder"
      :type.once="type"
      @blur="showDropdown = false"
      @keydown.down.prevent="down"
      @keydown.enter="hit"
      @keydown.esc="reset"
      @keydown.up.prevent="up"
    />
    <ul class="dropdown-menu" ref="dropdown">
      <li v-for="(item, i) in items" :class="{active: isActive(i)}">
        <a @mousedown.prevent="hit" @mousemove="setActive(i)">
          <component :is="templateComp" :item="item"></component>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {delayer, getJSON} from './utils.js'
var DELAY = 300

export default {
  props: {
    data: {type: Array},
    delay: {type: Number, default: DELAY},
    itemkey: {type: String, default: null},
    limit: {type: Number, default: 8},
    matchCase: {type: Boolean, default: false},
    onHit: {
      type: Function,
      default (item) { return item }
    },
    placeholder: {type: String},
    template: {type: String},
    type: {type: String, default: 'text'},
    value: {type: String, default: ''}
  },
  data () {
    return {
      asign: '',
      showDropdown: false,
      noResults: true,
      current: 0,
      items: [],
      val: this.value
    }
  },
  computed: {
    templateComp () {
      console.log('------templateComp--------')
      return {
        template: typeof this.template === 'string' ? '<span>' + this.template + '</span>' : '<strong v-html="item"></strong>',
        props: { item: {default: null} }
      }
    }
  },
  watch: {
    val (val, old) {
      console.log('----watch---val-----',val,old);
      this.$emit('updateobj',val);
      if (typeof val === 'object') { 
        val = val[this.itemkey];
      }  
      this.$emit('input', val)
      if (val !== old && val !== this.asign) this.__update()
    },
    value (val) {
      console.log('----watch---value-----',val);
      if (this.val !== val) { this.val = val }
    }
  },
  methods: {
    setItems (data) {
      if(this.matchCase){
        this.items =  this.itemkey ?  data.filter(item=>item[this.itemkey].indexOf(this.val) != -1 ) : data;
      } else {
        this.items =  this.itemkey ?  data.filter(item=>item[this.itemkey].toLowerCase().indexOf(this.val.toLowerCase()) != -1 ) : data;
      }
        this.showDropdown = this.items.length > 0
    },
      setValue (value) {
      console.log('----setValue-----',value)
        if(value){
          this.asign = this.itemkey ? value[this.itemkey] : value; 
        } else {
          this.asign = value; 
        }
        this.val = this.asign;
        this.items = []
        this.loading = false
        this.showDropdown = false
    },
    reset () { 
      console.log('----------------reset--->setValue-------------------')
      this.setValue(null) 
    },
    setActive(index) { 
      console.log('---------setActive-->this.current---',index)
      this.current = index 
    },
    isActive (index) { 
      console.log('-----------isActive------',index)
      return this.current === index 
    },
    hit (e) {
      e.preventDefault()
      console.log('-----enter---hit--current--item-- asign>',this.current,this.items,this.asign)
      console.log('---asign==',this.asign);
      if(this.items.length > 0 ){
        this.setValue(this.onHit(this.items[this.current], this))
      } 
      if(this.items.length == 0 && this.asign == '') {
        this.setValue(null);
      }
    },
    up () {
      console.log('-----up------------------')
      if (this.current > 0) { this.current-- }
      else { this.current = this.items.length - 1 }
    },
    down () {
      console.log('---------down------------')
      if (this.current < this.items.length - 1) { this.current++ }
      else { this.current = 0 }
    }
  },
  created () {
    console.log('---------on Created----------------------')
      this.__update = delayer( function(){
        console.log('-------__update-------------')
        if (!this.val) {
          this.reset()
          return
        }
        this.asign = ''
        if(this.data) {
          this.setItems(this.data)
        }
      },'delay',DELAY)
    this.__update()
  }
}
</script>

<style>
.dropdown-menu > li > a {
  cursor: pointer;
}
</style>