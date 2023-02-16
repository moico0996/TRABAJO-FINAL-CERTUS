function validar() {
    var nombre, region, distrito, correo, telefono, descripcion, expresion; 
        nombre= document.getElementById("nombre").value; 
        region= document.getElementById("region").value; 
        distrito= document.getElementById("distrito").value;
        correo= document.getElementById("correo").value; 
        telefono= document.getElementById("telefono").value;
        descripcion= document.getElementById("descripcion").value;
        clave= document.getElementById("clave").value;
        expresion=/\w+@\w+\.+[a-z]/;



        if(nombre===""|| region===""|| distrito==="" || correo===""|| telefono==="" || descripcion===""){

            alert("falta agregar texto"); 
            return false;

        }
        else if(nombre.length>30 ){
            alert("supero el numero de caracteres"); 
            return false;
        } 
        else if(region.length>30){
            alert("supero el numero de caracteres"); 
            return false;
        } 
        else if(distrito.length>30){
            alert("supero el numero de caracteres"); 
            return false;
        } 
        else if(correo.length>30){
            alert("supero el numero de caracteres"); 
            return false;
        } 
        else if(!expresion.test(correo)){
            alert("no cumple con lo solicitado"); 
            return false;

        }

        else if(telefono.length>20){
            alert("no es un numero telefonico"); 
            return false;
        } 
        else if(isNaN(telefono)){
            alert("no es  un numero telefonico")
            return false;


        }


        else if(descripcion.length>100){
            alert("supero el numero de caracteres"); 
            return false;
        }
        else if(clave.length>10){
            alert("superaste el limite permitido")
        }
    




}






function form(){
    var usuario, contraseña, sexo; 
    usuario= document.getElementById("usuario").value; 
    contraseña= document.getElementById("contraseña").value;
    sexo= document.getElementById("sexo").value; 



    if(usuario==="" ||contraseña===""||sexo===""){
        alert("ingresa los datos"); 
        return false;
        
    }
    else if(usuario.length>10){
        alert("es un usuario corto nada mas"); 
        return false; 

    }
    else if(sexo.length>10){
        alert("es un usuario corto nada mas"); 
        return false; 

    }




}