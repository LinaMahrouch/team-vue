<template>
<div>
<div class="container mt-3">
    <div class="row">
        <div class="col">
          <!--style binding hna-->
            <p v-bind:style="{ fontSize: fontSize + 'px' }" class="h3 text-success fw-bold">Gestion de mon équipe
            <router-link to="/employees/add" class="btn btn-warning btn-sm fw-bold"><i class="fa fa-plus" aria-hidden="true"></i> Ajouter</router-link>
            </p>
            
            <form >
                <div class="row mt-3 ">
                    <div class="col-md-10">
                <div class="row">
                    <div >
                <input type="text" v-model="findName" class="form-control" placeholder="Rechercher employé">
                  
                </div>
                

                
                </div>
            </div>
            </div>
           
            </form>
        </div>
    </div>
   
    </div>  
    <!-- Loader-->



    <div class="container mt-4" v-if="employees.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="employee in filterName" :key="employee.id">
                <div class="card my-2 card border-light  shadow p-3 mb-5 bg-white rounded " >
                   <div class="card-body" >
                    <div class="row align-items-center justify-content-center  ">
                        <div class="col-sm-3  ">
                            <img :src="employee.photo" alt="" class="card-img-top mx-auto " style="border-radius: 50%">
                        </div>
                        <div class="card-body">
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
                        <div class="d-flex justify-content-center align-items-center ">
                            <router-link :to="`/employees/view/${employee.id}`" class=" btn  btn-success me-1 ">
                            <i class="fa fa-eye"></i>
                            </router-link>
                            <router-link :to="`/employees/edit/${employee.id}`" class=" btn btn-warning me-1 ">
                            <i class="fa fa-pen"></i>
                            </router-link>
                            <button class="btn btn-danger my-1" @click="pressDeleteEmployee(employee.id)">
                                <i class="fa fa-trash"></i>


                            </button>
                        </div>
                    </div>
                    </div> 
                </div>

            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { EmployeeService } from '@/services/EmployeeService';
export default {
  name: 'EmployeeManager',
  data: 
  function (){
    
    
    return {
      pointer: true,
      fontSize: 30,
        loading: false,
        employees : [],
        errorMessage :  null,
        group: '',
        findName:'',
        classBinding: {
    active: true,'text-danger': true
  },
    }

  },
  /*mounted(){
        /*axios.get('http://localhost:9000/employees').then(response=>{
            this.employees = response.data
        })
        EmployeeService.getAllEmployees().then(response=>{
            this.employees = response.data
        })
  },*/
  mounted () {
        EmployeeService.getAllEmployees().then(response=>{
            this.employees = response.data;
        }).catch(e=>{
            console.log('error', e)
        }).finally(()=>{
            this.loading=false;
        });
        
    
    
  },
  computed: {
      filterName: function () {
        return this.employees.filter(p => {
        // return true if the employee should be visible

        // in this example we just check if the search string
        // is a substring of the employee name (case insensitive/maj et min)
        return p.name.toLowerCase().indexOf(this.findName.toLowerCase()) != -1;
      });
      },
  },
  methods: {

    changePointer: function() {
      this.pointer = !this.pointer
    },

    pressDeleteEmployee: async function(employeeId){
      try {
        let response= await EmployeeService.deleteEmployee(employeeId);
        //console.log('hello', response);
        if(response){
          let response = await EmployeeService.getAllEmployees(); //get new data
          this.employees= response.data;
          return this.$router.push('/');

        }
      } catch (error) {
        console.log(error);
      }

    },

        getGroup: async function(){
      try {
        let response= await EmployeeService.getGroup(this.employee.id);
         this.group = response.data;
        console.log('hello', response);
        if(response){
          
          return this.$router.push('/');

        }
      } catch (error) {
        console.log(error);
      }

    }
    
    
    },
    watch: {
    pointer: function() {
      if(!this.pointer){

        
        //this.pointer="stop"
        
      }

      
    }
  }


   

    
    /*computed: {
  filteredNames() {
    //console.log(this.employees);
    let filter = new RegExp(this.findName, 'i')
    return this.employees.name.filter(el => el.match(filter))
  }
}*********************/
  }

</script>
<style>

</style>