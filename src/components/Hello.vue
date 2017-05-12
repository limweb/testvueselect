<template>
  <div>
    <div class="flexbox">
      <div class="flex-content">
        <div>
          <button type="button" @click="addrow" class="btn btn-info btn-sm">Add Product Row</button>
        </div>

        <table width="100%" border="1">
        <thead>
          <tr>
            <th>Select Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="(detail,index) in details">
              <tr><td>
                   <model-list-select
                      :list="options"  
                      option-value="code"
                      :model="detail"
                      option-text="product_name"
                      :custom-text="codeAndNameAndDesc"
                      placeholder="select item"
                      v-model="detail.item"
                      v-on:input="onSelect" >
                   </model-list-select>       
              </td>
              <td><input type="Number" name="qty" v-model="detail.qty" placeholder="" /></td>
              <td>
              <input type="Number" name="price" v-model="detail.price" placeholder="" /></td>
              <td>{{detail.qty * detail.price}}</td>
              <td><button @click="delitem(index)">del</button></td>
            </tr>
        </tbody>
        </table>
      </div>
    </div>
    <pre>{{details}}</pre>
  </div>
</template>

<script>
  import ModelListSelect from './ModelListSelect.vue'
  
  export default {
    data () {
      return {
        details:[
          { id:1, value: '', text: '', item:{   value: '', text: '' },qty:1, price:0 },
          { id:2, value: '', text: '', item:{   value: '', text: '' },qty:2, price:10 }
        ],
        value:"value",
        text:"text",
        codeAndNameAndDesc (item) {
          return `${item.code} - ${item.product_name} - ${item.desc}`
        },
        options: [
          { id:'1',code: '01', product_name: 'product-aa', desc: 'desc01' ,test: 'test' , price:'100' },
          { id:'2',code: '02', product_name: 'product-ab', desc: 'desc02' ,test: 'test' , price:'200' },
          { id:'3',code: '03', product_name: 'product-bc', desc: 'desc03' ,test: 'test' , price:'300' },
          { id:'4',code: '04', product_name: 'product-cd', desc: 'desc04' ,test: 'test' , price:'400' },
          { id:'5',code: '05', product_name: 'product-de', desc: 'desc05' ,test: 'test' , price:'500' },
          { id:'6',code: '06', product_name: 'product-ef', desc: 'desc06' ,test: 'test' , price:'600' }
        ],
      }
    },
    methods: {
      onSelect(item,model,c,e){
        console.log('----oninput-parent----',item,model,c,e)
        model.qty = 1;
        model.price = item.price;
      },
      addrow(){
        this.details.push({ id:this.details.length+1, item:{ id:'',code: '', product_name: '', desc: '' ,test: '' , price:'0' }, value: '',text: '',qty:1,price:0 } ) 
      },
      delitem(idx){
        console.log('delitem',idx)
        this.details.splice(idx,1);
      }
    },
    components: {
      ModelListSelect
    }
  }
</script>