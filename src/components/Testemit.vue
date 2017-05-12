<template>
<div>
  <span>{{obj.name}}</span>
  <button  @click="testemit" >Click</button>
</div>
</template>

<script>
export default {
  name: 'Testemit',
    props:[
     "obj"
    ],
  data () {
    return {
       test:"aaaaa"
    };
  },
  methods: {
    testemit(){
      console.log('testemit')
      let a = 'aaaaa'
      let b = 'bbbbb'
      this.obj.name = 'xxxx'
      console.log(this.obj.name)
      this.$emit('updateobj',a,this.obj)
    }
  }
};
</script>

<style lang="css" scoped>
</style>
