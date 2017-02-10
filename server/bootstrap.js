import { Meteor } from "meteor/meteor";
import { faker } from "meteor/practicalmeteor:faker";
import { Employees } from "../imports/api/employees.js";

Meteor.startup(()=>{
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();

  if(Employees.find().count() < 20){
    console.log("Less than 20 employees. Generating fake data...")
      _.each(_.range(20), function(){
          Employees.insert({
            name: faker.name.findName(),
            position: faker.name.jobTitle(),
            location: faker.name.jobArea(),
            dateHired: faker.date.past(),
            isActive: 'Y',
          })
        }
      )
      console.log("\nData has been Generated. Please ensure you disable this feature while in production.");
    };



});
