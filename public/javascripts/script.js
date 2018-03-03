var app = new Vue({
    el:'#count',
    data:{
        number: 0
    },
    methods:{
        increment: function () {
            this.number++;
        }
    },
});
