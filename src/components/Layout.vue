<template>
      <b-row>
         <b-col id="sidebar" md="4">
            <b-list-group>
               <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
               <b-list-group-item href="#" active>Link with active state</b-list-group-item>
               <b-list-group-item href="#">Action links are easy</b-list-group-item>
               <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
            </b-list-group>
                        
         </b-col>
         <b-col id="principal" md="8">

         </b-col>

      </b-row>
</template>

<script>
export default {
   name: 'layout'
   
}
</script>

<style>
   #sidebar{
      background-color: gray;
   }
   #principal{
      background-color: #58FA82
   }
</style>
