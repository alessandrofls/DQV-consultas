<template>
     <b-row align-v="center" class="login">
       <b-col>
         <h1>{{msg}}</h1>
         <b-card header="Bem vindo"
                class="text-center">
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
      background-color: rgba(255, 0, 0, 1);
      padding-bottom: 20px;
      
 }

b-row{
    height: inherit;
    width: inherit;
}

</style>

