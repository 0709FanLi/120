<template>
    <div class="container">
      <div class="box">
        <span class="numberText">2,586,481,867 km</span>
      </div>
    </div>
</template>
<style>
.numberText{
  font-size: 0.43rem;
  color: #fff;
}
.box{
  width: 6.8rem;
  height: 0.95rem;
  background-color: #023AFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container{
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<script>
'use strict'
export default{
    data(){
        return {
            root:'hello word!',
        }
    }
}
</script>