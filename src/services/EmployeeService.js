import axios  from "axios";

export class EmployeeService{
    static serverURL = "http://localhost:9000";

    static getAllEmployees(){

        let dataURL= `${this.serverURL}/employees`;
        return axios.get(dataURL)
    }

    static getEmployee(contactId){
        let dataURL= `${this.serverURL}/employees/${contactId}`;
        return axios.get(dataURL)
    }

    static createEmployee(employee)
    {
        let dataURL= `${this.serverURL}/employees/`;
        return axios.post(dataURL,employee);
    }
    static updateEmployee(employee, contactId)
    {
        let dataURL= `${this.serverURL}/employees/${contactId}`;
        return axios.put(dataURL,employee);
    }

    static deleteEmployee(contactId)
    {
        let dataURL= `${this.serverURL}/employees/${contactId}`;
        return axios.delete(dataURL,contactId);
    }

    static getAllGroups(){

        let dataURL= `${this.serverURL}/groups/`;
        return axios.get(dataURL)

    }
    static getGroup(employee){

        let groupId = employee.contactId;
        let dataURL = `${this.serverURL}/groups/${groupId}` ;
        return axios.get(dataURL);
        



    }

}