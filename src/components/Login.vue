<template>
     <b-row align-v="center" deck class="mb-3 login">
       <b-col class="text-center">
         <h3>{{msg}}</h3>
         <b-card border-variant="light" header="Bem Vindo(a)" class="text-center">
            <b-form>
              <b-form-input id='cpf'
                            type='text'
                            v-model="form.cpf"
                            required
                            placeholder='cpf'>
              </b-form-input>
              
              <b-form-input id='senha'
                            type='password'
                            v-model="form.senha"
                            required
                            placeholder='senha'>
              </b-form-input>

                <b-button type='submit' variant='primary'>Login</b-button>

            </b-form>
          </b-card>

          <b-row align-h="center">
        <b-col cols="4">One of two columns</b-col>
        <b-col cols="4">One of two columns</b-col>
    </b-row>
       </b-col>
     </b-row>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'Módulo de Marcação de Consultas do DQV',
      form: {
        cpf: '',
        senha: ''
      }
    }
  }
}
</script>

<style>
.login{
      height: inherit;
      width: inherit;
 }
 
.row{
  background-color: rgba(255, 255, 255, 0.7);
}

</style>

