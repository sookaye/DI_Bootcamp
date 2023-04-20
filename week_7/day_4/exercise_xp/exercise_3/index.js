(function (numChildren, partnerName, geoLocation, jobTitle) {
 let sentence = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;
 document.querySelector("#display").innerHTML = sentence;
})(4,"Ashley","Port-Louis","Doctor");
