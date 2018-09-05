import Vue from 'vue'
Vue.directive('random',{
    update(el,binding){
        var values = binding.value;
        el.style.background="white";
        el.style.color="red";
        for(var i=values.length; i>=0; i--){
            if(values[i] == el.innerHTML){
                el.style.background="red";
                el.style.color="white";
                return;
            }
        }
    }
})
export default{}