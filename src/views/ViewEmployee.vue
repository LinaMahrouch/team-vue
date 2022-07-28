<template>
<div>
   <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 my-3 text-success fw-bold">Consulter profil</p>
        <p>Obtenir des informations sur votre employé!</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
        <div class="col-md-4 my-3">
 <img :src="employee.photo" class="employee-img-big">
        </div>

        <div class="col-md-6">
            <ul class="list-group">
                                <li class="list-group-item">Nom:
                                     <span class="fw-bold">{{employee.name}}</span>
                                </li>
                                <li class="list-group-item">Adresse Email:
                                     <span class="fw-bold">{{employee.mail}}</span>
                                </li>
                                <li class="list-group-item">Intitulé du poste:
                                     <span class="fw-bold">{{employee.title}}</span>
                                </li>
                                 <li class="list-group-item">Equipe:
                                     <span class="fw-bold">{{employee.equipe}}</span>
                                </li>
                                 <li class="list-group-item">Gestionnaire:
                                     <span class="fw-bold">{{employee.gestionnaire}}</span>
                                </li>
                            </ul>
        </div>
    </div>
   
  </div>
  </div>
  
</template>
<script>
import { EmployeeService } from '@/services/EmployeeService';
//import EmployeeManager from './EmployeeManager.vue'
export default {
  name: 'ViewEmployee',
  data: function(){
    return{
        employeeId: this.$route.params.contactId,
        employee: {},
        errorMessage: null,
        group: {}

    }

  },
  /*
  computed : {
    employees:  function() {
        let res =  EmployeeService.getEmployee(`${this.employeeId}`);
        //console.log("ps");
        `${this.employee}` =  res.data;

      return res.data`
    }
  }*/
  created: async function() {
    try{
        let response = await EmployeeService.getEmployee(this.employeeId);
        //+let groupResponse = await EmployeeService.getGroup(response.data);
        this.employee =  response.data;
        //let groupResponse = await EmployeeService.getGroup(this.equipe);
        //this.group = groupResponse.data;
    }
    catch(error)
    {
        this.errorMessage = error;
        console.log(this.errorMessage);

    }
    
  }
}
</script>
<style>

</style>