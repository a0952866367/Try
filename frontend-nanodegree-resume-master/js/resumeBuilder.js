var name = "Andy Tseng";
var role = "Student";
var array = [ "a" , "b" , "c" , "d"];

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : name,
    "role" : role,
    "contactInfo" : "0939202878",
    "pictureURL" : images/"197x148.gif"
};

$("#header").append(bio.pictureURL);