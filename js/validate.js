function showForm(){
    $("#myform").show()
}

const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];
   
   
function initValidation(formName) {
    let $form = $(formName);
    $('form :input').change(function(ev){
      validateForm();
      if(!this.checkValidity())
        if(this.checkValidity()){ //this line causes valid input to have green border before submitting. Without this line, green border only
        }                         //apears when fixing invalid input, not when initial input is valid. Alert(this) also works, and only alerts 
                                  //when an error message would pop up for some reason. 
        $(this).addClass("was-validated")
    });
    $form.submit(function(event){
      $form = $(this);
      formEl=$form.get(0);
  
      event.preventDefault();
      event.stopPropagation();
      validateForm();
  
      if (!formEl.checkValidity()){
        $(":input").addClass("was-validated")
      }
      else{
        $form.hide();
        $("#thankyou").show();
      }
     
  
    });
  }
  
  function validateForm() {
    validateState("#state", "You must enter a valid two character state code, e.g., UT");
    validateCheckboxGroup("#newspaper", "#find-page", "you must select at least one!");
    
  }
  function validateState(id, msg){
    $el = $(id);
    let valid= false;
    let val = $el.val();
    let value = val.toUpperCase();
    if (stateAbbreviations.includes(value)){
        valid = true;
    }
    setElementValidity(id, valid, msg);
  }
  
  function validateCheckboxGroup(fieldName, groupName, message) {
    let valid=false;
    if ($(`${groupName} input:checkbox:checked`).length > 0){
        valid = true;
    }
    setElementValidity(fieldName, valid, message);
    return valid;
  }
  
  function setElementValidity(fieldName, valid, message){
    let $field= $(fieldName);
    let el = $field.get(0);
    if (valid) {  //it has a value
      el.setCustomValidity('');  //sets to no error message and field is valid
      $(`${fieldName}-errorMsg`).html("");
    } 
    else {
      el.setCustomValidity(message);   //sets error message and field gets 'invalid' state
      $(`${fieldName}-errorMsg`).html(message);
    }
  }


