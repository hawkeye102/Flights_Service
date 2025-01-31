const logger = require('../utils/loggers'); // Adjust the path if needed


class crudRepository{
    constructor(model){
        this.model=model;
    }



    async create(data) {
      
          const response = await this.model.create(data);
          return response;
      }
  
  



async destroy(data){
   
      const response= await this.model.destroy({
        where:{
            id:data
        }
      });
      return response;
   
  }

  async get(data){
   
        const response = await this.model.findByPk(data); // Correct method name

      return response;
    } 
  

  async getAll(data){
   
      const response= await this.model.findAll();
      return response;
    } 
  


  async update(id,data){   // data-> { col:value} it ,must be an objects
   
      const response= await this.model.update(data,{
        where:{
         id:id
        }
      });
      return response;
    } 
      
    
}
  
module.exports=crudRepository;

