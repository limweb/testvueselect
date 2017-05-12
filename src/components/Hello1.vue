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
                   <model-select 
                      :options="options" 
                      placeholder="select item"
                      v-model="details[index].item" >
                   </model-select>       
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
  import ModelSelect from './ModelSelect.vue'
  
  export default {
    data () {
      return {
        details:[
          { id:1, item:{   value: '', text: '' },qty:0, price:0 },
          { id:2, item:{   value: '', text: '' },qty:2, price:10 }
        ],
        options: [
          { value: '1',  text: 'aa' + ' - ' + '1' },
          { value: '2',  text: 'ab' + ' - ' + '2' },
          { value: '3',  text: 'bc' + ' - ' + '3' },
          { value: '4',  text: 'cd' + ' - ' + '4' },
          { value: '5',  text: 'de' + ' - ' + '5' },
          { value: '6',  text: 'ef' + ' - ' + '6' },
          { value: '10', text: 'ef' + ' - ' + '10' },
          { value: '11', text: 'ef' + ' - ' + '11' },
          { value: '12', text: 'ef' + ' - ' + '12' },
          { value: '13', text: 'down case' + ' - ' + 'testcase' },
          { value: '14', text: 'camel case' + ' - ' + 'testCase' },
          { value: '15', text: 'Capitalize case' + ' - ' + 'Testcase' },
          { value: '16', text: 'more a' + ' - ' + '1' },
          { value: '17', text: 'more a' + ' - ' + '2' },
          { value: '18', text: 'more a' + ' - ' + '3' },
          { value: '19', text: 'more a' + ' - ' + '4' },
          { value: '20', text: 'more a' + ' - ' + '5' },
          { value: '21', text: 'more a' + ' - ' + '6' },
          { value: '22', text: 'more a' + ' - ' + '7' },
          { value: '23', text: 'more a' + ' - ' + '8' },
          { value: '24', text: 'more a' + ' - ' + '9' }
        ],
      }
    },
    methods: {
      addrow(){
        this.details.push({ id:this.details.length+1,item:{   value: '', text: '' }, value: '',text: '',qty:0,price:0})
      },
      delitem(idx){
        console.log('delitem',idx)
        this.details.splice(idx,1);
      }
    },
    components: {
      ModelSelect
    }
  }
</script>