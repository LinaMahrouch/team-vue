<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col">
        <p class="h3 my-3 text-success fw-bold">Modifier employé</p>
        <p>Modifier un employé qui est déjà affecté à votre équipe!</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class=" col-md-4">
        <form @submit.prevent="editSubmit()">
        <div class=" mb-3">
        <input required v-model="employee.name" type="text" class="form-control" placeholder="Nom">
        </div>
        <div class="mb-3">
        <input required v-model="employee.photo" type="text" class="form-control" placeholder="Image">
        </div>
        <div class="mb-3">
        <input required v-model="employee.mail" type="Email" class="form-control" placeholder="Adresse Mail">
        </div>
        <div class="mb-3">
        <input required v-model="employee.title" type="text" class="form-control" placeholder="Intitulé du poste">
        </div>
        <div class="mb-3">
        <input required v-model="employee.gestionnaire" type="text" class="form-control" placeholder="Gestionnaire">
        </div>
       
         <div class="mb-3">
        <select  required v-model="employee.equipe" class="form-control" v-if="groups.length >0">
          <option value="">Choisir Equipe</option>
          <option :value="group.name"  v-for="group of groups" :key ="group.id">{{group.name}}</option>
          
        </select>
        </div>
        <div class="mb-3">
        <input type="submit" class="btn btn-danger" value="Modifier">
        </div>
        </form>
      </div>
      <div class="col-md-4">
       <img :src="employee.photo" alt="" class="employee-img">
      </div>
      
    </div>
   
    
  </div>
  </div>
 
</template>
<script>
import { EmployeeService } from '@/services/EmployeeService'

export default {
  name: "EditEmployee",
  data: function(){
    return {
        employeeId: this.$route.params.contactId,
        employee: {
        name: '',
        photo: '',
        mail:'',
        groupId: '',
        equipe:'',
        title: '',
        gestionnaire: '',
       


      },
        equipe:'',
        errorMessage: null,
         groups: []
    }
  },
  created: async function() {
    try {
      let response = await EmployeeService.getEmployee(this.employeeId);
      this.employee= response.data;
      let groupResponse = await EmployeeService.getAllGroups();
      this.groups= groupResponse.data;
      
    } catch (error) {
      this.errorMessage= error;

      
    }
    
  },

  methods: {
    editSubmit : async function() {
       try {
        let response= await EmployeeService.updateEmployee(this.employee, this.employeeId);
        //console.log('hello', response);
        if(response){
          
          return this.$router.push('/');

        }
      } catch (error) {
        console.log(error);
      }

    }
  }

}
</script>
<style>

</style>