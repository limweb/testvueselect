<template>
  <div class="flexbox">
    <div class="flex-content">
      <div>
        <item v-for="(detail,index) in details" v-bind:key="index" v-bind:index="index" v-bind:detail="detail" v-on:select="onSelect"></item>
      </div>
    </div>
      <pre>{{details}}</pre>
    </div>
  </div>
</template>

<script>
  // import { ListSelect } from  'vue-search-select'
  import Item from  './Item.vue'

  export default {
    data () {
      return {
        details:[
                {id:'', name:'', price:0 ,category: 0 },
                {id:'', name:'', price:0 ,category: 0 },
                {id:'', name:'', price:0 ,category: 0 },
                {id:'', name:'', price:0 ,category: 0 },
                ],
        item: {
          id: '',
          name: '',
          category_id: ''
        }
      }
    },
    methods: {
      onSelect (item, key) {
        console.log('[onSelect in parent] triggered by @select because of the ".$emit(\'select\')" om child');
        this.details.splice(key, 1, item);
      },
    },
    components: {
      Item
    }
  }
</script>
