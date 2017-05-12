<template>
  <div>
    <list-select :list="someList"
                 option-value="id"
                 option-text="name"
                 placeholder="select item"
                 v-bind:selected-item="detail"
                 v-bind:parentdata="detail"
                 @select="onSelect">
    </list-select>
  </div>
</template>

<script>
import ListSelect from  './ListSelect.vue'
export default {

  name: 'Item',
  props:[
   'detail','index'
  ],
  data () {
    return {
		someList: [{"id":1,"name":"\u0e17\u0e38\u0e40\u0e23\u0e35\u0e22\u0e19 A","category_id":1,"status":1,"actived":1,"description":"\u0e17\u0e38\u0e40\u0e23\u0e35\u0e22\u0e19 A","created_date":"2017-05-04 19:58:17","updated_date":"2017-05-04 19:59:13","created_by":"system","updated_by":"system"},{"id":2,"name":"\u0e17\u0e38\u0e40\u0e23\u0e35\u0e22\u0e19 B","category_id":1,"status":1,"actived":1,"description":"\u0e17\u0e38\u0e40\u0e23\u0e35\u0e22\u0e19 B","created_date":"2017-05-04 19:58:29","updated_date":"2017-05-04 19:59:13","created_by":"system","updated_by":"system"},{"id":3,"name":"\u0e17\u0e38\u0e40\u0e23\u0e35\u0e22\u0e19 C","category_id":1,"status":1,"actived":1,"description":"\u0e17\u0e38\u0e40\u0e23\u0e35\u0e22\u0e19 C","created_date":"2017-05-04 19:58:47","updated_date":"2017-05-04 19:59:13","created_by":"system","updated_by":"system"}],
    };
  },
  methods: {
    onSelect (item,a) {
        console.log('[onSelect in child] trigger @select="function" in parent with arguments.');
        this.$emit('select', item, a);
      },
  },
  components:{
  	 ListSelect
  }
};
</script>

<style lang="css" scoped>
</style>
