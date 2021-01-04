<template>
    <div id="root">
        我是父元素div
        <p>
            我是子元素p
            <span>{{root}}</span>
        </p>
    </div>
</template>
<style>
    html {
        font-size: 10px;
    }
    div {
        font-size: 4rem; /* 40px */
        width: 30rem;  /* 300px */
        height: 30rem;
        border: solid 1px black;
    }
    p {
        font-size: 2rem; /* 20px */
        width: 15rem;
        height: 15rem;
        border: solid 1px red;
    }
    span {
        font-size: 1.5rem;
        width: 10rem;
        height: 10rem;
        border: solid 1px blue;
        display: block;
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